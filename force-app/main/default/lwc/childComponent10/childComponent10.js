import { LightningElement, api } from 'lwc';

export default class ChildComponent10 extends LightningElement {
    @api greeting;
    @api name;
    @api age;
    @api position;
}