// describe('User Voting', () => {
//   beforeEach(() => {
//     cy
//       .visit('https://bookclubbuddy.herokuapp.com/').wait(1500)
//       .get('article').eq(2).children('a:last').click()
//     cy
//       .get('input').type(3)
//       .get('button').click()
//     cy
//       .get('input[class=nameInput]:first').type('Bernie')
//       .get('input[class=nameInput]').eq(1).type('Barrack')
//       .get('input[class=nameInput]:last').type('Elizabeth')
//       .get('button').click()
//   })

//   afterEach(() => {
//     cy
//       .get('a').click()
//       .get('h2:first').should('contain', 'Step 1: Browse Categories')
//   })

//   it('Should tell users which books they matched on', () => {
//     cy
//       .get('section:first').children('div[class=bookVote]').eq(0).click()
//       .get('section:first').children('div[class=bookVote]').eq(1).click()
//       .get('section:first').children('div[class=bookVote]').eq(2).click()
//       .get('section:first').children('div[class=bookVote]').eq(3).click()
//       .get('section:first').children('div[class=bookVote]').eq(4).click()
//       .get('button[class=voteCompleteButton]:first').click()
//     cy
//       .get('section').eq(1).children('div[class=bookVote]').eq(0).click()
//       .get('section').eq(1).children('div[class=bookVote]').eq(2).click()
//       .get('section').eq(1).children('div[class=bookVote]').eq(3).click()
//       .get('section').eq(1).children('div[class=bookVote]').eq(4).click()
//       .get('section').eq(1).children('div[class=bookVote]').eq(8).click()
//       .get('button[class=voteCompleteButton]').eq(1).click()
//     cy
//       .get('section:last').children('div[class=bookVote]').eq(2).click()
//       .get('section:last').children('div[class=bookVote]').eq(3).click()
//       .get('section:last').children('div[class=bookVote]').eq(4).click()
//       .get('section:last').children('div[class=bookVote]').eq(5).click()
//       .get('section:last').children('div[class=bookVote]').eq(6).click()
//       .get('button[class=voteCompleteButton]:last').click()
//     cy
//       .get('button[class=finalSubmitButton]').click()
//       .get('h2').should('have.length', 3)
//       .get('h2:first').should('contain', 'THE MIDNIGHT LIBRARY')
//   })

//   it('Should tell users when there are no matching books', () => {
//     cy
//       .get('section:first').children('div[class=bookVote]').eq(0).click()
//       .get('section:first').children('div[class=bookVote]').eq(1).click()
//       .get('button[class=voteCompleteButton]:first').click()
//     cy
//       .get('section').eq(1).children('div[class=bookVote]').eq(0).click()
//       .get('section').eq(1).children('div[class=bookVote]').eq(8).click()
//       .get('button[class=voteCompleteButton]').eq(1).click()
//     cy
//       .get('section:last').children('div[class=bookVote]').eq(2).click()
//       .get('section:last').children('div[class=bookVote]').eq(8).click()
//       .get('button[class=voteCompleteButton]:last').click()
//     cy
//       .get('button[class=finalSubmitButton]').click()
//       .get('h2').should('contain', 'None of your books matched. Try again?')
//   })
// })