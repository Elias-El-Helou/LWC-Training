import { LightningElement } from 'lwc';

export default class FirstComponent extends LightningElement {
    
    inputMessage='Any message from parent';
    // parentCounter=0;
    childProps = {name:"Elias", age:24,job:'developer'};
    childMessage='';
    incrementChildCounter(){
        console.log('function from parent');
        this.refs.childRef.incrementCounter();
        console.log('refs: ',this.refs.childRef);
        // this.template.querySelector('c-first-child-component').incrementCounter();
    }
    handleInput(event){
        this.inputMessage = event.target.value;
    }

    handleChildEvent(event){
        this.childMessage = event.detail.message;
    }
}