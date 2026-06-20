import { LightningElement, api } from 'lwc';

export default class FirstChildComponent extends LightningElement {
    _message = '';
    // _message='';   
    @api counter = 0;
    @api name;
    @api age;
    @api job;

    @api incrementCounter(){
        console.log('child counter called');
        this.counter++;
    }

    @api get message(){
        return this._message;
    }
    set message(value){
        if (value && value.trim() !== '') {
            this._message = value;
        } else {
            this._message = 'Default message from child';
        }
    }

    handleClick() {
        const myEvent = new CustomEvent('mycustomevent', {
            detail: { message: 'Hello from Child!' }
        });
        this.dispatchEvent(myEvent);
    }
    
}