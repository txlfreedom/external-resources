/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_BLUELED_CATEGORY}" id="BLUELED_CATEGORY" colour="#7B68EE" secondaryColour="#7B68EE">
    <block type="blueLED_setLEDState" id="blueLED_setLEDState">
        <field name="pin">A0</field>
    </block>
</category>`;
}

exports = addToolbox;
