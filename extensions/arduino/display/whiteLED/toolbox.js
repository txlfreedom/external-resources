/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_WHITELED_CATEGORY}" id="WHITELED_CATEGORY" colour="#FF0000" secondaryColour="#FF0000">
    <block type="whiteLED_setLEDState" id="whiteLED_setLEDState">
        <value name="pin">
            <shadow type="math_number">
                <field name="NUM">2</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = addToolbox;
