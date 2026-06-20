import { LightningElement, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import {ShowToastEvent } from 'lightning/platformShowToastEvent';
import fetchAccounts from '@salesforce/apex/UsingApexController.fetchAccounts';
import createNewAccount from '@salesforce/apex/UsingApexController.createNewAccount';
import { gql, graphql } from "lightning/uiGraphQLApi";

export default class UsingApex extends NavigationMixin(LightningElement) {
    maxRecords=2;
    accounts;
    accountName;
    error;
    loading = false;

    @wire(graphql, {
    query: gql`
      query AccountInfo {
        uiapi {
          query {
            Account(where: { Name: { like: "Account1" } }) {
              edges {
                node {
                  Name {
                    value
                    displayValue
                  }
                }
              }
            }
          }
        }
      }
    }`,
  })
  graphqlQueryResult({ data, errors }) {
    if (data) {
      this.results = data.uiapi.query.Account.edges.map((edge) => edge.node);
    }
    this.errors = errors;
  }

    @wire(fetchAccounts, { maxRecords: '$maxRecords' })
    wiredAccounts({errors, data}){
        if(data){
            this.accounts = data;
            this.accounts = this.accounts.map(acc => ({Id:acc.Id,Name: acc.Name.toUpperCase()}));
            console.log('wire launched: ',JSON.stringify(this.accounts));
        }
        else{
        console.log('Error: ',errors); 
        }
}
    handleChange(event) {
        this.accountName = event.target.value;
    }
    handleClick() {
            this.loading = true;
            createNewAccount ({accountName: this.accountName})
            .then((result) => {
                this.accountName = '';
                this.accounts = [...this.accounts, result];
                this.maxRecords++;
                // this[NavigationMixin.Navigate]({
                //     type: 'standard__recordPage',
                //     attributes: {
                //         recordId: result.Id,
                //         objectApiName: 'Account', // objectApiName is optional
                //         actionName: 'view'
                //     }
                // });
                this.showToast("Sucess!","success","Account Created Successfully!");

            })
            .catch(error => {
                this.error = error;
                this.showToast("Error!","error",error.body.message);
            })
            .finally(() => {
                this.loading = false;
            });
    }   

    showToast(title,variant,message) {
        const event = new ShowToastEvent({
            title: title,
            variant: variant,
            message: message,
        });
        this.dispatchEvent(event);
    }

}