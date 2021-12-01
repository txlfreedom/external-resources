/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.motor_setMOTORState = function (block) {
        // const pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);
        const pin = block.getFieldValue('pin');
        const state = block.getFieldValue('state');
        // const state = this.getFieldValue('state');

        // return `digitalWrite(${pin}, ${state});\n`;
        return `analogWrite(${pin}, ${state});\n`;
    };

    return Blockly;
}

exports = addGenerator;
