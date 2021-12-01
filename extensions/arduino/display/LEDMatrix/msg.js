/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        LEDMATRIX_CATEGORY: 'LED matrix',
        LEDMATRIX_INIT: 'init LED matrix %1 CLK %2 DIO %3',
        LEDMATRIX_DISPLAYMODE: 'set LED matrix %1 X:%2 Y:%3 show string:%4',
        LEDMATRIX_SETBRIGHTNESS: 'set LED matrix %1 brightness: %2',
        LEDMATRIX_DRAWSTR: 'set LED matrix %1 brightness: %2',
        LEDMATRIX_ON: 'open',
        LEDMATRIX_OFF: 'close',
        LEDMATRIX1: '1',
        LEDMATRIX2: '2',
        LEDMATRIX3: '3',
        LEDMATRIX4: '4',
        NORMAL: 'normal',
        OPPOSITE: 'opposite',
        BRIGHTNESS1: '1',
        BRIGHTNESS2: '2',
        BRIGHTNESS3: '3',
        BRIGHTNESS4: '4',
        BRIGHTNESS5: '5',
        BRIGHTNESS6: '6',
        BRIGHTNESS7: '7',
        BRIGHTNESS8: '8'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        LEDMATRIX_CATEGORY: 'LED点阵',
        LEDMATRIX_INIT: '初始化LED点阵 %1 CLK %2 DIO %3',
        LEDMATRIX_DISPLAYMODE: '设置LED点阵模块 %1 显示模式: %2',
        LEDMATRIX_SETBRIGHTNESS: '设置LED点阵模块 %1 亮度: %2',
        LEDMATRIX_DRAWSTR: '设置LED点阵模块 %1 X:%2 Y:%3 显示字符:%4',
        LEDMATRIX_ON: '打开',
        LEDMATRIX_OFF: '关闭',
        LEDMATRIX1: '1',
        LEDMATRIX2: '2',
        LEDMATRIX3: '3',
        LEDMATRIX4: '4',
        NORMAL: '正常',
        OPPOSITE: '反向',
        BRIGHTNESS1: '1',
        BRIGHTNESS2: '2',
        BRIGHTNESS3: '3',
        BRIGHTNESS4: '4',
        BRIGHTNESS5: '5',
        BRIGHTNESS6: '6',
        BRIGHTNESS7: '7',
        BRIGHTNESS8: '8'

    });
    return Blockly;
}

exports = addMsg;
