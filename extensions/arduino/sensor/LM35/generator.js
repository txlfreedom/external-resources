/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino['LM35_readTemperature'] = function(block) {
        Blockly.Arduino.includes_['LM35_readTemperature'] = `#include <LM35.h>`;
        Blockly.Arduino.definitions_.LEDMatrix_init = `LM35 LM35;\n`;
        var arg0 = block.getFieldValue('pin') || 'A0';
        var code = "LM35.readTemperature(" + arg0 + ")";
        // var code = "readTemperature(" + "analogRead(" + arg0 + "))";

        return [code, Blockly.Arduino.ORDER_ATOMIC];
        
    };
    
    return Blockly;
}

exports = addGenerator;
