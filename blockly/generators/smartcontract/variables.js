/**
 * Created by Dinesh Liyanage on 9/11/2016.
 */


goog.provide('Blockly.smartcontract.variables');
goog.require('Blockly.smartcontract');

/**
 * Code generation stub for variable block
 * @param block
 * @returns {string}
 */
Blockly.smartcontract['variable'] = function(block) {
    var dropdown_variabletype = block.getFieldValue('variableType');
    var text_varname = block.getFieldValue('varName');
    var init_val = block.getFieldValue('initValue');
    if (init_val == 'None')
    {
        var code = '\t' + dropdown_variabletype + ' ' +text_varname +';\n';

    }
    else{
        var code = '\t' + dropdown_variabletype + ' ' +text_varname  +' = '+init_val +';\n';

    }
    return code;
};


/**
 * Code generation stub for parameter block
 * @param block
 * @returns {string}
 */
Blockly.smartcontract['parameter'] = function(block) {
  var text_parameter_name = block.getFieldValue('parameter-name');
  var dropdown_name = block.getFieldValue('NAME');
  var code = dropdown_name + ' ' + text_parameter_name + '$$'; //adding $$ to use it as a delimiter
  return code;
};
/**
 * Code generation stub for object variable block
 * @param block
 * @returns {string}
 */

Blockly.smartcontract['class-instance-variable'] = function(block) {
  var text_class_name = block.getFieldValue('class_name');
  var text_var_name = block.getFieldValue('variable_name');
  var code = text_class_name+' '+text_var_name+';\n';
  return code;
};
/**
 * Code generation stub for pointer variable block
 * @param block
 * @returns {string}
 */

Blockly.smartcontract['object-pointer'] = function(block) {
  var text_pointer_name = block.getFieldValue('pointer_name');
  var class_name = block.getFieldValue('class_name');
  var code = class_name+' '+'*'+text_pointer_name+';\n';
  return code;
};