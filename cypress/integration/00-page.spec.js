/// <reference types="Cypress" />

context('Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('found the expected page title', () => {
    cy.title().should('equal', 'Redux Counter Example App')
  })
})
