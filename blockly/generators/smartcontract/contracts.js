/**
 * Created by Oanh Nguyen on 01/19/2019
 *
 * Reference from https://github.com/dineshLL/lisa
 */


goog.provide('Blockly.smartcontract.contract');
goog.require('Blockly.smartcontract');
goog.require('Blockly.smartcontract.validator');


/**
 * Code generator stub for contract block
 * @param block
 * @returns {string}
 */
var text_class_name = '';
Blockly.smartcontract['contract'] = function(block) {
    Blockly.smartcontract.validator.init(block.workspace);
    text_class_name = block.getFieldValue('class_name');
    var statements_class_body = Blockly.smartcontract.statementToCode(block, 'class_body');

    var code = '#include <eosiolib/eosio.hpp> \n#include <eosiolib/print.hpp>\n\n using namespace eosio; \n\n using namespace std;\n\n' +
        ' CONTRACT '+ text_class_name +':public eosio::contract'+' {\n'+ statements_class_body +'};';

    var res = code.replace('$$CONSTRUCTOR_NAME$$', text_class_name);

    Blockly.smartcontract.validator.refresh();
    return res;
};



/**
 * Code generator stub for variable-container
 * @param block
 * @returns {string}
 */
Blockly.smartcontract['variable-container'] = function(block) {

    var dropdown_accessmodifire = block.getFieldValue('access-modifier');
    var statements_variables = Blockly.smartcontract.statementToCode(block, 'variables');
    var code = dropdown_accessmodifire +':\n' + statements_variables;
    return code;
};


/**
 * Code generator stub for access-container
 * @param block
 * @returns {string}
 */
Blockly.smartcontract['access'] = function(block) {

  var dropdown_access_modifier = block.getFieldValue('access-modifier');
  var statements_inputs = Blockly.smartcontract.statementToCode(block, 'inputs');

  var code = '\n'+ dropdown_access_modifier +':\n';

  if(dropdown_access_modifier == 'public')
  {
      code += '   using contract::contract; \n';
      code += '   '+ text_class_name +'(name receiver, name code, datastream\<const char\*>ds) : contract(receiver, code, ds) {}';
  }
  code += statements_inputs;

  return code;
};

