import { LightningElement, track,api } from 'lwc';

export default class Promo10Properties extends LightningElement {
    message='Hello';
    greeting='Hellooo';
    renderParagraph=false;
    handleClick(){
        this.renderParagraph=!this.renderParagraph;
    }
    changeMessage(){
        this.message='Message Changed';
    }
    handleChange(event){
		this.greeting=event.target.value;
	}
}