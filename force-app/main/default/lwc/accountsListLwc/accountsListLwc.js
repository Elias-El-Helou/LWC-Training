import { LightningElement,wire } from 'lwc';
import getMethod from '@salesforce/apex/AccountController.getAccounts';

export default class AccountsListLwc extends LightningElement {

    @wire(getMethod) accounts;
}