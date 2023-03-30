import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
Given('I open ECommerce Page', () => {
    cy.visit(Cypress.env('url') + "/angularpractice/")
})
