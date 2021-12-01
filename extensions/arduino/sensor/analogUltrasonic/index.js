const analogUltrasonic = formatMessage => ({
    name: formatMessage({
        id: 'analogUltrasonic.name',
        default: 'RCWL-9620-Simulated ultrasound'
    }),
    extensionId: 'analogUltrasonic',
    version: '1.0.0',
    supportDevice: ['unoCore'],
    author: 'MakerStudio',
    iconURL: `asset/analogUltrasonic.png`,
    description: formatMessage({
        id: 'analogUltrasonic.description',
        default: 'Standard analogUltrasonic distance measurement module.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['sensor'],
    helpLink: 'www.baidu.com'
});

module.exports = analogUltrasonic;
