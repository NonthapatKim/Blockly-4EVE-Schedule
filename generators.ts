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
    var select_var = block.getFieldValue('select_var');
    var data_select_var = Blockly.Python.nameDB_.getName(block.getFieldValue('data_select_var'), Blockly.VARIABLE_CATEGORY_NAME);
    var func_select_var = block.getFieldValue('func_select_var');
    var code = `${select_var} = ${data_select_var}.${func_select_var}`;
    return code;
}; 

Blockly.Python['data_select_artlist'] = function(block) {
    var select_artlist_var = Blockly.Python.nameDB_.getName(block.getFieldValue('select_artlist_var'), Blockly.VARIABLE_CATEGORY_NAME);
    var data_select_var = Blockly.Python.nameDB_.getName(block.getFieldValue('data_select_var'), Blockly.VARIABLE_CATEGORY_NAME);
    var members = block.getFieldValue('members');
    const type_parameters = Blockly.Python.valueToCode(block, 'parameters', 0);

    var code = `${select_artlist_var} = ${data_select_var}.getDataArtswithType(${members}, [${type_parameters}])`;
    return code;
}; 

Blockly.Python['chart_select_1'] = function(block) {
    var chart_var = Blockly.Python.nameDB_.getName(block.getFieldValue('chart_var'), Blockly.VARIABLE_CATEGORY_NAME);
    var loop_i_var = Blockly.Python.nameDB_.getName(block.getFieldValue('loop_i_var'), Blockly.VARIABLE_CATEGORY_NAME);
    var parameters_select = block.getFieldValue('parameters_select');

    var code = `${chart_var} = .add(${loop_i_var}.${parameters_select}, ${loop_i_var}.${parameters_select})`;
    return code;
}; 

Blockly.Python['total_records'] = function(block) {
    var total_records_var = Blockly.Python.nameDB_.getName(block.getFieldValue('total_records_var'), Blockly.VARIABLE_CATEGORY_NAME);
    var loop_i_var = Blockly.Python.nameDB_.getName(block.getFieldValue('loop_i_var'), Blockly.VARIABLE_CATEGORY_NAME);
    var code = `${total_records_var} = [int(x) for x in ${loop_i_var}.total_records.split(",")]`;
    return code;
}; 

Blockly.Python['chart_title_block'] = function(block) {
    var chart_var = Blockly.Python.nameDB_.getName(block.getFieldValue('chart_var'), Blockly.VARIABLE_CATEGORY_NAME);
    var chart_title_sel = block.getFieldValue('chart_title_sel');

    var code = `${chart_var}.title = ${chart_title_sel}`;
    return code;
}; 