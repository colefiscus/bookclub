describe('Network Requests and Error Handling', () => {
  beforeEach(() => {
    cy.fixture('mock_categories')
      .then((categories) => {
        cy.intercept('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=obrhAVJmNNtUdhs3RSbGr7Shq6cwxtyH', {
          statusCode: 201,
          body: categories
        })
      })
    cy
    .visit('https://bookclubbuddy.herokuapp.com/').wait(1500)
  })

  it('Should retrieve categories on page load', () => {
    cy.get('a:first').should('contain', 'Super Magical Action Fiction')
  })

  it('Should show a preview list when selecting a category', () => {
    cy.fixture('mock_preview_list')
      .then((bookPreviews) => {
        cy.intercept('https://api.nytimes.com/svc/books/v3/lists.json?list=cookbooks-for-racoons&api-key=obrhAVJmNNtUdhs3RSbGr7Shq6cwxtyH', {
          statusCode: 201, 
          body: bookPreviews
        })
      })
    cy
      .get('article:last').children('a:first').click()
      .get('article:first').children('h3').should('contain', 'Garbage Can Delights')
  })
})