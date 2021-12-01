/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        CONDUCTORDETECTION_CATEGORY: 'conductor detection module',
        CONDUCTORDETECTION_READ_STATE: 'conductor was detected in interface %1？',
        CONDUCTORDETECTION_READ_VALUE: 'The state value of conductor detection module in interface %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        CONDUCTORDETECTION_CATEGORY: '导体检测模块',
        CONDUCTORDETECTION_READ_STATE: '接口%1检测到导体？',
        CONDUCTORDETECTION_READ_VALUE: '接口%1导体检测模块的状态值'
    });
    return Blockly;
}

exports = addMsg;
