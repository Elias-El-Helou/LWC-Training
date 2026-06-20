import { LightningElement,wire } from 'lwc';
import getMethod from '@salesforce/apex/DemoController.getMethod';
export default class DemoLWC extends LightningElement {
    maxRecords = 10;
    accounts;
    errors;
    @wire(getMethod, {maxRecords:"$maxRecords"}) wiredAccounts({errors,data}){
        if(data){
            this.accounts=data;
        }
        if(errors){
            this.errors=errors;
        }
    }
    handleChange(event){
        this.maxRecords=parseInt(event.target.value);
    }
}