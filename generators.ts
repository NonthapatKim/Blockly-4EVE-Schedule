Blockly.Python["import_sch"] = function() {
    const code = `from schedules import *\n`;
    return code;
};

Blockly.Python['members'] = function(block) {
    var members_var = Blockly.Python.nameDB_.getName(block.getFieldValue('members_var'), Blockly.VARIABLE_CATEGORY_NAME);
    const parameters = Blockly.Python.valueToCode(block, 'parameters', 0);
    const code = `${members_var} = [${parameters}]\n`;
    return code;
};

Blockly.Python['member_select'] = function(block) {
    var member_select_var = Blockly.Python.nameDB_.getName(block.getFieldValue('member_select_var'), Blockly.VARIABLE_CATEGORY_NAME);
    var members = block.getFieldValue('members');
    var code = `${member_select_var} = ${members}`;
    return code;
}; 