export class Registration{
    getPageObjectLocator () {
        return {
            inputName: "#input-name",
            emailAddress: "#input-email"
        }
    }
    
    getInputName() {
        // manipulation
        return cy.get('#input-name')
    }
    getEmailAddress() {
        return cy.get('#input-email')
    }
    getPassword() {
        return cy.get('#input-password')
    }
    getRepeatPassword() {
        return cy.get('#input-re-password')
    }
    getAgreeToTandC() {
        //return cy.get('input[class="native-input visually-hidden"]')
        return cy.get('.custom-checkbox')
    }
    getRegister() {
        return cy.get('button[ng-reflect-status="primary"]')
    }
    
    //Option 2
    getPageObjects(objectLocator) {
        return cy.get(objectLocator)
    }
}

export const onRegistration = new Registration()