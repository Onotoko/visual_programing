/**
 * Created by Dinesh Liyanage on 9/10/2016.
 * @Description : This file contains the block definitions for the blocks used in Lisa.
 *                If you need to define a new block, create it with Block Factory.
 * @modified : 09/14/2016
 */

/**
 * Modified by Oanh Nguyen on 01/19/2019
 */
goog.require('Blockly.Blocks');

var tooltip_class_container = 'Contract for a smart contract which can hold action, table, variable';
var tooltip_variable_container = 'Container which can hold only variable blocks';
var tooltip_method_container = 'Container which can hold only action blocks';
var tooltip_table_container = 'Container which can hold only variable blocks';

/**
 * This is the definition for the class container block
 */
Blockly.Blocks['contract'] = {
    init: function() {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField('CONTRACT')
            .appendField(new Blockly.FieldTextInput('Hello'), 'class_name');
        this.appendStatementInput('class_body')
            .setCheck(['table', 'action', 'contract','access'])
            .setAlign(Blockly.ALIGN_CENTRE);
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE);
        this.setInputsInline(true);
        this.setColour(240);
    }
};
/**
 * This is the definition for the action container block
 */
Blockly.Blocks['action'] = {
    init: function () {
        this.appendStatementInput('inputs')
            .setCheck(['action', 'constructor'])
            .setAlign(Blockly.ALIGN_CENTRE);
        this.setPreviousStatement(true, ['action', 'variable-container',]);
        this.setNextStatement(true, ['action', 'constructor', 'variable-container']);
        this.setColour(65);
        this.setTooltip(tooltip_method_container);
    }
};


/**
 * This is the definition for the tables container block
 */
Blockly.Blocks['table'] = {
    init: function() {
        this.appendStatementInput('tables')
            .setCheck(['variable'])
        this.setInputsInline(false);
        this.setPreviousStatement(true, ['variable']);
        this.setNextStatement(true, ['variable']);
        this.setColour(20);
        this.setTooltip(tooltip_variable_container);
    }
};


/**
 * This is the definition for the method container block
 */
Blockly.Blocks['access'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([['public', 'public'], ['protected', 'protected'], ['private', 'private']]), 'access-modifier');
        this.appendStatementInput('inputs')
            .setCheck(['action', 'table'])
            .setAlign(Blockly.ALIGN_CENTRE);
        this.setPreviousStatement(true, ['access','variable']);
        this.setNextStatement(true, ['action', 'variable']);
        this.setColour(65);
        this.setTooltip(tooltip_method_container);
    }
};





