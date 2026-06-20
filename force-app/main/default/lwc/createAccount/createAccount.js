import { LightningElement } from 'lwc';
import createNewAccount from '@salesforce/apex/AccountController.createNewAccount';
import { NavigationMixin } from 'lightning/navigation';

export default class CreateAccount extends NavigationMixin(LightningElement) {
    accountName;
    handleChange(event) {
        this.accountName = event.target.value;
    }
    handleClick() {
        createNewAccount({accountName:this.accountName}).then(result=>{
            console.log('Result is:', result);
               this[NavigationMixin.GenerateUrl](
                {
                 type: 'standard__recordPage',
                    attributes: {
                        recordId: result,
                        actionName: 'view',
                    },
                });
        }).catch(error=>{
            console.log('error occurred when inserting account: ',error);
        })
    }   
}