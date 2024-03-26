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

Blockly.Blocks['data_select_artlist'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("dataArtswithType"), "select_artlist_var")
      .appendField(" = ")
      .appendField(new Blockly.FieldVariable("data"), "data_select_var")
      .appendField(".")
      .appendField("getDataArtswithType")
      .appendField("(")
      .appendField(new Blockly.FieldDropdown([["Mind","'Mind'"], ["Jorin","'Jorin'"], ["Taaom","'Taaom'"], ["Hannah","'Hannah'"], ["Fai","'Fai'"], ["Punch","'Punch'"], ["Aheye","'Aheye'"]]), "members")
      .appendField(", ")
      .appendField(" [ ");
    this.appendValueInput("parameters")
      .setCheck(null);
    this.appendDummyInput()
      .appendField(" ] ")
      .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(foureveColor);
  }
}; 

Blockly.Blocks['chart_title'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("name"), "chart_var")
      .appendField(".title = (")
      .appendField(new Blockly.FieldDropdown([["4EVE ไปแสดงที่ไหนมาแล้วบ้างจากทั่วโลก?","4EVE ไปแสดงที่ไหนมาแล้วบ้างจากทั่วโลก? (งาน)"], ["4EVE ไปแสดงที่ไหนในไทยมาแล้วบ้าง?","4EVE ไปแสดงที่ไหนในไทยมาแล้วบ้าง? (งาน)"], ["4EVE ไปท่องโลกในแพลตฟอร์มไหนมาบ้าง?","4EVE ไปท่องโลกในแพลตฟอร์มไหนมาบ้าง? (งาน)"], ["สถิติประเภทงานต่าง ๆ ของ 4EVE","สถิติประเภทงานต่าง ๆ ของ 4EVE (งาน)"], ["สถิติประเภทการออกงานทั้งหมดของ 4EVE","สถิติประเภทการออกงานทั้งหมดของ 4EVE (งาน)"], ["สถิติงานทั้งหมดของ 4EVE ตั้งแต่ปี 2020 จนถึง 2024","สถิติงานทั้งหมดของ 4EVE ตั้งแต่ปี 2020 จนถึง 2024 (งาน)"], ["สถิติของเมมเบอร์ 4EVE ในแต่ละประเภทงาน","สถิติของเมมเบอร์ 4EVE ในแต่ละประเภทงาน"]]), "chart_title_sel")
      .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(foureveColor);
  }
};

Blockly.Blocks['chart_select_1'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("name"), "chart_var")
      .appendField(".add(")
      .appendField(new Blockly.FieldVariable("i"), "loop_i_var")
      .appendField(".")
      .appendField(new Blockly.FieldDropdown([["province_name_thai","province_name_thai"], ["visit_count","visit_count"], ["country_thai_name","country_thai_name"], ["country_count","country_count"], ["social_network_name","social_network_name"], ["social_count","social_count"], ["sch_category_name","sch_category_name"], ["sch_count","sch_count"], ["label","label"], ["data_count","data_count"], ["sch_type_count", "sch_type_count"]]), "parameters_select")
      .appendField(",")
      .appendField(new Blockly.FieldVariable("i"), "loop_i_var")
      .appendField(".")
      .appendField(new Blockly.FieldDropdown([["province_name_thai","province_name_thai"], ["visit_count","visit_count"], ["country_thai_name","country_thai_name"], ["country_count","country_count"], ["social_network_name","social_network_name"], ["social_count","social_count"], ["sch_category_name","sch_category_name"], ["sch_count","sch_count"], ["label","label"], ["data_count","data_count"], ["sch_type_count", "sch_type_count"], ["total_records_array", "total_records_array"]]), "parameters_select")
      .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(foureveColor);
  }
};

Blockly.Blocks['total_records'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("total_records_array"), "total_records_var")
        .appendField(' = [int(x) for x in ')
        .appendField(new Blockly.FieldVariable("i"), "loop_i_var")
        .appendField('.total_records.split(",")]');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(foureveColor);
  }
};