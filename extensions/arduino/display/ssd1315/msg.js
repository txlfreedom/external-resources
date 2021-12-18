/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        SSD1315_CATEGORY: 'OLED',
        SSD1315_INIT: 'OLED 128*64 display init address %1',
        SSD1315_PRINTLINE: 'OLED 128*64 display %2 in line %1',
        SSD1315_PRINT: 'OLED 128*64 display %3 at position X: %1 Y:16* %2',
        SSD1315_CLEAR: 'OLED 128*64 clear',
        SSD1315_SETROTAION: 'rotate screen to %1 degrees',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        SSD1315_CATEGORY: 'OLED',
        SSD1315_INIT: 'OLED 128*64初始化I2C地址 %1',
        SSD1315_PRINTLINE: 'OLED 128*64 第 %1 行 显示 %2',
        SSD1315_PRINT: 'OLED 128*64 在坐标X: %1 Y:16* %2 显示 %3',
        SSD1315_CLEAR: 'OLED 128*64 清屏',
        SSD1315_SETROTAION: '屏幕旋转到 %1 度',
    });
    return Blockly;
}

exports = addMsg;
