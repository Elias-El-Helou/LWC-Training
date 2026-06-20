import { LightningElement,wire } from 'lwc';
import { getRecord, getFieldValue } from "lightning/uiRecordApi";
import NAME_FIELD from "@salesforce/schema/Account.Name";
import OWNER_NAME_FIELD from "@salesforce/schema/Account.Owner.Name";
import PHONE_FIELD from "@salesforce/schema/Account.Phone";
import INDUSTRY_FIELD from "@salesforce/schema/Account.Industry";

export default class AccountCard extends LightningElement {
    recordId = "001WU00000hIZBWYA4";
    fields = [NAME_FIELD, INDUSTRY_FIELD];
    @wire(getRecord,{
      recordId:"$recordId",
      fields:"$fields",
      optionalFields: [PHONE_FIELD,OWNER_NAME_FIELD]
    }) account;
    
      get name() {
        console.log('Updated11:', JSON.stringify(this.account));
        //return getFieldValue(this.account.data,NAME_FIELD);
        return this.account.data.fields.Name.value 
      }
    
      // get phone() {
      //   return getFieldValue(this.account.data,PHONE_FIELD);
      // }
    
      // get industry() {
      //   return getFieldValue(this.account.data,INDUSTRY_FIELD);
      // }
    
      // get owner() {
      //   return getFieldValue(this.account.data,OWNER_NAME_FIELD);
      // }

}