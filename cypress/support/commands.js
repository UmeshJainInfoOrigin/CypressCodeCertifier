
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//



/**
 * Select item from Static or Dynamic dropdown
 * for standard windows drop down use below syntax
 * cy.get('select').select('option2').should('have.value','option2')
 * @param locator of dropdown, opton list and item to be select
 * @return item selected
 * @author InfoOrigin
 * @CreatedOn Apr 2023
 */
Cypress.Commands.add('selectItemStaticDropdown', (locatorDropdown,locatorOptionList,itemToSelect)=>{
    cy.get(locatorDropdown).click()
  cy.get(locatorOptionList).contains(itemToSelect).click()
  cy.get(locatorDropdown).should('contain', itemToSelect)

})

//Date:- Apr 2023
//Author: Info Origin
//Purpose: For Dynamic dropdown, Actor will pass locator for
//1 .downlown
//2. locator for dynamic list
//3. item to be selected
// output:- Assertion item provided is selected
/**
 * @description Select item from Static or Dynamic dropdown
 * @param locator of dropdown, opton list and item to be select
 * @author InfoOrigin
 * @returns Assertion on item provided and selected it
 * @CreatedOn Apr 2023
 */
Cypress.Commands.add('selectItemDynamicDropdown', (locatorDropdown, locatorOptionList, itemToSelect)=>{
    //cy.get(locatorDropdown).type(itemToSelect.substring(0,3));
    locatorDropdown.type(itemToSelect.substring(0,3));
    // wait for some time
    cy.wait(3000);
    cy.get(locatorOptionList).each(($e1, index, $list) => {

        if($e1.text()===itemToSelect)
        {
            $e1.click()
        }
        
})
locatorDropdown.should('have.value',itemToSelect)    
})

Cypress.Commands.add("selectProduct", (productName) => { 
        cy.get('h4.card-title').each(($el, index, $list) => {
        if($el.text().includes(productName))
        {
            cy.get('button.btn.btn-info').eq(index).click()
        }
        
        })

})

//Date:- Apr 2023
//Author: Info Origin
//Purpose: Actor will pass Table locator and this function will return in arry all the header columns
//if table is defined as <Table><Thead><Th></Th></Thead><Tbody></Tbody></Table> then headerFlag=true
//if table is defined as <Table><Tbody><Th></Th></Tbody></Table> then headerFlag=false
/**
 * @description Actor will pass Table locator and this function will return in arry all the header columns
 * if table is defined as <Table><Thead><Th></Th></Thead><Tbody></Tbody></Table> then headerFlag=true
 * if table is defined as <Table><Tbody><Th></Th></Tbody></Table> then headerFlag=false
 * @author InfoOrigin
 * @CreatedOn Apr 2023
 * @returns List of table headers
 */
Cypress.Commands.add('getTableHeader', (headerFlag=true, tableLocator) => {
    const tableHeader = []
    cy.get(`${tableLocator} thead` ).then(($el) => {
        if ($el.length) {
        console.log('header exist')
        } else {
            console.log('not exist')
        }
        })

    if (headerFlag) {
        cy.get(tableLocator).find('thead').as('headerRow')
    }
    else{
    cy.get(tableLocator).find('tbody').as('headerRow')
    }

    cy.get('@headerRow')
    .find('tr')
    .eq(0)
    .find('th').each(($el,index, list) => {
        tableHeader.push($el.text().trim())
      
     }).then( () => {
        return tableHeader
})
})
/**
 * @description This function will return JSON of webtable
 * keys of JSON will be header column
 * @param tableLocator and HeaderFlag=true if thead is defined
 * @date Apr 2023 
 * @author Info Origin
 * @returns webtable values in JSON format
 */
Cypress.Commands.add('tableDataIntoJSON', (headerFlag=true, tableLocator) => {
    cy.getTableHeader(headerFlag, tableLocator).then((headerList)=>{
        let jsonData = []
        
        cy.get(tableLocator).find('tbody').find('tr').each(($row, rowIndex) => {
            
            if (headerFlag) {
                jsonData[rowIndex] = {}// creates object for each row
                cy.get($row).find('td').each(($cell, cellIndex) => {
                    jsonData[rowIndex][headerList[cellIndex]] = $cell.text()
                })
            }
            else {
                if (rowIndex >0) {
                jsonData[rowIndex-1] = {}// creates object for each row
                cy.get($row).find('td').each(($cell, cellIndex) => {
                    jsonData[rowIndex-1][headerList[cellIndex]] = $cell.text()
                })
            }
            }
      }). then(()=>{
        return { "jsonData" :jsonData}
      })

    })
})

Cypress.Commands.add("LoginAPI",()=> {

    cy.request("POST","https://rahulshettyacademy.com/api/ecom/auth/login",
    {userEmail: "umesh.jain@infoorigin.com", userPassword: "GondiaRice@441601"}).
    then((response) =>
    {
       expect(response.status).to.eq(200)
       Cypress.env('token',response.body.token);
       console.log(response.body)
    })
})

/**
 * @description This function will login to API using credentials provided
 * @param user credential having userid and pwd
 * @author InfoOrigin
 * @CreatedOn Apr 2023
 * @returns Authorised Token
 */
Cypress.Commands.add("LoginToken",()=> {
    const userCredentials = {
        "user": {
            "email": "umesh.jain@infoorigin.com",
            "password": "GondiaRice@441601"
        }
    }
    
    cy.request({
        url: 'https://conduit.productionready.io/api/users/login/',
        headers: { 
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: userCredentials
    }).its('body').then( body => {
        const token = body.user.token
        cy.wrap(token).as('authToken')
    })

    // cy.request("POST","https://conduit.productionready.io/api/users/login/",
    // userCredentials).its('body').then( body => {
    //     const token = body.user.token
    //     cy.wrap(token).as('token')
    // })
})


//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
