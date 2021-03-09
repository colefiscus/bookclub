describe('Error Handling', () => {
  it('Should show an error message when encountering an error', () => {
    cy.fixture('mock_categories')
      .then((categories) => {
        cy.intercept('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=obrhAVJmNNtUdhs3RSbGr7Shq6cwxtyH', {
          statusCode: 400,
          body: categories
        })
      })
    cy
      .visit('http://localhost:3000').wait(1500)
      .get('h2').should('contain', '400 Error')
  })
})