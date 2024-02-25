Blockly.Python['members'] = function(block) {
    const members = Blockly.Python.nameDB_.getName(block.getFieldValue("members"), Blockly.VARIABLE_CATEGORY_NAME);
    const parameters = Blockly.Python.valueToCode(block, 'parameters', 0);
    const code = `${members} = [${parameters}]\n`;
    return code;
};