import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('Actor on Test App home page', function() {
    console.log('Actor on Test App home page')
    cy.visit('http://localhost:4200/')
})

When('Actor click on Form menu', function () {
  cy.log('Actor click on Form menu')  
  cy.contains('Forms').click()
})

When('Actor click on Form Layout Submenu', function () {
    cy.log('Actor click on Form Layout Submenu')  
    cy.contains('Form Layouts').click()
  })

  Then('Actor verify Email textbox', function () {
    cy.log('Actor verify Email textbox')  
    cy.contains('nb-card', 'Using the Grid').then( firstForm => {
        const emailLabelFirst = firstForm.find('#inputEmail1').text()
        const passwordLabelFirst = firstForm.find('[for="inputPassword2"]').text()
        expect(emailLabelFirst).to.equal('Email')
        expect(passwordLabelFirst).to.equal('Password')
    })
    
  })            