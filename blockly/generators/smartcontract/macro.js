/**
 * Created by Oanh Nguyen on 01/20/2019
 **/

goog.provide('Blockly.smartcontract.eos_macro');
goog.require('Blockly.smartcontract');
goog.require('Blockly.smartcontract.validator');


/**
* Code generator stub for eos-macro
 * @param block
* @returns {string}
*/
Blockly.smartcontract['eos_macro'] = function(block) {
    Blockly.smartcontract.validator.init(block.workspace);
    var dropdown_modifier = block.getFieldValue('macroType');
    var parent = block.getFieldValue('parentType');
    var statements_inputs = Blockly.smartcontract.statementToCode(block, 'inputs');
    var code = '\n'+ dropdown_modifier +'(' + parent +', ' + statements_inputs + ')\n';
    return code;
};

Blockly.smartcontract['text_name'] = function(block) {
    var text_parameter_name = block.getFieldValue('inputType');
    var code =  '(' +text_parameter_name + ')';
    return code;
};