describe('User Selection and Book Details', () => {
  beforeEach(() => {
    cy
      // .visit('http://localhost:3000').wait(1500)
      .get('article').eq(2).children('a:last').click()
  })

  it('Should create users based on user input', () => {
    cy
      .get('button').click()
      .get('input').type(3)
      .get('button').click()
      .get('form').children('div').should('have.length', 3)
  })

  it('Should show an alert if not all names are entered', () => {
    cy
      .get('input').type(3)
      .get('button').click()
    cy
      .get('input[class=nameInput]:first').type('Bernie')
      .get('input[class=nameInput]').eq(1).type('Barrack')
      .get('button').click()
      .get('form').children('div').should('have.length', 3)
  })

  it('Should give the users names', () => {
    cy
      .get('input').type(3)
      .get('button').click()
    cy
      .get('input[class=nameInput]:first').type('Bernie')
      .get('input[class=nameInput]').eq(1).type('Barrack')
      .get('input[class=nameInput]:last').type('Elizabeth')
      .get('button').click()
    cy
      .get('section:first').children('h2').should('contain', 'Bernie')
      .get('section:last').children('h2').should('contain', 'Elizabeth')
  })

  it.only('Should show a list of books with a preview link to show details', () => {
    cy
      .get('input').type(3)
      .get('button').click()
    cy
      .get('input[class=nameInput]:first').type('Bernie')
      .get('input[class=nameInput]').eq(1).type('Barrack')
      .get('input[class=nameInput]:last').type('Elizabeth')
      .get('button').click()
    cy
      .get('section:first').children('div[class=bookVote]').should('have.length', 10)
      .get('div[class=bookVote]').eq(2).children('button').should('contain', 'THE MIDNIGHT LIBRARY')
  })
})