export class homePage {

    getEditBox() {
        return cy.get('input[name="name"]:nth-child(2)')
    }

    getTwoWayDataBinding() {
        return cy.get(':nth-child(4) > .ng-untouched')

    }
    getGender() {
        return cy.get('select')
    }

    getEntrepreneaur() {
        return cy.get('#inlineRadio3')
    }
    getShopTab() {
        return cy.get(':nth-child(2) > .nav-link')
    }

    getProductTotal() {
        cy.get('h3 strong').then(function (element) {
            return element.text()
        })
    }

}

export const onHomePage = new homePage()
