/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.LEDMatrix_Init = function (block) {
        const num = block.getFieldValue('num');
        const CLK = block.getFieldValue('CLK');
        const DIO = block.getFieldValue('DIO');

        Blockly.Arduino.includes_.LEDMatrix_init = `#include <TM1640_LEDMatrix.h>`;
        Blockly.Arduino.definitions_.LEDMatrix_init = `LEDMatrix  _ledmatrix_${num}(${CLK}, ${DIO});\n`;

        return ``;
    };
    Blockly.Arduino.LEDMatrix_DisplayMode = function (block) {
        const num = block.getFieldValue('num');
        const index = block.getFieldValue('index');

        return `_ledmatrix_${num}.setColorIndex(${index});\n`;
    };
    Blockly.Arduino.LEDMatrix_setBrightness  = function (block) {
        const num = block.getFieldValue('num');
        const brightness = block.getFieldValue('brightness');

        return `_ledmatrix_${num}.setBrightness(${brightness});\n`;
    };
    Blockly.Arduino.LEDMatrix_drawStr  = function (block) {
        const num = block.getFieldValue('num');
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = block.getFieldValue('Y');
        // const text = Blockly.Arduino.valueToCode(block, 'TEXT', Blockly.Arduino.ORDER_ATOMIC).slice(1, -1);
        var text = Blockly.Arduino.valueToCode(block, 'TEXT', Blockly.Arduino.ORDER_ATOMIC);
        if(text.length>22){
            text='"'+text.slice(1, 20)+'"'
        }
        return `_ledmatrix_${num}.drawStr(${x}, ${y}, ${text});\n`;
    };
    

    return Blockly;
}

exports = addGenerator;
