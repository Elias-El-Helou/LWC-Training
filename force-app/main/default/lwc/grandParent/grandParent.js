import { LightningElement, track } from 'lwc';

export default class GrandParent extends LightningElement {
    @track valueFromGrandChild='';
    handleGrandChildClick(event){
        this.valueFromGrandChild=event.detail;
    }
}