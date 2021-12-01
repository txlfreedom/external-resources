/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        REDBUTTON_CATEGORY: 'RED button',
        REDBUTTON_READ_STATE: 'interface %1 red button was be pushed？',
        REDBUTTON_READ_VALUE: 'The state value of red button in interface %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        REDBUTTON_CATEGORY: '红色按键开关',
        REDBUTTON_READ_STATE: '接口%1红色按钮被按下？',
        REDBUTTON_READ_VALUE: '接口%1红色按钮的状态值'
    });
    return Blockly;
}

exports = addMsg;
