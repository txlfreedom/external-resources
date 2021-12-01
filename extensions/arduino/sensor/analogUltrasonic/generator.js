/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    // Blockly.Arduino.analogUltrasonic_readDistance = function (block) {
    //     const pin = block.getFieldValue('pin');
    //     return `digitalRead(${pin});\n`
    // };

    Blockly.Arduino['analogUltrasonic_readDistance'] = function(block) {
        var arg0 = block.getFieldValue('pin') || 'A0';
        var code = "analogRead(" + arg0 + ")";
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    
    return Blockly;
}

exports = addGenerator;
