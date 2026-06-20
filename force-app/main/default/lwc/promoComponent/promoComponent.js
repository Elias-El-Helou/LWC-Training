import { LightningElement } from 'lwc';

export default class PromoComponent extends LightningElement {
    x = 10;
    messageParent="Hello from parent";
    handleClick(){
        alert("hello: "+this.x);
    }
}