import { LightningElement, api } from 'lwc';

export default class IncreaseCounter extends LightningElement {
    @api counter;
    // @api alertMessage(){
    //     alert('Message from Child');
    // }
    // sendEvent() {
    //     const selectedEvent = new CustomEvent('sampleevent', {
    //       detail: { author: "Rad", instructor: "EL Toro" }
    //     });
    
    //     this.dispatchEvent(selectedEvent);
    //   }
    
}