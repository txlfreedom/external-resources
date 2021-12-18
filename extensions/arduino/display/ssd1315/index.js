const ssd1315 = formatMessage => ({
    name: formatMessage({
        id: 'ssd1315.name',
        default: 'OLED display module'
    }),
    extensionId: 'ssd1315',
    version: '1.0.0',
    supportDevice: ['unoCore'],
    author: 'MakerStudio',
    iconURL: `asset/ssd1315.png`,
    description: formatMessage({
        id: 'ssd1315.description',
        default: 'I2C oled display based on SSD1315 drivers.'
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

module.exports = ssd1315;