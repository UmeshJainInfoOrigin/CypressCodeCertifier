/// <reference types="Cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


When("Actor click on Virtual Library and intercept API", () => {
  //first parameter is request and second is response
 //https://docs.cypress.io/api/commands/intercept#Request-object-properties
 cy.intercept({
  method : 'GET',
  url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
},

{
   statusCode : 200,
   body : [{
          'book_name': 'Cypress with Javascript and Typescript',
          'isbn': 'InfoOrigin',
          'aisle': '441601'    }]
    
}).as('bookretrievals')
cy.get("button[class='btn btn-primary']").click()
// this will wait until the response is intercept with above 1 records
cy.wait('@bookretrievals')
cy.get('p').should('have.text','Oops only 1 Book available')

})

