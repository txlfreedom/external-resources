const magneticSensor = formatMessage => ({
    name: formatMessage({
        id: 'magneticSensor.name',
        default: 'magneticSensor detection module'
    }),
    extensionId: 'magneticSensor',
    version: '1.0.0',
    supportDevice: ['unoCore'],
    author: 'MakerStudio',
    iconURL: `asset/magneticSensor.png`,
    description: formatMessage({
        id: 'magneticSensor.description',
        default: 'magneticSensor sensor switch.'
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

module.exports = magneticSensor;
