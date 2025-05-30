import { LightningElement, track } from 'lwc';

export default class Lch_validateContactEmail extends LightningElement {
    @track email = '';
    @track validationMessage = '';
    @track messageClass = '';

    // Handle email input change
    handleEmailChange(event) {
        this.email = event.target.value;
        this.validationMessage = ''; // Clear previous message on input change
    }

    // Validate email on button click
    handleValidate() {
        const emailRegex = /^[^\s@]+@(lseg|lch)\.com$/;
        if (!this.email) {
            this.validationMessage = 'Please enter an email address.';
            this.messageClass = 'slds-text-color_destructive';
        } else if (emailRegex.test(this.email)) {
            this.validationMessage = 'Valid email address!';
            this.messageClass = 'slds-text-color_success';
        } else {
            this.validationMessage = 'Invalid email address. Please enter a valid email.';
            this.messageClass = 'slds-text-color_destructive';
        }
    }
}