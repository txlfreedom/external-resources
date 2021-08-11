/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#00D7B0';

    Blockly.Blocks.unoCore_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.UNOCORE_INIT,
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.unoCore_setServoDegree = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.UNOCORE_SETSERVODEGREE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'port',
                        options: [
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4'],
                            ['5', '5'],
                            ['6', '6'],
                            ['7', '7'],
                            ['8', '8']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'degree'
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.unoCore_setMotorSpeed = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.UNOCORE_SETMOTORSPEED,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'port',
                        options: [
                            ['M1', '1'],
                            ['M2', '2'],
                            ['M3', '3'],
                            ['M4', '4']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'dir',
                        options: [
                            [Blockly.Msg.UNOCORE_FORWARD, 'FORWARD'],
                            [Blockly.Msg.UNOCORE_BACKWARD, 'BACKWARD']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'speed'
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.unoCore_stopMotor = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.UNOCORE_STOPMOTOR,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'port',
                        options: [
                            ['M1', '1'],
                            ['M2', '2'],
                            ['M3', '3'],
                            ['M4', '4']
                        ]
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.unoCore_setRgbLedColor = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.UNOCORE_SETRGBLEDCOLOR,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'no',
                        options: [
                            [Blockly.Msg.UNOCORE_ALL, '(E_RGB_INDEX)0'],
                            [Blockly.Msg.UNOCORE_LEFT, '(E_RGB_INDEX)2'],
                            [Blockly.Msg.UNOCORE_RIGHT, '(E_RGB_INDEX)1']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'colour'
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.unoCore_setBuzzer = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.UNOCORE_SETBUZZER,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'sound',
                        options: [
                            [Blockly.Msg.UNOCORE_SOUND_CONNECT, '0'],
                            [Blockly.Msg.UNOCORE_SOUND_DISCONNECT, '1'],
                            [Blockly.Msg.UNOCORE_SOUND_BUTTON, '2'],
                            [Blockly.Msg.UNOCORE_SOUND_MODE, '3'],
                            [Blockly.Msg.UNOCORE_SOUND_SUPERRISE, '6'],
                            [Blockly.Msg.UNOCORE_SOUND_OHOH, '7'],
                            [Blockly.Msg.UNOCORE_SOUND_OHOH2, '8'],
                            [Blockly.Msg.UNOCORE_SOUND_CUTE, '9'],
                            [Blockly.Msg.UNOCORE_SOUND_HAPPY, '11'],
                            [Blockly.Msg.UNOCORE_SOUND_SAD, '14'],
                            [Blockly.Msg.UNOCORE_SOUND_SAD2, '15']
                        ]
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.unoCore_ps2ReadData = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.UNOCORE_PS2READDATA,
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.unoCore_ps2GetButton = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.UNOCORE_PS2GETBUTTON,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'button',
                        options: [
                            [Blockly.Msg.UNOCORE_PS2_UP, '16'],
                            [Blockly.Msg.UNOCORE_PS2_DOWN, '64'],
                            [Blockly.Msg.UNOCORE_PS2_LEFT, '128'],
                            [Blockly.Msg.UNOCORE_PS2_RIGHT, '32'],
                            [Blockly.Msg.UNOCORE_PS2_TRIANGLE, '4096'],
                            [Blockly.Msg.UNOCORE_PS2_CIRCLE, '8192'],
                            [Blockly.Msg.UNOCORE_PS2_CROSS, '16384'],
                            [Blockly.Msg.UNOCORE_PS2_SQUARE, '32768'],
                            ['L1', '1024'],
                            ['L2', '256'],
                            ['L3', '2'],
                            ['R1', '2048'],
                            ['R2', '512'],
                            ['R3', '4'],
                            [Blockly.Msg.UNOCORE_PS2_SELECT, '1'],
                            [Blockly.Msg.UNOCORE_PS2_START, '8']
                        ]
                    }
                ],
                colour: color,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.unoCore_ps2GetJoystick = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.UNOCORE_PS2GETJOYSTICK,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'joystick',
                        options: [
                            ['LX', '7'],
                            ['LY', '8'],
                            ['RX', '5'],
                            ['RY', '6']
                        ]
                    }
                ],
                colour: color,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.unoCore_rgbUltrasonicInit = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.UNOCORE_RGBULTRASONICINIT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'ultraPin',
                        options: [
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4'],
                            ['5', '5'],
                            ['6', '6'],
                            ['7', '7'],
                            ['A2', 'A2'],
                            ['A3', 'A3']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'rgbPin',
                        options: [
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4'],
                            ['5', '5'],
                            ['6', '6'],
                            ['7', '7'],
                            ['A2', 'A2'],
                            ['A3', 'A3']
                        ]
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.unoCore_rgbUltrasonicSetColorStyle = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.UNOCORE_RGBULTRASONICSETCOLORSTYLE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'no',
                        options: [
                            [Blockly.Msg.UNOCORE_ALL, 'E_RGB_ALL'],
                            [Blockly.Msg.UNOCORE_LEFT, 'E_RGB_LEFT'],
                            [Blockly.Msg.UNOCORE_RIGHT, 'E_RGB_RIGHT']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'colour'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'style',
                        options: [
                            [Blockly.Msg.UNOCORE_NONE, 'E_EFFECT_NONE'],
                            [Blockly.Msg.UNOCORE_BREATHING, 'E_EFFECT_BREATHING'],
                            [Blockly.Msg.UNOCORE_ROTATE, 'E_EFFECT_ROTATE'],
                            [Blockly.Msg.UNOCORE_FLASH, 'E_EFFECT_FLASH']
                        ]
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.unoCore_rgbUltrasonicReadDistance = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.UNOCORE_RGBULTRASONICREADDISTANCE,
                colour: color,
                extensions: ['output_number']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
