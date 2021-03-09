describe('Routes', () => {
  beforeEach(() => {
    cy.visit('localhost:3000').wait(1000)
  })

  it('Should load on the home page', () => {
    cy.url().should('include', '3000/')
  })

  it('Should show the preview URL when clicking on a category', () => {
    cy
      .get('article:first').children('a:first').click()
      .url().should('include', '/preview/combined-print-and-e-book-fiction')
      .get('a').click()
  })

  it('Should show the approval URL when selecting a category', () => {
    cy
      .get('article:first').children('a:last').click()
      .url().should('include', '/approval')
      .get('button').click()
  })

  it('Should show the book title URL when selecting specific book for more details', () => {
    cy
      .get('article:first').children('a:last').click()
      .get('input').type(3)
      .get('button').click()
    cy
      .get('input[class=nameInput]:first').type('Bernie')
      .get('input[class=nameInput]').eq(1).type('Barrack')
      .get('input[class=nameInput]:last').type('Elizabeth')
      .get('button').click()
    cy
      .get('section:first').children('div[class=bookVote]').eq(5).children('a:last').click()
      .url().should('include', '/details/THE%20MIDNIGHT%20LIBRARY')
  })

  it('Should return back to the home URL when completing a vote', () => {
    cy
      .get('article:first').children('a:last').click()
      .get('input').type(3)
      .get('button').click()
    cy
      .get('input[class=nameInput]:first').type('Bernie')
      .get('input[class=nameInput]').eq(1).type('Barrack')
      .get('input[class=nameInput]:last').type('Elizabeth')
      .get('button').click()
    cy
      .get('section:first').children('div[class=bookVote]').eq(0).click()
      .get('button[class=voteCompleteButton]:first').click()
    cy
      .get('section').eq(1).children('div[class=bookVote]').eq(0).click()
      .get('button[class=voteCompleteButton]').eq(1).click()
    cy
      .get('section:last').children('div[class=bookVote]').eq(0).click()
      .get('button[class=voteCompleteButton]:last').click()
    cy
      .get('button[class=finalSubmitButton]').click()
      .get('a').click()
      .url().should('include', '3000/')    
  })
})