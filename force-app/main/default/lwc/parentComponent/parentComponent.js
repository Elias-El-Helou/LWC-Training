import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    valueFromChild='';
    handleChildClick(event){
        console.log('HB: event.detail: ',event.detail);
        this.valueFromChild=event.detail;
    }
}