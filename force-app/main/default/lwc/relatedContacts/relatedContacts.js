import { LightningElement, wire, api } from 'lwc';
import getRelatedContacts from '@salesforce/apex/RelatedContactsController.getRelatedContacts';
const COLUMNS = [
    { label: 'Id', fieldName: 'Id', type: 'text' },
    { label: 'First Name', fieldName: 'FirstName', type: 'text' },
    { label: 'Last Name', fieldName: 'LastName', type: 'text' },
    { label: 'Email', fieldName: 'Email', type: 'email' },
    { label: 'Mobile', fieldName: 'MobilePhone', type: 'phone' }
];

export default class RelatedContacts extends LightningElement {
    @api recordId;
    columns = COLUMNS;
    contacts=[];
    numberOfContacts;
    rowLimit =5;
    rowOffSet=0;
    error;
    connectedCallback() {
        this.loadData();
    }
    loadData(){
    return getRelatedContacts({ accountId: this.recordId, limitSize: this.rowLimit,offset:this.rowOffSet})
        .then(result => {
            console.log('this.rowoffset wire: ',this.rowOffSet);
            console.log('result: ',result);
            let updatedContacts = [...this.contacts, ...result];
            
            this.contacts = updatedContacts;
            this.numberOfContacts = this.contacts.length;
            this.error = undefined
            console.log('updatedContacts: ',updatedContacts);
            console.log('numberOfContacts: ',this.numberOfContacts);
            console.log('contacts: ',this.contacts);

        })
        .catch(error=>{
            this.error = error;
            this.contacts = undefined;
        })
    }
    loadMoreData(event) {
        const { target } = event;
        target.isLoading = true;

        this.rowOffSet = this.rowOffSet + this.rowLimit;

        this.loadData()
            .then(()=> {
                target.isLoading = false;
            });   
    }
}