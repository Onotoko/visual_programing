/**
 * Created by Oanh Nguyen on 01/19/2019.
 *
 * Reference from https://github.com/dineshLL/lisa
 */

/**
 * Code generation stub for method block
 * @method block
 * @returns {string}
 */
Blockly.smartcontract['action'] = function(block) {
    // var returnType = block.getFieldValue('RETURN_TYPE');
    var methodName = block.getFieldValue('METHOD_NAME');
    var branch = Blockly.smartcontract.statementToCode(block, 'NAME');
    var params = branch.split('$$');
    var statements_action_body = Blockly.smartcontract.statementToCode(block, 'action_body');

    if(params.length > 2) {
        for(var i = 0; i < params.length - 3; i++) {
            params[i] = params[i] + ', ';
        }
        branch = params.join();

    } else {
        branch = params.join();
    }
    // removing the starting indentation and last comma
    branch = branch.substring(2, branch.lastIndexOf(','));
    var code = '\n\nACTION';
    code += ' ' + methodName;
    code += '(' + branch +') \n{\n';
    code += statements_action_body;
    code += '}\n';
    return code;
};
