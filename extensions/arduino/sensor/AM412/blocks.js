/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#D39DDB';
    // const secondaryColour = '#BA55D3';

    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        // .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .find(block => block.type === 'arduino_pin_setUnoCoreDigitalOutput')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.AM412_readValue = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.AM412_READ_VALUE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: digitalPins
                    }
                ],
                colour: color,
                // secondaryColour: secondaryColour,
                extensions: ['output_boolean']
                // extensions: ['shape_statement']
            });
        }
    };


    return Blockly;
}

exports = addBlocks;
