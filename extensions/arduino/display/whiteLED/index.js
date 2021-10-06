/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
const whiteLED = formatMessage => ({
    name: 'White LED',
    extensionId: 'whiteLED',
    version: '1.0.0',
    supportDevice: ['unoCore'],
    author: 'MakerStudio',
    iconURL: `asset/whiteLED.png`,
    description: formatMessage({
        id: 'whiteLED.description',
        default: 'White led module.',
        description: 'Description of white LED'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    tags: ['display'],
    helpLink: ' '
});

module.exports = whiteLED;
