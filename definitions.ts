const foureveColor = "#A80E15";

Blockly.Blocks['members'] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("members"), "members")
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