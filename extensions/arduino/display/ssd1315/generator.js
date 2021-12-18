/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.ssd1315_init = function (block) {

        var addr = Blockly.Arduino.valueToCode(block, 'ADDR', Blockly.Arduino.ORDER_ATOMIC);
        // const addr = block.getFieldValue('ADDR');
        // var my_addr = parseInt("0x3c");
        // var my_addr = parseInt(addr);
        addr = addr.substr(1,addr.length-2);

        Blockly.Arduino.includes_.ssd1315_init = `#include <DFRobot_SSD1306_I2C.h>`;
        Blockly.Arduino.definitions_.ssd1315_init = `DFRobot_SSD1306_I2C oled12864;`;

        return `oled12864.begin(${addr});\n`;
    };
    Blockly.Arduino.ssd1315_printline = function (block) {

        var text = Blockly.Arduino.valueToCode(block, 'TEXT', Blockly.Arduino.ORDER_ATOMIC);
        if(text.length>22){
            text='"'+text.slice(1, 20)+'"'
        }
        const line = block.getFieldValue('LINE');

        Blockly.Arduino.includes_.ssd1315_init = `#include <DFRobot_SSD1306_I2C.h>`;
        Blockly.Arduino.definitions_.ssd1315_init = `DFRobot_SSD1306_I2C oled12864;`;

        return `oled12864.setCursorLine(${line});\noled12864.printLine(${text});\n`;
    };
    Blockly.Arduino.ssd1315_x = function (block) {
        const num = block.getFieldValue('NUM');

        return [`${num}`, Blockly.Arduino.ORDER_ATOMIC];
    };
    Blockly.Arduino.ssd1315_print  = function (block) {
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = block.getFieldValue('Y');

        var str = Blockly.Arduino.valueToCode(block, 'TEXT', Blockly.Arduino.ORDER_ATOMIC).slice(1, -1);
        if(str.length>20){
            str=str.slice(0, 20);
        }

        Blockly.Arduino.includes_.ssd1315_init = `#include <DFRobot_SSD1306_I2C.h>`;
        Blockly.Arduino.definitions_.ssd1315_init = `DFRobot_SSD1306_I2C oled12864;`;

        return `oled12864.setCursor(${x}, ${y});\noled12864.print("${str}");\n`;
    };
    Blockly.Arduino.ssd1315_clear = function (block) {

        Blockly.Arduino.includes_.ssd1315_init = `#include <DFRobot_SSD1306_I2C.h>`;
        Blockly.Arduino.definitions_.ssd1315_init = `DFRobot_SSD1306_I2C oled12864;`;

        return `oled12864.fillScreen(0);\n`;
    };
    Blockly.Arduino.ssd1315_setRotaion = function (block) {

        const angle = block.getFieldValue('ANGLE');

        Blockly.Arduino.includes_.ssd1315_init = `#include <DFRobot_SSD1306_I2C.h>`;
        Blockly.Arduino.definitions_.ssd1315_init = `DFRobot_SSD1306_I2C oled12864;`;

        return `oled12864.setRotaion(${angle});\n`;
    };

    return Blockly;
}

exports = addGenerator;
