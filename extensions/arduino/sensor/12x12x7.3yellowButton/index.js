const yellowKey = formatMessage => ({
    name: formatMessage({
        id: 'yellowKey.name',
        default: 'yellowKey detection module'
    }),
    extensionId: 'yellowKey',
    version: '1.0.0',
    supportDevice: ['unoCore'],
    author: 'MakerStudio',
    iconURL: `asset/yellowKey.png`,
    description: formatMessage({
        id: 'yellowKey.description',
        default: 'yellowKey sensor switch.'
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

module.exports = yellowKey;
