/**
 * Created by Oanh Nguyen 01/20/2019
 **/


'use strict';

goog.provide('Blockly.smartcontract.text');

goog.require('Blockly.smartcontract');


Blockly.smartcontract['print_text'] = function(block) {
  // Text value.
    var text_varname = block.getFieldValue('TEXT');
    var print_val = block.getFieldValue('value');
    var code = '\tprint("' +text_varname +'"';
    if (print_val == 'None')
    {
        code += ');\n';

    }
    else{
        code += ', ' + print_val +');\n';

    }
    return code;
};

