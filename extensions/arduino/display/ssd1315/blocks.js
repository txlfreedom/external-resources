/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#BE77FF';
    const secondaryColour = '#A9A9A9';

    Blockly.Blocks.ssd1315_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SSD1315_INIT,
                args0: [
                    {
                        type: 'input_value',
                        name: 'ADDR'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.ssd1315_printline = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SSD1315_PRINTLINE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'LINE',
                        options: [
                            ['1', 1],
                            ['2', 2],
                            ['3', 3],
                            ['4', 4]
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'TEXT'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.ssd1315_clear = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SSD1315_CLEAR,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.ssd1315_setRotaion = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SSD1315_SETROTAION,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'ANGLE',
                        options: [
                            ['180', 180],
                            ['0', 0]
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.ssd1315_x = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                args0: [
                    {
                        type: 'field_slider',
                        name: 'NUM',
                        value: '42',
                        precision: 1,
                        min: '0',
                        max: '127'
                    }
                ],
                output: 'Number',
                outputShape: Blockly.OUTPUT_SHAPE_ROUND,
                colour: Blockly.Colours.textField,
                colourSecondary: Blockly.Colours.textField,
                colourTertiary: Blockly.Colours.textField
            });
        }
    };

    Blockly.Blocks.ssd1315_print = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SSD1315_PRINT,
                args0: [
                    {
                        type: 'input_value',
                        name: 'X'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'Y',
                        options: [
                            ['0', 0],
                            ['1', 1],
                            ['2', 2],
                            ['3', 3]
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'TEXT'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
