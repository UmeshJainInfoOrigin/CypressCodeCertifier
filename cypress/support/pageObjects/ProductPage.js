export class productPage {

    checkOutButton() {
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }
}

export const onProductPage = new productPage()
