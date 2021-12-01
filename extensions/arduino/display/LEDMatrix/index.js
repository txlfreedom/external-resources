/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
const LEDMatrix = formatMessage => ({
    name: formatMessage({
        id: 'LEDMatrix.name',
        default: '8X16-LED matrix module'
    }),
    extensionId: 'LEDMatrix',
    version: '1.0.0',
    supportDevice: ['unoCore'],
    author: 'MakerStudio',
    iconURL: `asset/LEDMatrix.png`,
    description: formatMessage({
        id: 'LEDMatrix.description',
        default: 'Blue led module.',
        description: 'Based on the TM1640 LED drive chip, each LED has an independent register, can drive each LED lamp respectively, form an 8x16 pixel dot array, can control the lighting of each pixel LED, display characters, dynamic rolling screen, drawing points, drawing lines, expressions, etc.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['display'],
    helpLink: 'www.ddmagic.com'
});

module.exports = LEDMatrix;
