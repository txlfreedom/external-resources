/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        GREENBUTTON_CATEGORY: 'GREEN button',
        GREENBUTTON_READ_STATE: 'interface %1 green button was be pushed？',
        GREENBUTTON_READ_VALUE: 'The state value of green button in interface %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        GREENBUTTON_CATEGORY: '绿色按键开关',
        GREENBUTTON_READ_STATE: '接口%1绿色按钮被按下？',
        GREENBUTTON_READ_VALUE: '接口%1绿色按钮的状态值'
    });
    return Blockly;
}

exports = addMsg;
