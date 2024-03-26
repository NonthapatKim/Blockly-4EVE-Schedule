const foureveColor = "#A80E15";

Blockly.Blocks["import_sch"] = {
  init: function() {
      this.appendDummyInput()
          .appendField("from schedules import *");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(foureveColor);
  },
};


Blockly.Blocks['data_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("data"), "data")
        .appendField(" = getData()");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(foureveColor);
  }
};

Blockly.Blocks['members'] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("members"), "members_var")
        .appendField("=")
        .appendField(" [ ");
      this.appendValueInput("parameters")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(" ]");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(foureveColor);
    }
};

Blockly.Blocks['member_select'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("member"), "member_select_var")
        .appendField(" = ")
        .appendField(new Blockly.FieldDropdown([["Mind","'Mind'"], ["Jorin","'Jorin'"], ["Taaom","'Taaom'"], ["Hannah","'Hannah'"], ["Fai","'Fai'"], ["Punch","'Punch'"], ["Aheye","'Aheye'"]]), "members");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(foureveColor);
  }
}; 

Blockly.Blocks['func_select'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["dataVisit","dataVisit"], ["dataVisitInThai","dataVisitInThai"], ["dataSNSCount","dataSNSCount"], ["dataSchTypeCount","dataSchTypeCount"], ["dataAllSchTypeCount","dataAllSchTypeCount"], ["dataYears","dataYears"]]), "select_var")
        .appendField(" = ")
        .appendField(new Blockly.FieldVariable("data"), "data_select_var")
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([["getVisit()","getVisit()"], ["VisitInThai()","VisitInThai()"], ["getCountSNS()","getCountSNS()"], ["getCountSchType()","getCountSchType()"], ["getCountAllType()","getCountAllType()"], ["getschYearType()","getschYearType()"]]), "func_select_var");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(foureveColor);
  }
}; 