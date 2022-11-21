#include <Arduino.h>
#include <OctoWS2811.h>
#include <FastLED.h>

#ifndef STRIP_PATTERNS
#define STRIP_PATTERNS

#define RED    0xFF0000
#define GREEN  0x00FF00
#define BLUE   0x0000FF
#define LIGHTBLUE 0x00FFFF
#define YELLOW 0xFFFF00
#define PINK   0xFF1088
#define ORANGE 0xE05800
#define WHITE  0xFFFFFF
#define PURPLE 0x8100FF
#define ENDCOL 0x62FF00

// Change for each project compiled
#define LEDS_PER_STRIP 30
// Change for each project compiled
#define STRIPS 8

enum class LibraryUsed { OCTO_LIB, FAST_LED_LIB };


// Set if using the OctoWS2811 library
extern OctoWS2811 ledsOcto;

// Set if using FastLED library
extern CRGB ledsFast[LEDS_PER_STRIP * STRIPS];

class StripPatterns {
  public:
    StripPatterns(LibraryUsed library);

    void MulticolorSineWave(int colors[4], int startInd, int endInd, int leg);
    void BouncingColoredBalls(int BallCount, int colors[], int startInd, int endInd, int leg, bool reverse = true);
    void Fire(int Cooling, int Sparking, int SpeedDelay, int startInd, int endInd);
    void RainbowIndividual(int rainbowWait, int startInd, int endInd);
    void MeteorRain(int color, int startInd, int endInd, int strip, byte meteorTrailDecay, int speedDelay);
    void setColorStrip(int color, int startInd, int endInd);

    // Predefined colors of rainbow
    int rainbowColors[180];

  private:
    LibraryUsed _library;

    void setPixelHeatColor (int Pixel, byte temperature);
    void fadeToBlack(int ledNo, byte fadeValue);
    void showStrip();
    void setPixel(uint32_t num, int color);
    void setPixel(uint32_t num, uint8_t red, uint8_t green, uint8_t blue);
};

#endif