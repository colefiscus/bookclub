describe('Routes', () => {
  beforeEach(() => {
    // cy.visit('localhost:3000').wait(1000)
  })

  it('Should load on the home page', () => {
    cy.url().should('include', '3000/')
  })

  it.only('Should show the preview URL when clicking on a category', () => {
    cy
      .get('article:first').children('a:first').click()
      .url().should('include', 'preview/combined-print-and-e-book-fiction')
  })

  it
})