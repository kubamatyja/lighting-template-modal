({
    toggleDialog: function (component, event, helper) {
        helper.showHideModal(component);
    },

    getRecord: function (component) {
        var tempRec = component.find("recordHandler");
        tempRec.set("v.recordId", component.get("v.remoteRecordId"));
        tempRec.reloadRecord();
    },

    execute: function (component, event, helper) {
        //TODO: Need implementation
    }
})