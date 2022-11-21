#include <Arduino.h>
#include <OctoWS2811.h>
#include <FastLED.h>
#include "ledStripPatterns.h"
#include "ledUtilities.h"


StripPatterns::StripPatterns(LibraryUsed library) {
  LibraryUsed _library = library;

  // pre-compute the 180 rainbow colors
  for (int i=0; i<180; i++) {
    int hue = i * 2;
    int saturation = 100;
    int lightness = 50;

    rainbowColors[i] = makeColor(hue, saturation, lightness);
  }
}

/**
 * Adapted from https://www.tweaking4all.com/hardware/arduino/adruino-led-strip-effects
 * meteorSize – the number of LEDs that represent the meteor, not counting the tail of the meteor
 * meteorTrailDecay - how fast the meteor tail decays/ disappears. A larger number makes the tail short and/or disappear faster.
 *    Theoretically a value of 64 should reduce the brightness by 25% for each time the meteor gets drawn.
 * speedDelay - how many milliseconds (1000 milliseconds in a second) the drawing will be delayed
*/
void StripPatterns::MeteorRain(int color, int startInd, int endInd, int strip, byte meteorTrailDecay, int speedDelay) {
  static int stripInds[STRIPS];

  // Delay code
  static int lastMillis = millis();
  static int lastStart = 0;
  // Delay without actually pausing the whole teensy, allowing for other delays on other pixel rows in a single loop
  if (millis() - lastMillis < speedDelay) return;
  // Update the delay time once per loop ASSUMING that a loop INCREMENTS through the pixels (++)!!!
  if (lastStart > startInd) lastMillis = millis();
  lastStart = startInd;

  // Set the starting ind to not be zero, but the actual starting ind
  if (stripInds[strip] < startInd) stripInds[strip] = startInd;

  // fade brightness all LEDs one step
  for (int j = startInd; j < endInd + 1; j++) {
    if (random(10)>5) {
      fadeToBlack(j, meteorTrailDecay );
    }
  }


  // draw meteor
  int meteorSize = max((endInd - startInd + 1) / 10, 1);
  for(int j = 0; j < meteorSize; j++) {
    if( (stripInds[strip] - j < endInd+1) && (stripInds[strip]-j >= startInd) ) {
      setPixel(stripInds[strip]-j, color);
    }
  }

  showStrip();

  // Emulate a loop through startInd < i < endInd*2, aka all leds twice (for decay niceness)
  stripInds[strip] = (stripInds[strip] + 1) % (endInd*2 - startInd);
}


/**
 * Adapted from https://www.tweaking4all.com/hardware/arduino/adruino-led-strip-effects
 *
 * Max num of balls = 4
 * Max num of strips/legs = 8
*/
void StripPatterns::BouncingColoredBalls(int BallCount, int colors[], int startInd, int endInd, int leg, bool reverse) {
  const float Gravity = -9.81;
  const int StartHeight = 1;
  const float ImpactVelocityStart = sqrt( -2 * Gravity * StartHeight );
  const int MaxBalls = 4;


  // Max 4 balls, per each strip /
  static float Height[STRIPS][MaxBalls];
  static float ImpactVelocity[STRIPS][MaxBalls];
  static float TimeSinceLastBounce[STRIPS][MaxBalls];
  static int   Position[STRIPS][MaxBalls];
  static long  ClockTimeSinceLastBounce[STRIPS][MaxBalls];
  static float Dampening[STRIPS][MaxBalls];
  static bool init[STRIPS] = {true, true, true, true, true, true, true, true};

  if (init[leg]) for (int i = 0 ; i < BallCount ; i++) {
    ClockTimeSinceLastBounce[leg][i] = millis() - leg*1000;
    Height[leg][i] = StartHeight;
    Position[leg][i] = 0;
    ImpactVelocity[leg][i] = ImpactVelocityStart;
    TimeSinceLastBounce[leg][i] = 0;
    Dampening[leg][i] = 0.90 - float(i)/pow(BallCount,2);
    init[leg] = false;
  }

    for (int i = 0 ; i < BallCount ; i++) {
        TimeSinceLastBounce[leg][i] =  millis() - ClockTimeSinceLastBounce[leg][i];
        Height[leg][i] = 0.5 * Gravity * pow( TimeSinceLastBounce[leg][i]/1000 , 2.0 ) + ImpactVelocity[leg][i] * TimeSinceLastBounce[leg][i]/1000;

        if ( Height[leg][i] < 0 ) {
        Height[leg][i] = 0;
        ImpactVelocity[leg][i] = Dampening[leg][i] * ImpactVelocity[leg][i];
        ClockTimeSinceLastBounce[leg][i] = millis();

        if ( ImpactVelocity[leg][i] < 0.01 ) {
            ImpactVelocity[leg][i] = ImpactVelocityStart;
        }
        }
        Position[leg][i] = round( Height[leg][i] * (endInd - startInd) / StartHeight);
    }

    // Clear trails
    for (int i=startInd; i < endInd+1; i++) {
        setPixel(i, 0);
    }

    if (reverse) {
        for (int i = 0 ; i < BallCount ; i++) {
            setPixel(endInd - Position[leg][i], colors[i]);
        }
    }
    else {
        for (int i = 0 ; i < BallCount ; i++) {
            setPixel(Position[leg][i] + startInd, colors[i]);
        }
    }


    showStrip();
}


/**
 * Set a row of pixels to a color, cycling through colors at rainbowWait rate
*/
void StripPatterns::RainbowIndividual(int rainbowWait, int startInd, int endInd) {
  static int timeRainbowMillis = millis();
  static int colorInd = 0;

  // Delay without actually pausing the whole teensy, allowing for other delays on other pixel rows in a single loop
  if (millis() - timeRainbowMillis >= rainbowWait / LEDS_PER_STRIP) {
    // Only one gloabal var set per loop
    timeRainbowMillis = millis();
    colorInd = ++colorInd % 180;
  }

  for (int x=startInd; x < endInd+1; x++) {
      int index = (colorInd + x) % 180;
      setPixel(x, rainbowColors[index]);
  }
  showStrip();
}



/**
Adapted from https://www.tweaking4all.com/hardware/arduino/adruino-led-strip-effects/#LEDStripEffectFire
The first one (Cooling) indicates how fast a flame cools down. More cooling means shorter flames, and the recommended values
are between 20 and 100. 50 seems the nicest.
The Second parameter (Sparking), indicates the chance (out of 255) that a spark will ignite.
A higher value makes the fire more active. Suggested values lay between 50 and 200, with my personal preference being 120.
The last parameter (SpeedDelay) allows you to slow down the fire activity … a higher value makes the flame appear slower.
You’ll have to play a little with that, but personally I like a value between 0 and 20.
*/
void StripPatterns::Fire(int Cooling, int Sparking, int SpeedDelay, int startInd, int endInd) {
  static int timeFireMillis = millis();
  static int lastStart = 0;
  // One array for all pixels
  static byte heat[LEDS_PER_STRIP*STRIPS];

  // Delay without actually pausing the whole teensy, allowing for other delays on other pixel rows in a single loop
  if (millis() - timeFireMillis < SpeedDelay) return;
  // Update the delay time once per loop ASSUMING that a loop INCREMENTS through the pixels (++)!!!
  if (lastStart > startInd) timeFireMillis = millis();

  lastStart = startInd;
  int numLeds = endInd-startInd + 1;
  int cooldown;

  // Step 1.  Cool down every cell a little
  for (int i = startInd; i < endInd + 1; i++) {
    cooldown = random(0, ((Cooling * 10) / numLeds) + 2);

    if(cooldown>heat[i]) {
      heat[i]=0;
    } else {
      heat[i]=heat[i]-cooldown;
    }
  }

  // Step 2.  Heat from each cell drifts 'up' and diffuses a little
  for( int k= endInd; k >= startInd+2; k--) {
    heat[k] = (heat[k - 1] + heat[k - 2] + heat[k - 2]) / 3;
  }

  // Step 3.  Randomly ignite new 'sparks' near the bottom
  if( random(255) < Sparking ) {
    // Spark in the bottom 20%
    int y = random(0, numLeds / 5) + startInd;
    heat[y] = heat[y] + random(160,255);
  }

  // Step 4.  Convert heat to LED colors
  for(int j = startInd; j < endInd + 1; j++) {
    setPixelHeatColor(j, heat[j] );
  }

  showStrip();
}

void StripPatterns::setPixelHeatColor (int Pixel, byte temperature) {
  // Scale 'heat' down from 0-255 to 0-191
  byte t192 = round((temperature/255.0)*191);

  // calculate ramp up from
  byte heatramp = t192 & 0x3F; // 0..63
  heatramp <<= 2; // scale up to 0..252

  // figure out which third of the spectrum we're in:
  if( t192 > 0x80) {                     // hottest
    setPixel(Pixel, 255, 255, heatramp);
  } else if( t192 > 0x40 ) {             // middle
    setPixel(Pixel, 255, heatramp, 0);
  } else {                               // coolest
    setPixel(Pixel, heatramp, 0, 0);
  }
}


// For setting entire strip to one color
void StripPatterns::setColorStrip(int color, int startInd, int endInd) {
  for (int i=startInd; i < endInd+1; i++) {
    setPixel(i, color);
  }
//   ledsOcto.setPixel(endInd, WHITE);
  showStrip();
}


void StripPatterns::fadeToBlack(int ledNo, byte fadeValue) {
  uint32_t oldColor;
  uint8_t r, g, b;
  int value;

  switch (_library) {
    case LibraryUsed::OCTO_LIB:
      oldColor = ledsOcto.getPixel(ledNo);
      break;

    case LibraryUsed::FAST_LED_LIB:
      oldColor = ledsFast[ledNo];
      break;
  }

  r = (oldColor & 0x00ff0000UL) >> 16;
  g = (oldColor & 0x0000ff00UL) >> 8;
  b = (oldColor & 0x000000ffUL);

  r=(r<=10)? 0 : (int) r-(r*fadeValue/256);
  g=(g<=10)? 0 : (int) g-(g*fadeValue/256);
  b=(b<=10)? 0 : (int) b-(b*fadeValue/256);

  setPixel(ledNo, r,g,b);
}

void StripPatterns::showStrip() {
  switch (_library) {
    case LibraryUsed::OCTO_LIB:
      ledsOcto.show();
      break;

    case LibraryUsed::FAST_LED_LIB:
      FastLED.show();
      break;
  }
}

void StripPatterns::setPixel(uint32_t num, int color) {
  switch (_library) {
    case LibraryUsed::OCTO_LIB:
      ledsOcto.setPixel(num, color);
      break;

    case LibraryUsed::FAST_LED_LIB:
      ledsFast[num] =  CRGB(color);
      break;
  }
}

void StripPatterns::setPixel(uint32_t num, uint8_t red, uint8_t green, uint8_t blue) {
  switch (_library) {
    case LibraryUsed::OCTO_LIB:
      ledsOcto.setPixel(num, red, green, blue);
      break;

    case LibraryUsed::FAST_LED_LIB:
      ledsFast[num] =  CRGB(red, green, blue);
      break;
  }
}
