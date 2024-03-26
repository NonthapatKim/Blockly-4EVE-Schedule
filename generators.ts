Blockly.Python["import_sch"] = function() {
    const code = `from schedules import *\n`;
    return code;
};

Blockly.Python['data_init'] = function(block) {
    var data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), Blockly.VARIABLE_CATEGORY_NAME);
    var code = `${data} = getData()\n`;
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

Blockly.Python['func_select'] = function(block) {
    var func_select_var = block.getFieldValue('select_var');
    var data_select_var = Blockly.Python.nameDB_.getName(block.getFieldValue('data_select_var'), Blockly.VARIABLE_CATEGORY_NAME);
    var func_select_var = block.getFieldValue('func_select_var');
    var code = `${func_select_var} = ${data_select_var}.(${func_select_var})`;
    return code;
}; 