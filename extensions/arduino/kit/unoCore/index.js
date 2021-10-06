const unoCore = formatMessage => ({
    name: 'UnoCoreo',
    extensionId: 'unoCore',
    version: '1.0.0',
    supportDevice: ['unoCore_arduinoUno'],
    author: 'Tianxl',
    hide: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    helpLink: ' '
});

module.exports = unoCore;
