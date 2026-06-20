import { LightningElement, api} from 'lwc';
export default class HelloBinding extends LightningElement {
	greeting = 'World';
    booleanValue=false;
    someProperty;
    @api recordId;
    renderedCallback(){
        console.log('this.recordId: ',this.recordId);
    }
	handleButtonClick(){
        this.booleanValue=!this.booleanValue;
        console.log('booleanValue: ',this.booleanValue);
		console.log('Greeting value is',this.greeting);
        if(this.booleanValue){
            this.someProperty='TESTT';
        }else{
            this.someProperty=undefined;
        }
        if(this.someProperty){
            console.log('Inside if');
        }

	}
    handleChange(event){
        this.greeting=event.target.value;
    }
}