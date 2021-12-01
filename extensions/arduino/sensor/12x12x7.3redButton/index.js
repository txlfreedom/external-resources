const redButton = formatMessage => ({
    name: formatMessage({
        id: 'redButton.name',
        default: 'redButton detection module'
    }),
    extensionId: 'redButton',
    version: '1.0.0',
    supportDevice: ['unoCore'],
    author: 'MakerStudio',
    iconURL: `asset/redButton.png`,
    description: formatMessage({
        id: 'redButton.description',
        default: 'redButton sensor switch.'
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

module.exports = redButton;
