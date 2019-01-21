/**
 * Created by Dinesh Liyanage on 9/11/2016.
 */


goog.provide('Blockly.smartcontract.variables');
goog.require('Blockly.smartcontract');

var tooltip_variable = 'Variable';
var tooltip_param = 'Parameter that has been passed';



/**
 * Variable block definition
 * @type {{init: Blockly.Blocks.variable.init}}
 */
Blockly.Blocks['variable'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["uint64_t","uint64_t"],["name","name"],["int", "int"],["string","string"]]), "variableType")
            .appendField(new Blockly.FieldTextInput("x"), "varName")
            .appendField("set to")
            .appendField(new Blockly.FieldTextInput("None"), "initValue");
        this.setInputsInline(true);
        this.setPreviousStatement(true, ['action','parameter','variable']);
        this.setNextStatement(true, ['action','parameter','variable']);
        this.setColour(290);
        this.setTooltip(tooltip_variable);
        this.setHelpUrl('https://github.com/dineshLL/smartcontract/wiki');
    }
};

/**
 * Parameter block definition
 * @type {{init: Blockly.Blocks.parameter.init}}
 */
Blockly.Blocks['parameter'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["name","name"],["uint64_t","uint64_t"],["int", "int"], ["char", "char"], ["char[]", "char[]"], ["string", "string"]]), "NAME")
        .appendField(new Blockly.FieldTextInput("user"), "parameter-name");
    this.setPreviousStatement(true, "parameter");
    this.setNextStatement(true, "parameter");
    this.setColour(230);
    this.setTooltip(tooltip_param);
  }
};

Blockly.Blocks['boolean_input'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput("default"), "NAME");
        this.setOutput(true, "Number");
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('https://github.com/dineshLL/smartcontract/wiki');
    }
};

Blockly.Blocks['boolean_input'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput("default"), "NAME");
        this.setOutput(true, "Number");
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

/**
 * Object variable block definition
 * @type {{init: Blockly.Blocks.objectVariable.init}}
 */


Blockly.Blocks['class-instance-variable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("instance of")
        .appendField(new Blockly.FieldDropdown([["", ""]]), "class_name")
        .appendField("as")
        .appendField(new Blockly.FieldTextInput("variable"), "variable_name");
    this.setPreviousStatement(true, ['class-instance-variable','object-pointer','variable']);
    this.setNextStatement(true, ['class-instance-variable','object-pointer','variable']);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('https://github.com/dineshLL/smartcontract/wiki');
  }
};

/**
 * Pointer  block definition
 * @type {{init: Blockly.Blocks.objectVariable.init}}
 */

Blockly.Blocks['object-pointer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("myVariable"), "pointer_name")
        .appendField("pointer of object")
        .appendField(new Blockly.FieldTextInput("className"), "class_name");
    this.setPreviousStatement(true, ['object-pointer','class-instance-variable','variable']);
    this.setNextStatement(true, ['object-pointer','class-instance-variable','variable']);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('https://github.com/dineshLL/smartcontract/wiki');
  }
};