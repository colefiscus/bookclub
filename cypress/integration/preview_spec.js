describe("Selection", () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000').wait(1500)
  })

  it('Should show a list of categories on page load', () => {
    cy.get('main').get('section').children().should('have.length', 59)
    cy.get('h1').should('contain', 'BOOKCLUB')
    cy.get('h2').should('contain', 'Step 1: Browse Categories')
  })
  
  it('Should show a list of books when clicking on a category', () => {
    cy.get('main').get('section').get('article:first').children('a:first').then($link => {
      const text = $link.text()
      console.log(text)
      cy.get($link).click().wait(500)
      cy.get('h2:last').should('contain', text)
      cy.get('aside:first').children('p').should('contain', '#1')
      cy.get('article:first').children('h3').should('contain', 'THE FOUR WINDS')
      cy.get('a').click()
    })
    cy.get('main').get('section').get('article:last').children('a:first').then($link => {
      const text = $link.text()
      console.log(text)
      cy.get($link).click().wait(500)
      cy.get('h2:last').should('contain', text)
      cy.get('aside:first').children('p').should('contain', '#1')
      cy.get('article:first').children('h3').should('contain', 'WE WERE LIARS')
      cy.get('a').click()
    })
  })

  it('Should filter through categories of books', () => {
    cy
      .get('form').get('input').eq(1).click()
      .get('article:first').children('a').should('contain', 'Combined Print & E-Book Fiction')
      .get('form').get('input').eq(2).click()
      .get('article:first').children('a').should('contain', 'Combined Print & E-Book Nonfiction')
      .get('form').get('input').eq(3).click()
      .get('article:first').children('a').should('contain', 'Hardcover Advice & Misc.')
      .get('form').get('input').eq(4).click()
      .get('article:first').children('a').should('contain', 'Young Adult')
      .get('form').get('input').eq(5).click()
      .get('article:first').children('a').should('contain', "Children’s Chapter Books")
  })
})