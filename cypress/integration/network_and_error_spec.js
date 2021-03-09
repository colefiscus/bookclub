describe('Network Requests and Error Handling', () => {
  beforeEach(() => {
    cy.fixture('mock_categories')
      .then((categories) => {
        cy.intercept('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=obrhAVJmNNtUdhs3RSbGr7Shq6cwxtyH', {
          status: 201,
          body: categories
        })
      })
    cy
    .visit('http://localhost:3000').wait(1500)
  })

  it('Should retrieve categories on page load', () => {
    cy.get('a:first').should('contain', 'Super Magical Action Fiction')
  })
})