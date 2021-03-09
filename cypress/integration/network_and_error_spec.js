describe('Network Requests and Error Handling', () => {
  beforeEach(() => {
    cy.fixture('mock_categories')
      .then(() => {
        cy.intercept('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=obrhAVJmNNtUdhs3RSbGr7Shq6cwxtyH')
      })
    cy
    .visit('http://localhost:3000').wait(1500)
  })
})