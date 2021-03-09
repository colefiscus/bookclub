describe('Routes', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
  })

  it.only('Should load on the home page', () => {
    cy.url().should("include", "3000/")
  })
})