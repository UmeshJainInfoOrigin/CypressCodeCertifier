/// <reference types="Cypress" />
import apiGetData from '../../../fixtures/library/apiGet.json'
import statusCodes from '../../../fixtures/httpResponseCode.json'

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let apiPostData


const fixtureCommonJson = function () {
    if (Cypress.isBrowser('chrome')) {
        console.log('fixtureCommonJson')
        cy.log('fixtureCommonJson')
    }
        cy.fixture('library/apiGet').then( (apiGetDataFromJson)=> {
            apiGetData = apiGetDataFromJson
            console.log("response", apiGetData);
        })
        cy.request('GET', Cypress.env('apiGet')).then((response)=> {
            expect(response.body[0], 'response body').to.include(
                apiGetData)
                
            expect(response.status).to.eq(statusCodes.allStatusCode.statusCodeOK)
        })
      }
      
 Given('Actor calls Library API for posting data', ()=> {
    if (Cypress.isBrowser('chrome')) {
        console.log('Running in chrome')
        cy.log('Running in chrome')
    }
     console.log('Actor calls Library API for posting data')
             let r = (Math.random() + 1).toString(36).substring(7);
        cy.fixture('library/apiPost').then((apiPostDataFromJson)=> {
            apiPostData = apiPostDataFromJson
            apiPostData.isbn = r
            console.log("payload->", apiPostData);
        })
 })

 When('Agreed Payload is passed in JSON',  ()=>{
    console.log('Agreed', apiPostData)
      cy.request('POST', Cypress.env('apiPost'), apiPostData).then( (response)=> {
      console.log('response.body', response.body)
      expect(response.body).to.have.property('Msg','successfully added')
      expect(response.status).to.eq(200)
        })
 })

 Then('Actor receives book added successfully', ()=> {
    console.log('Actor')
    //fixtureCommonJson()
 })

 Given ('Actor calls Library API with payload', ()=>{
    console.log('Actor calls Library API with payload')
    cy.fixture('library/apiGet').then( (apiGetDataFromJSON)=> {
    let apiGetData = apiGetDataFromJSON
    console.log("response", apiGetData);
})
})

Given ('Actor calls Library API and read using AS keyword', ()=>{
    console.log('Actor calls Library API and read using AS keyword')
    cy.fixture('library/apiGet').as('apiGetData')
})

 
 Then('Actor validate response using httpResponseCode json', ()=> {
        cy.request('GET', Cypress.env('apiGet')).then((response)=> {
         console.log('fetched response from api httpResponseCode', response)
            expect(response.body[0], 'response body').to.include(
                apiGetData)
                
            expect(response.status).to.eq(statusCodes.allStatusCode.statusCodeOK)
            console.log('end..')
        })

 })

 Then('Actor validate response using env variable', ()=> {
    cy.request('GET', Cypress.env('apiGet')).then( (response)=> {
     console.log('fetched response from api', response)
        expect(response.body[0], 'response body').to.include(
            apiGetData)
            
        expect(response.status).to.eq(Cypress.env('allcode').statusCodeSuccessA)
        console.log('end..')
    })

})
