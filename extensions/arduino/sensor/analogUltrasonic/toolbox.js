/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_ANALOGULTRASONIC_CATEGORY}" id="ANALOGULTRASONIC_CATEGORY" colour="#D39DDB" secondaryColour="#BA55D3" iconURI="">
    <block type="analogUltrasonic_readDistance" id="analogUltrasonic_readDistance">
        <field name="pin">A0</field>
    </block>
</category>`;
}
exports = addToolbox;
