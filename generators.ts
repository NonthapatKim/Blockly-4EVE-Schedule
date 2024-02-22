Blockly.Python['members'] = function(block) {
    const parameters = Blockly.Python.valueToCode(block, 'parameters', 0);
    const code = `members = [${parameters}]\n`;
    return code;
};