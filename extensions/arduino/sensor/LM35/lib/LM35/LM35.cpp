#include "LM35.h"

LM35::LM35(){}

String LM35::readTemperature(uint8_t pin)
{
	 return (String(analogRead(pin)*0.0048828125*100)+"℃");
}
