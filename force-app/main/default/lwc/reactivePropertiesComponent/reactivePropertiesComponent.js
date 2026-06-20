import { LightningElement, api,track } from 'lwc';
export default class ReactivePropertiesComponent extends LightningElement {
    @api recordId;
    greeting='Hello';
    classes = ['DEX450', 'CCD102'];
    displayCourses=false;
    handleGreetingChange(event){
        this.greeting=event.target.value;
    }
    handleButtonClick(){
        this.displayCourses=!this.displayCourses; 
        console.log('Greeting Value: ', this.greeting);
        this.classes.push('ADX200');
        console.log('this.classes:',JSON.stringify(this.classes));
       
    }

}