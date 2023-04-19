export class RegistrationOptionTwo{
    getPageObjects(objectLocator) {
        //return cy.get('#input-name')
        return cy.get(objectLocator)
    }
    // getEmailAddress() {
    //     return cy.get('#input-email')
    // }
    // getPassword() {
    //     return cy.get('#input-password')
    // }
    // getRepeatPassword() {
    //     return cy.get('#input-re-password')
    // }
    // getAgreeToTandC() {
    //     //return cy.get('input[class="native-input visually-hidden"]')
    //     return cy.get('.custom-checkbox')
    // }
    // getRegister() {
    //     return cy.get('button[ng-reflect-status="primary"]')
    // }
    
}

export const onRegistrationOptionTwo = new RegistrationOptionTwo()