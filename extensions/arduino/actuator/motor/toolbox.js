/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_MOTOR_CATEGORY}" id="MOTOR_CATEGORY" colour="#6495ED" secondaryColour="#6495ED">
    <block type="motor_setMOTORState" id="motor_setMOTORState">
        <field name="pin">10</field>
        <field name="state">255</field>
    </block>
</category>`;
}

exports = addToolbox;
