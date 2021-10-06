/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        WHITELED_CATEGORY: 'white LED',
        WHITELED_SET_LED_STATE: 'set pin %1 LED %2',
        WHITELED_ON: 'on',
        WHITE_OFF: 'off'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        WHITELED_CATEGORY: '白色LED',
        WHITELED_SET_LED_STATE: '设置引脚 %1 LED 为 %2',
        WHITELED_ON: '开',
        WHITELED_OFF: '关'
    });
    return Blockly;
}

exports = addMsg;
