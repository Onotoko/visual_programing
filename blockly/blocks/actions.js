/**
 * Created by JNiroshan on 9/19/2016.
 */

/**
 * Modified by Oanh Nguyen on 01/19/2019
 */


goog.provide('Blockly.smartcontract.actions');
goog.require('Blockly.smartcontract');
goog.require('Blockly.Blocks');

var tooltip_method = 'action';

/**
 * Method block definition
 * @type {{init: Blockly.Blocks.method.init}}
 */
Blockly.Blocks['action'] = {
    init: function() {
        this.appendStatementInput("NAME")
            .setCheck(["parameter"])
            .appendField('ACTION')
            .appendField('as name')
            .appendField(new Blockly.FieldTextInput("Test"), "METHOD_NAME");
        this.setPreviousStatement(true, ["action","variable","parameter"]);
        this.setNextStatement(true, ["action","variable","parameter"]);
        this.appendStatementInput('action_body')
            .setCheck(['variable'])
            .setAlign(Blockly.ALIGN_CENTRE);
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE);
        this.setInputsInline(true);
        this.setColour(120);
        this.setTooltip(tooltip_method);
    }
};