#include "Fan.h"

Fan::Fan(){}

String Fan::readTemperature(uint8_t pin)
{
	 return (String(analogRead(pin)*0.0048828125*100)+"℃");
}
