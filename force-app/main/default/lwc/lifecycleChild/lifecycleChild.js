import { LightningElement,api } from 'lwc';

export default class LifecycleChild extends LightningElement {
    @api message;
    isRendered=true;
    constructor(){
        super();
        console.log('Constructor in child');
        
    }
    connectedCallback(){
        console.log('ConnectedCallback in Child:',this.message);
    }
    renderedCallback(){
        console.log('Rendered in Child');
        if(this.isRendered){

            //logic
            this.isRendered=false;
        }
    }
}