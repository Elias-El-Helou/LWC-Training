import { LightningElement } from 'lwc';

export default class LifeCycleHooks extends LightningElement {
    someVariabl=10;
    constructor(){
        super();
        console.log('Constructor from Parent Component');
        // this.someVariable=10;
        // console.log('someVariable initialized',this.someVariable);
    }
    connectedCallback(){
        console.log('ConnectedCallback in parent');
    }
    renderedCallback(){
        console.log('Rendered in Parent');
    }
}