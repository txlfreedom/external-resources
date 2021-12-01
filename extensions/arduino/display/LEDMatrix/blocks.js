/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#FF00FF';
    const subcolor = '#FF77FF';
    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        // .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .find(block => block.type === 'arduino_pin_setUnoCoreDigitalOutput')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.LEDMatrix_Init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LEDMATRIX_INIT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'num',
                        options: [
                            [Blockly.Msg.LEDMATRIX1, 1],
                            [Blockly.Msg.LEDMATRIX2, 2],
                            [Blockly.Msg.LEDMATRIX3, 3],
                            [Blockly.Msg.LEDMATRIX4, 4]
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'CLK',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'DIO',
                        options: digitalPins
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.LEDMatrix_DisplayMode = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LEDMATRIX_DISPLAYMODE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'num',
                        options: [
                            [Blockly.Msg.LEDMATRIX1, 1],
                            [Blockly.Msg.LEDMATRIX2, 2],
                            [Blockly.Msg.LEDMATRIX3, 3],
                            [Blockly.Msg.LEDMATRIX4, 4]
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'index',
                        options: [
                            [Blockly.Msg.NORMAL, 1],
                            [Blockly.Msg.OPPOSITE, 0]
                        ]
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.LEDMatrix_setBrightness = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LEDMATRIX_SETBRIGHTNESS,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'num',
                        options: [
                            [Blockly.Msg.LEDMATRIX1, 1],
                            [Blockly.Msg.LEDMATRIX2, 2],
                            [Blockly.Msg.LEDMATRIX3, 3],
                            [Blockly.Msg.LEDMATRIX4, 4]
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'brightness',
                        options: [
                            [Blockly.Msg.BRIGHTNESS1, 1],
                            [Blockly.Msg.BRIGHTNESS2, 2],
                            [Blockly.Msg.BRIGHTNESS3, 3],
                            [Blockly.Msg.BRIGHTNESS4, 4],
                            [Blockly.Msg.BRIGHTNESS5, 5],
                            [Blockly.Msg.BRIGHTNESS6, 6],
                            [Blockly.Msg.BRIGHTNESS7, 7],
                            [Blockly.Msg.BRIGHTNESS8, 8],
                        ]
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.LEDMatrix_drawStr = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LEDMATRIX_DRAWSTR,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'num',
                        options: [
                            [Blockly.Msg.LEDMATRIX1, 1],
                            [Blockly.Msg.LEDMATRIX2, 2],
                            [Blockly.Msg.LEDMATRIX3, 3],
                            [Blockly.Msg.LEDMATRIX4, 4]
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'X'
                    },
                    {
                        type: 'field_slider',
                        name: 'Y',
                        value: '7',
                        precision: 1,
                        min: '0',
                        max: '15'
                    },
                    {
                        type: 'input_value',
                        name: 'TEXT'
                    },
                ],
                colour: color,
                colourSecondary: subcolor,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
