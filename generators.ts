Blockly.Python["import_sch"] = function() {
    const code = `from schedules import *\n`;
    return code;
};

Blockly.Python['members'] = function(block) {
    const parameters = Blockly.Python.valueToCode(block, 'parameters', 0);
    const code = `members = [${parameters}]\n`;
    return code;
};

Blockly.Python['member_select'] = function(block) {
    var members = block.getFieldValue('members');
    var code = `member = ${members}`;
    return [code, 0];
};  