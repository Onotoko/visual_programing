/**
 * Created by Oanh Nguyen on 01/20/2019
 **/


/*
 * Generator code for table in smart contract
 */

Blockly.smartcontract['table'] = function(block) {
    Blockly.smartcontract.validator.init(block.workspace);
    var text_table_name = block.getFieldValue('table_name');
    var text_db_name = block.getFieldValue('db_name');

    var statements_table_body = Blockly.smartcontract.statementToCode(block, 'table_body');

    var code = '\nTABLE '+ text_table_name + '{\n'+ statements_table_body +'};\n';
    code += 'typedef eosio::multi_index<"' + text_table_name +'"_n,' + text_table_name + '>' +
        text_db_name +';\n';

    var res = code.replace('$$TABLE_NAME$$', text_table_name);

    Blockly.smartcontract.validator.refresh();
    return res;
};
