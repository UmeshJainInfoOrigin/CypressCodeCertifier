export class SmartTable{
    getPlusbtn() {
        return cy.get('thead').find('.nb-plus')
    }
    getHeaderAge() {
        return cy.get('thead [placeholder="Age"]')
    }
    getTableBody(){
        return cy.get('tbody')
    }
    getTableHeader(){
        return cy.get('thead')
    }
    getTableRowColumn(tableRow, tableColumn) {
        //below line has (`) Acute not (') Apostrophe or single quote
        return cy.wrap(tableRow).find(`[placeholder="${tableColumn}"]`)
    }

    getTableRowAction(tableRow, action) {
        return cy.wrap(tableRow).find(action)
    }
}
export const onSmartTable = new SmartTable()