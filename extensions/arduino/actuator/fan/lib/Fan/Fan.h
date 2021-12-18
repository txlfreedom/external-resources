#ifndef Fan_h
#define Fan_h

#if defined(ARDUINO) && ARDUINO >= 100
	#include "arduino.h"
#else
	#include "WProgram.h"
#endif

class Fan
{

public:
    Fan();
    String readTemperature(uint8_t pin);
};

#endif