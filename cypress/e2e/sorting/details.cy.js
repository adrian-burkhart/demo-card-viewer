/// <reference types="cypress" />

describe('Demo Card Viewer', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/')
  })

  it('can display player details', () => {
    cy.get('[data-cy=player-overview-card]').first().click()
    cy.get('[data-cy=detail-view]').should('contain', "Last Name")
  })



})
