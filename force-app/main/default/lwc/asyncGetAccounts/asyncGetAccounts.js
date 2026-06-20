import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';

export default class AsyncGetAccounts extends LightningElement {

    accounts = [];
    error;
    connectedCallback() {
        this.fetchAccounts();
    }
    // Asynchronous method to fetch accounts
    async fetchAccounts() {
        try {
            this.accounts = await getAccounts();
            console.log('this.accounts: ',JSON.stringify(this.accounts));
        } catch (error) {
            this.error = error;
            console.error('Error fetching accounts:', error);
        }
    }

}