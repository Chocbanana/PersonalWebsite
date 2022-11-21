#include <OctoWS2811.h>
#include "ledStripPatterns.h"


// Max num of LEDs per a strip
const int ledsPerStrip = 30;

// Seems excessive to have *6 but w/e
DMAMEM int displayMemory[ledsPerStrip*6];
int drawingMemory[ledsPerStrip*6];
// Strip I'm currently using is GRB
const int config = WS2811_GRB | WS2811_800kHz;



// Indices for the octopus LEDs (arms are uneven lengths)
const int LEDStarts[8] = {0,ledsPerStrip*1, ledsPerStrip*2, ledsPerStrip*3, ledsPerStrip*4,
                          ledsPerStrip*5, ledsPerStrip*6, ledsPerStrip*7};
const int LEDEnds[8] = {7,ledsPerStrip*1 + 14, ledsPerStrip*2 + 9, ledsPerStrip*3 + 15,
                        ledsPerStrip*4 + 19, ledsPerStrip*5 + 22, ledsPerStrip*6 + 29, ledsPerStrip*7 + 9};

// Octopus eyes indices, are on pin/strip #1
const int eyesStart = 8;
const int eyesEnd = 13;

// Predefined colors for bouncing ball animation
int ballColors[8][2];
//rgb color from bright to dark
// const int oceanColors[4] = { 0x4c738f, 0x9ec6d0, 0x2c8fa3,  0x003136 };
const int oceanColors[4] = { BLUE, PURPLE, PINK, RED };


// Main call that creates the leds object to use with OctoWS2811
OctoWS2811 leds(ledsPerStrip, displayMemory, drawingMemory, config);

// Init the strip patterns class
StripPatterns patterns(LibraryUsed::OCTO_LIB);

void setup() {

  for (int i = 0; i < 8; i++) {
    ballColors[i][0] = patterns.rainbowColors[(i+1)*24 % 180];
    ballColors[i][1] = patterns.rainbowColors[(i+1)*26 % 180];
  }

  leds.begin();
  Serial.begin(38400);
}


const int loopTimeSecs = 30;
const int rainbowDelay = 1100;
int NumFunctions = 4;

void loop() {

  static int currInd = 0;
  static int lastMillis = millis();



  int i;
  switch (currInd) {
    case 0:
        for (i = 0; i < 8; i++) patterns.MeteorRain(patterns.rainbowColors[(i+12)*7 % 180], LEDStarts[i], LEDEnds[i], i, 128, 60);
      break;
    case 1:
        for (i = 0; i < 8; i++) patterns.Fire(45, 120, 40, LEDStarts[i], LEDEnds[i]);
      break;
    case 2:
        for (i = 0; i < 8; i++) patterns.BouncingColoredBalls(2, ballColors[i], LEDStarts[i], LEDEnds[i], i);
      break;
    case 3:
      for (i = 0; i < 8; i++) patterns.RainbowIndividual(rainbowDelay, LEDStarts[i], LEDEnds[i]);
    break;
  }

  // Rainbow eyes!!
  patterns.RainbowIndividual(rainbowDelay, eyesStart, eyesEnd);

  // Loop thru all designs
  if (lastMillis + (loopTimeSecs * 1000) < millis()) {
    lastMillis = millis();
    currInd = ++currInd % NumFunctions;
  }

  // Only show rainbow once
  if (lastMillis / (loopTimeSecs * 1000) > NumFunctions ) {
    NumFunctions = 3;
  }
}
