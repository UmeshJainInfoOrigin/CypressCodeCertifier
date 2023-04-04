import apiGetData from '../../fixtures/Library/apiGet.json'
import statusCodes from '../../fixtures/httpResponseCode.json'


describe('Basic API Calls', function () {
    it('Post Call using fixture', function () {
        let r = (Math.random() + 1).toString(36).substring(7);
        cy.fixture('Library/apiPost').then(function (apiPostData) {
            this.apiPostData = apiPostData
            this.apiPostData.isbn = r
            console.log("payload", this.apiPostData);
        })

        cy.request('POST', Cypress.env('apiPost'), this.apiPostData).then(function (response) {
            console.log('response.body', response.body)
            //expect(response.body).to.have.property('Msg','successfully added')

            expect(response.status).to.eq(200)
        })
    })

    it('Get call using fixture and common json', function () {
        cy.fixture('Library/apiGet').then(function (apiGetData) {
            this.apiGetData = apiGetData
            console.log("response", this.apiGetData);
        })
        cy.request('GET', Cypress.env('apiGet')).then(function (response) {
            expect(response.body[0], 'response body').to.include(
                this.apiGetData)
                
            expect(response.status).to.eq(statusCodes.allStatusCode.statusCodeOK)
        })
        
    })

    it('Get call using fixture and env', function () {
        cy.fixture('Library/apiGet').then(function (apiGetData) {
            this.apiGetData = apiGetData
            console.log("response", this.apiGetData);
        })
        cy.request('GET', Cypress.env('apiGet')).then(function (response) {
            expect(response.body[0], 'response body').to.include(
                this.apiGetData)
            
            expect(response.status).to.eq(Cypress.env('allcode').statusCodeSuccessA)
            
        })
    })

    it('Get call using Fixture AS keyword', function () {
        cy.fixture('Library/apiGet').as('apiGetData')
        cy.request('GET', Cypress.env('apiGet')).then(function (response) {
            expect(response.body[0], 'response body').to.include(
                this.apiGetData)
            expect(response.status).to.eq(200)
        })
    })

    it('Get call using Import', function () {
        cy.request('GET', Cypress.env('apiGet')).then(function (response) {
            expect(response.body[0], 'response body').to.include(
                apiGetData)
            expect(response.status).to.eq(200)
        })
    })
})
