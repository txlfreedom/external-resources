/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#D39DDB';
    // const secondaryColour = '#BA55D3';

    const analogPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        // .find(block => block.type === 'arduino_pin_readAnalogPin')
        .find(block => block.type === 'arduino_pin_readUnoCoreAnalogPin')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.LM35_readTemperature = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LM35_READ_TEMPERATURE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: analogPins
                    }
                ],
                colour: color,
                // secondaryColour: secondaryColour,
                extensions: ['output_number']
                // extensions: ['shape_statement']
            });
        }
    };


    return Blockly;
}

exports = addBlocks;
