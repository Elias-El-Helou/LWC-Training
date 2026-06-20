import { LightningElement } from 'lwc';

export default class ChildComponent extends LightningElement {
    textBoxVal='';
    
    handleChange(event){
        this.textBoxVal=event.target.value;
    }
    handleClick(){
        const textBoxValue= this.textBoxVal;
        console.log('Updated13');
        const evt= new CustomEvent('inputtext',{
            bubbles:false,
            composed:false,
            detail:textBoxValue
        });
        this.dispatchEvent(evt);
    }
}