/**
 * Created by Oanh Nguyen 01/20/2019
 *
 **/


goog.provide('Blockly.smartcontract.tables');
goog.require('Blockly.smartcontract');
goog.require('Blockly.Blocks');

var tooltip_method = 'action';

/**
 * Method block definition
 * @type {{init: Blockly.Blocks.method.init}}
 */
Blockly.Blocks['table'] = {
    init: function() {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField('TABLE')
            .appendField(new Blockly.FieldTextInput('table-name'), 'table_name')
            .appendField('create db')
            .appendField(new Blockly.FieldTextInput('db-name'), 'db_name');
        this.appendStatementInput('table_body')
            .setCheck(['table', 'action', 'contract','variable'])
            .setAlign(Blockly.ALIGN_CENTRE);

        this.setInputsInline(true);
        this.setPreviousStatement(true, ['action','parameter','variable']);
        this.setNextStatement(true, ['action','parameter','variable']);
        this.setColour(160);
    }
};
