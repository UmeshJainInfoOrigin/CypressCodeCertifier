import {onRegistration} from '../../../support/pageObjects/registration'
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


When('Actor on Auth then Registration page', function () {
  cy.log('Actor on Auth then Registration page')
  cy.contains('Auth').click()
  cy.contains('Register').click()
})

When('Actor Fill all information using option 1 and submit', ()=>{
    onRegistration.getInputName().type('InfoOrigin')
    onRegistration.getEmailAddress().type('Admin@infoOrigin.com')
    onRegistration.getPassword().type('Gondia')
    onRegistration.getRepeatPassword().type('Gondia')
    onRegistration.getAgreeToTandC().click()
    onRegistration.getRegister().click()
})

When('Actor Fill all information using option 2 and submit', ()=>{
    onRegistration.getPageObjects('#input-name').type('InfoOrigin')
    onRegistration.getPageObjects(onRegistration.getPageObjectLocator()['inputName']).type('InfoOrigin')
    onRegistration.getPageObjects('#input-email').type('Admin@infoOrigin.com')
    onRegistration.getPageObjects('#input-password').type('Gondia')
    onRegistration.getPageObjects('#input-re-password').type('Gondia')
    onRegistration.getPageObjects('.custom-checkbox').click()
    onRegistration.getPageObjects('button[ng-reflect-status="primary"]').click()
})

When('Actor Fill all information using option 2.1 and submit', ()=>{
    onRegistration.getPageObjects('#input-name1').type('DellComputer')
    onRegistration.getPageObjects(onRegistration.getPageObjectLocator()['inputName']).type('InfoOrigin')
    onRegistration.getPageObjects('#input-email').type('Admin@infoOrigin.com')
    onRegistration.getPageObjects('#input-password').type('Gondia')
    onRegistration.getPageObjects('#input-re-password').type('Gondia')
    onRegistration.getPageObjects('.custom-checkbox').click()
    onRegistration.getPageObjects('button[ng-reflect-status="primary"]').click()
})


When('Actor Fill all information using option 3 and submit', ()=>{
    onRegistration.getPageObjects(onRegistration.getPageObjectLocator()['inputName']).type('InfoOrigin')
    onRegistration.getPageObjects(onRegistration.getPageObjectLocator()['emailAddress']).type('Admin@infoOrigin.com')
    
})