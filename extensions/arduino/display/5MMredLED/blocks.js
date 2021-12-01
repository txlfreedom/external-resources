/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#CD5C5C';
    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        // .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .find(block => block.type === 'arduino_pin_setUnoCoreDigitalOutput')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.redLED_setLEDState = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.REDLED_SET_LED_STATE,
                args0: [
                    // {
                    //     type: 'input_value',
                    //     name: 'pin'
                    // },
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'state',
                        options: [
                            [Blockly.Msg.REDLED_ON, '1'],
                            [Blockly.Msg.REDLED_OFF, '0']]
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
