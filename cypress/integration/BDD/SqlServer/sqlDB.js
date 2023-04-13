/// <reference types="Cypress" />

//context is just alias for describe
describe('Connecting to Azure Sql ', function () {
    console.log('sqlDB.js-->Connecting to Azure Sql')
    it('Insert into sqlServer', function () {
        cy.sqlServer("insert into [dbo].[emp] values(600,'Will')").then(function (result) {
            console.log('afftected rows=', result.affectedRows)
        })
    })

    it('Insert into sqlServer using cy.task', function () {
        cy.task('sqlServer:execute', "insert into [dbo].[emp] values(600,'Will')").then(response => {
            console.log('afftected rows=', response)
        })
    })

    it('Retrieve Data from SqlServer', function () {
        cy.sqlServer('select * from [dbo].[emp]').then(function (result) {
            console.log(result)
        })
    })
})