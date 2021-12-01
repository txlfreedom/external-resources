/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_LEDMATRIX_CATEGORY}" id="LEDMATRIX_CATEGORY" colour="#FF00FF" secondaryColour="#FF00FF">
    <block type="LEDMatrix_Init" id="LEDMatrix_Init">
        <field name="num">1</field>
        <field name="CLK">2</field>
        <field name="DIO">4</field>
    </block>
    <block type="LEDMatrix_DisplayMode" id="LEDMatrix_DisplayMode">
        <field name="num">1</field>
        <field name="index">1</field>
    </block>
    <block type="LEDMatrix_setBrightness" id="LEDMatrix_setBrightness">
        <field name="num">1</field>
        <field name="brightness">6</field>
    </block>
    <block type="LEDMatrix_drawStr" id="LEDMatrix_drawStr">
        <field name="num">1</field>
        <value name="X">
            <shadow type="math_whole_number">
                <field name="X">0</field>
            </shadow>
        </value>
        <value name="Y">
            <shadow type="eitghtTimesEightMatirxDisplay_brightnessNumber">
                <field name="Y">7</field>
            </shadow>
        </value>
        <value name="TEXT">
            <shadow type="text">
                <field name="TEXT">Hi</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = addToolbox;
