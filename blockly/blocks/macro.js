/**
 * Created by Oanh Nguyen 01/20/2019
 *
 * This file creates the block for eos macro as EOSIO_ABI, EOSLIB_SERIALIZE, EOSIO_DISPATCH
 **/


goog.provide('Blockly.smartcontract.eos_macro');
goog.require('Blockly.smartcontract');
goog.require('Blockly.Blocks');

/**
 * Method block definition
 * @type {{init: Blockly.Blocks.method.init}}
 */
Blockly.Blocks['eos_macro'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["EOSLIB_SERIAlIZE", "EOSLIB_SERIAlIZE"], ["EOSIO_ABI", "EOSIO_ABI"], ["EOSIO_DISPATCH", "EOSIO_DISPATCH"]]), "macroType")
            .appendField(new Blockly.FieldTextInput("parent"), "parentType")
        this.appendStatementInput('inputs')
            .setCheck(['eos_macro', 'action','eos_macro'])
            .setAlign(Blockly.ALIGN_CENTRE);
        this.setInputsInline(true);
        this.setColour(150);
    }
};


Blockly.Blocks['text_name'] = {
    init: function() {
        this.appendDummyInput()
            .appendField('set value:')
            .appendField(new Blockly.FieldTextInput("user"), "inputType");
        this.setPreviousStatement(true, ["text_name","eos_macro"]);
        this.setNextStatement(true, ["text_name",'eos_macro']);
        this.setColour(230);
        this.setTooltip(tooltip_param);
    }
};