/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#6495ED';
    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        // .find(block => block.type === 'arduino_pin_setDigitalOutput')
        // .find(block => block.type === 'arduino_pin_setUnoCoreDigitalOutput')
        .find(block => block.type === 'arduino_pin_setUnoCoreInterfacePwmOutput')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.motor_setMOTORState = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MOTOR_SET_MOTOR_STATE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'state',
                        options: [
                            [Blockly.Msg.MOTOR_ON, '255'],
                            [Blockly.Msg.MOTOR_OFF, '0']]
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
