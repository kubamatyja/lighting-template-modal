# lighting-template-modal
Lighting component modal template

Template that creates modal for specific record. It can be used inside of another component. 

Example use: 

Componet:
```
<aura:component implements="flexipage:availableForRecordHome,force:hasRecordId">
        <aura:attribute name="showDialog" type="Boolean" default="false"/>
        <aura:attribute name="remoteRecordId" type="Id" />
        <button class="slds-button slds-button_neutral" onclick="{!c.editRecord}">Edit</button>
        <c:modalTemplate showDialog="{!v.showDialog}" remoteRecordId="{!v.remoteRecordId}"/>
</aura:component>
```
Component's controller:
```
({
    editRecord: function (component, event, helper) {
        component.set("v.remoteRecordId", component.get("v.recordId"))
        component.set("v.showDialog", "true");
    }
})
```

Example above displays one button that will show modal after click. It will reload a record that will be ready for further processing.
