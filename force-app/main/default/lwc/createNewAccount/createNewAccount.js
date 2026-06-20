import { LightningElement } from 'lwc';
import createAccount from '@salesforce/apex/CreateAccountImperatively.createAccount';
import { NavigationMixin } from 'lightning/navigation';
export default class CreateNewAccount extends NavigationMixin(LightningElement)  {
    accountName;
    handleChange(event) {
        this.accountName = event.target.value;
        console.log('event.target.value: ',event.target.value);
        console.log('event.detail.value: ',event.detail.value);
        console.dir(event);
    }
    // handleClick(){
    //     createAccount({name: this.accountName})
    //     .then(result =>{
    //         console.log('resultttttttt:',result);})
    //     .catch(error =>{
    //         console.log(error);
    //     });
    // }
    async handleClick() {
        try {
            const result = await createAccount({ name: this.accountName });
            console.log('result async:', result);
            this[NavigationMixin.GenerateUrl]({
                type: "standard__objectPage",
                attributes: {
                    recordId: result,
                    actionName: "home",
                },
            });
        } catch (error) {
            console.error(error);
        }
    }
}