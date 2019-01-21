/**
 * Created by Dinesh Liyanage on 10/28/2016.
 */
goog.provide('Blockly.smartcontract.validator');

var workspace;
var colors = ['red', 'green', 'yellow'];

Blockly.smartcontract.validator.init = function(pWorkspace) {
    if(!workspace) {
        workspace = pWorkspace;
    }
}

Blockly.smartcontract.validator.refresh = function () {
    var classes = workspace.getAllBlocks().filter(function (block) {
        return block.type == 'contract';
    });

    // var classDropDowns = workspace.getAllBlocks().filter(function (block) {
    //     return block.type == 'class-instance-variable';
    // })
    var classNameList = [];
    for(var i in classes) {
        classNameList.push(classes[i].getFieldValue('class_name'));
    }

    // if(classDropDowns) {
    //     for(var z in classDropDowns) {
    //         classDropDowns[z].inputList[0].fieldRow[1].menuGenerator_ = [];
    //     }
    //     for(var i in classNameList) {
    //         for(var x in classDropDowns) {
    //             classDropDowns[x].inputList[0].fieldRow[1].menuGenerator_.push([classNameList[i], classNameList[i]]);
    //         }
    //     }
    //
    // }
};