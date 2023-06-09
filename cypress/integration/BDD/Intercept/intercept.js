/// <reference types="Cypress" />
 
describe('Intercept the API call', function() 
{
 
it('Example of Get Intercept',function() {
    console.log('intercept.js-->IT-->Example of Get Intercept')
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
 //first parameter is request and second is response
 //https://docs.cypress.io/api/commands/intercept#Request-object-properties
    cy.intercept({
        method : 'GET',
        url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
    },
 
     {
         statusCode : 200,
         body : [{
                'book_name': 'RestAssured with Java',
                'isbn': 'RSU',
                'aisle': '2301'    }]
          
     }).as('bookretrievals')
     cy.get("button[class='btn btn-primary']").click()
   // this will wait until the response is intercept with above 1 records
     cy.wait('@bookretrievals')
   cy.get('p').should('have.text','Oops only 1 Book available')
 
 
 
     //length of the response array = rows of the table
 
 
})
 
})
 