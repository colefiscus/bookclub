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
  })
})