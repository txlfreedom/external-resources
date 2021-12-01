/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        ANALOGULTRASONIC_CATEGORY: 'AnalogUltrasonic',
        ANALOGULTRASONIC_READ_DISTANCE: 'read interface %1 analog ultrasonic(cm)'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        ANALOGULTRASONIC_CATEGORY: '模拟超声波',
        ANALOGULTRASONIC_READ_DISTANCE: '读取接口%1模拟量超声波(cm)'
    });
    return Blockly;
}

exports = addMsg;
