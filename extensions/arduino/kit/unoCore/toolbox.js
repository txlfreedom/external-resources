/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_UNOCORE_CATEGORY}" id="UNOCORE_CATEGORY" colour="#00D7B0" secondaryColour="#00D7B0">
    <block type="unoCore_init" id="unoCore_init">
    </block>
    <block type="unoCore_setMotorSpeed" id="unoCore_setMotorSpeed">
        <value name="speed">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="unoCore_stopMotor" id="unoCore_stopMotor">
    </block>
    <block type="unoCore_setServoDegree" id="unoCore_setServoDegree">
        <value name="degree">
            <shadow type="math_angle">
                <field name="NUM">90</field>
            </shadow>
        </value>
    </block>
    <block type="unoCore_setRgbLedColor" id="unoCore_setRgbLedColor">
        <value name="colour">
            <shadow type="colour_picker"/>
        </value>
    </block>
    <block type="unoCore_setBuzzer" id="unoCore_setBuzzer">
    </block>
    <sep gap="36"/>
    <block type="unoCore_ps2ReadData" id="unoCore_ps2ReadData">
    </block>
    <block type="unoCore_ps2GetButton" id="unoCore_ps2GetButton">
    </block>
    <block type="unoCore_ps2GetJoystick" id="unoCore_ps2GetJoystick">
    </block>
    <sep gap="36"/>
    <block type="unoCore_rgbUltrasonicInit" id="unoCore_rgbUltrasonicInit">
        <field name="ultraPin">A2</field>
        <field name="rgbPin">A3</field>
    </block>
    <block type="unoCore_rgbUltrasonicSetColorStyle" id="unoCore_rgbUltrasonicSetColorStyle">
        <value name="colour">
            <shadow type="colour_picker"/>
        </value>
    </block>
    <block type="unoCore_rgbUltrasonicReadDistance" id="unoCore_rgbUltrasonicReadDistance">
    </block>
</category>
`;
}

exports = addToolbox;
