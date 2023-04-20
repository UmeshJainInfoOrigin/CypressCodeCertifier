/// <reference types="Cypress" />


import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

Given("Actor on session login page", (() => {
    cy.LoginAPI().then(function () {
        cy.visit("https://rahulshettyacademy.com/client",
            {
                onBeforeLoad: function (window) {
                    window.localStorage.setItem('token', Cypress.env('token'))
                }
            })
    })
})
)


    Given("Actor on angular.realworld.io", () => {
        let r = (Math.random() + 1).toString(36).substring(7);
        cy.LoginToken()
    const bodyRequest = {
        "article": {
            "tagList": [],
            "title": "Request from the Info Origin " + r,
            "description": "API testing is easy",
            "body": "Cypress is best tool"
        }
    }

    cy.get('@token').then(token => {

        cy.request({
            url: 'https://api.realworld.io/api/articles/',
            headers: { 
                'Authorization': '   '+token,
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: bodyRequest
        }).then( response => {
            expect(response.status).to.equal(200)
        })

        // Get call will confirm the above post with token is successful
        cy.request({
            url: 'https://api.realworld.io/api/articles?limit=10&offset=0',
            headers: { 
                'Authorization': 'Token '+token                
            },
            method: 'GET'
        }).its('body').then( body => {
            expect(body.articles[0].title).equal(bodyRequest.article.title)
        })

    })


})