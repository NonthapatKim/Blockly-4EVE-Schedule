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

Blockly.Blocks['members'] = {
    init: function() {
      this.appendDummyInput()
        .appendField("members ")
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
        .appendField("member ")
        .appendField(" = ")
        .appendField(new Blockly.FieldDropdown([["Mind","Mind"], ["Jorin","Jorin"], ["Taaom","Taaom"], ["Hannah","Hannah"], ["Fai","Fai"], ["Punch","Punch"], ["Aheye","Aheye"]]), "members");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(foureveColor);
  }
}; 