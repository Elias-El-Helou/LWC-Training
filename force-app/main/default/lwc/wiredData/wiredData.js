import { LightningElement, wire, api } from 'lwc';
import getAccounts from '@salesforce/apex/WiredController.getAccounts'; 
export default class WiredData extends LightningElement {
    tenAccounts;
    error;
    x=0;
    @api recordId;
    @wire(getAccounts, {accountId:"$recordId",x:"$x"}) 
    wiredAccounts({errors, data}){
        if(data){
            this.tenAccounts = data;
            console.log('wire launched')
        }
        else{
            this.error = errors;
            console.log('error: ',this.error);
        }
    }
    increment(){
        this.x++;
        console.log('x -> ',x);
    }

}