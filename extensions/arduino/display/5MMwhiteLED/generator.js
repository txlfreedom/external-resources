/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.whiteLED_setLEDState = function (block) {
        // const pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);
        const pin = this.getFieldValue('pin');
        const state = this.getFieldValue('state');

        return `digitalWrite(${pin}, ${state});\n`;
    };

    return Blockly;
}

exports = addGenerator;
