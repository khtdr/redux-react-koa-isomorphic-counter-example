/// <reference types="Cypress" />

const PRODUCT_ITEM_COUNT = 3

context('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.get('button').last().click()
  })
  it('starts with a count of 0', () => {
    cy.get('span').contains('0')
  })
  it('increments with each click', () => {
    cy.get('button').first().click()
    cy.get('span').contains('1')
    cy.get('button').first().click()
    cy.get('span').contains('2')
    cy.get('button').first().click()
    cy.get('span').contains('3')
    cy.get('button').first().click()
    cy.get('span').contains('4')
  })
  it('decrements with each click', () => {
    cy.get('button').first().click().click().click().click()
    cy.get('span').contains('4')
    cy.get('button').eq(1).click()
    cy.get('span').contains('3')
    cy.get('button').eq(1).click()
    cy.get('span').contains('2')
    cy.get('button').eq(1).click()
    cy.get('span').contains('1')
    cy.get('button').eq(1).click()
    cy.get('span').contains('0')
  })
  it('increments oddly as designed', () => {
    cy.get('span').contains('0')
    cy.get('button').eq(2).click()
    cy.get('span').contains('0')
    cy.get('button').first().click()
    cy.get('span').contains('1')
    cy.get('button').eq(2).click()
    cy.get('span').contains('2')
    cy.get('button').eq(2).click()
    cy.get('span').contains('2')
    cy.get('button').first().click()
    cy.get('span').contains('3')
    cy.get('button').eq(2).click()
    cy.get('span').contains('4')
  })
  it('resets when clicked', () => {
    cy.get('button').first().click().click().click().click()
    cy.get('span').contains('4')
    cy.get('button').eq(3).click()
    cy.get('span').contains('0')
  })
  it('persists and is rerendered', () => {
    cy.get('button').first().click()
    cy.get('span').contains('1')
    cy.reload(true)
    cy.get('span').contains('1')
  })
})
