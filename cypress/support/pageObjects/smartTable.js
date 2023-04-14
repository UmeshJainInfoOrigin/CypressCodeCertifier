export class SmartTable{
    getPlusbtn() {
        return getTableBodyHeader('thead').find('.nb-plus')
    }
    getHeaderAge() {
        return cy.get('thead [placeholder="Age"]')
    }
    getTableBodyHeader(whichSection){
        return cy.get(whichSection)
    }
    
    getTableRowColumn(tableRow, tableColumn) {
        //below line has (`) Acute not (') Apostrophe or single quote
        return cy.wrap(tableRow).find(`[placeholder="${tableColumn}"]`)
    }

    getTableRowAction(tableRow, action) {
        return cy.wrap(tableRow).find(action)
 
    }

    getUsingtheGridEmail(jsonkey) {
        return cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')
        return cy.get(genertic)
    }

     getTableHeaders = (headerFlag, tableLocator) => {
        const tableHeader = []
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
            tableHeader.push($el.text())
          
         }).then( () => {
    console.log(tableHeader)
            return tableHeader
    })
    }
    
}
export const onSmartTable = new SmartTable()