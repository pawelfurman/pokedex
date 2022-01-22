describe("Happy Path - Find Psyduck", () => {
    it("should be visible", () => {
        cy.visit('/')
        cy.get('img[alt="Psyduck"]').should('be.visible')
    })
})

describe("Happy Path - Starting from dashboard go to the pokemon list, select second page and catch two pokemons", () => {

    it("should have two pokemons", () => {
        cy.visit('/')
        cy.get('.app-header-menu > a').eq(1).click()
        cy.get('.p-paginator-pages > button').eq(1).click()
        cy.get('#pokemon-list-table tbody tr:nth-child(1)').contains("Catch").click()
        cy.get('#pokemon-list-table tbody tr:nth-child(2)').contains("Catch").click()
        cy.get('.app-header-addon-counter:nth-child(1) p-badge span').invoke('text').then((text) => text.replace(' ', '').trim()).should("eq", "2")
    })
})


describe("Happy Path - Starting from dashboard go to the pokemon list, add three pokemons to wishlist", () => {
    it("should have three pokemons on your wishlist", () => {
        cy.visit('/')
        cy.get('.app-header-menu > a').eq(1).click()
        cy.get('#pokemon-list-table tbody tr:nth-child(1)').contains("Save").click()
        cy.get('#pokemon-list-table tbody tr:nth-child(2)').contains("Save").click()
        cy.get('#pokemon-list-table tbody tr:nth-child(5)').contains("Save").click()
        cy.get('.app-header-addon-counter:nth-child(2) p-badge span').invoke('text').then((text) => text.replace(' ', '').trim()).should("eq", "3")
    })
})


describe("Happy Path - Starting from dashboard go to the pokemon list, add three pokemons to wishlist and see them on wishlist popup", () => {
    it("should have three pokemons on this popup", () => {
        cy.visit('/')
        cy.get('.app-header-menu > a').eq(1).click()
        cy.get('#pokemon-list-table tbody tr:nth-child(1)').contains("Save").click()
        cy.get('#pokemon-list-table tbody tr:nth-child(2)').contains("Save").click()
        cy.get('#pokemon-list-table tbody tr:nth-child(5)').contains("Save").click()
        cy.get('.app-header-addon-counter:nth-child(2)').click()
        cy.get('.p-dialog-content .grid > div').should('have.length', 3)
    })
})