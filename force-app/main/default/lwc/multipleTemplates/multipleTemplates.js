import { LightningElement } from 'lwc';
import templateOne from "./templateOne.html";
import templateTwo from "./templateTwo.html";
export default class MultipleTemplates extends LightningElement {
    showTemplateOne=true;

    render(){
        return this.showTemplateOne? templateOne: templateTwo;
    }
    switchTemplate(){
        this.showTemplateOne=!this.showTemplateOne;
    }
 
}