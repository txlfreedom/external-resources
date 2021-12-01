const tilt = formatMessage => ({
    name: formatMessage({
        id: 'tilt.name',
        default: 'tilt detection module'
    }),
    extensionId: 'tilt',
    version: '1.0.0',
    supportDevice: ['unoCore'],
    author: 'MakerStudio',
    iconURL: `asset/tilt.png`,
    description: formatMessage({
        id: 'tilt.description',
        default: 'tilt sensor switch.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['sensor'],
    helpLink: 'www.ddmagic.com'
});

module.exports = tilt;
