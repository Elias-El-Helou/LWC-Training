import { LightningElement,wire,track } from 'lwc';
import getAccountList from "@salesforce/apex/DatatableController.getAccountList";
const COLS = [
  {
    label: "Account Name",
    type: "customName",
    typeAttributes: {
      accountName: { fieldName: "Name" },
    },
  }
];


export default class AccountsDatatable extends LightningElement {

    @track accounts= [];
    @wire(getAccountList)
    wiredAccounts({ error, data }) {
        console.log('Inside Wire');
        console.log('error: ',error);
        console.log('data: '.data);
        if (error) {
        // Handle error
            console.log('error: ',error);
        } else if (data) {
        // Process record data
        console.log('data retrieved: ', data);
        // this.accounts = data.map((record) => {
        //     let industryColor = record.Industry === "Energy" ? "slds-text-color_success" : "";
        //     let status = record.NumberOfEmployees > 10000 ? "utility:ribbon" : "";
        //     return { ...record, industryColor: industryColor, status: status };
        // });
        this.accounts=data;
        console.log('accounts:', JSON.stringify(this.accounts));        }
    }
}