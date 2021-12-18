/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_SSD1315_CATEGORY}" id="SSD1315_CATEGORY" colour="#BE77FF" secondaryColour="#A9A9A9">
    <block type="ssd1315_init" id="ssd1315_init">
        <value name="ADDR">
            <shadow type="text">
                <field name="TEXT">0x3c</field>
            </shadow>
        </value>
    </block>

    <block type="ssd1315_printline" id="ssd1315_printline">
        <field name="LINE">1</field>
        <value name="TEXT">
            <shadow type="text">
                <field name="TEXT">hello</field>
            </shadow>
        </value>
    </block>

    <block type="ssd1315_print" id="ssd1315_print">
        <value name="X">
            <shadow type="ssd1315_x">
                <field name="NUM">42</field>
            </shadow>
        </value>
        <field name="Y">1</field>
        <value name="TEXT">
            <shadow type="text">
                <field name="TEXT">hello</field>
            </shadow>
        </value>
    </block>

    <block type="ssd1315_clear" id="ssd1315_clear">
    </block>

    <block type="ssd1315_setRotaion" id="ssd1315_setRotaion">
        <field name="ANGLE">180</field>
    </block>
</category>`;
}

exports = addToolbox;
