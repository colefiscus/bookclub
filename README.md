# BookClub

## Overview

Visit the deployed site [here](https://bookclubbuddy.herokuapp.com/).

BookClub is a React application built by [Cole Fiscus](https://github.com/colefiscus) for the [Turing](turing.io) School of Software and Design. The developer had less than one week to build a narrowly focused app while incorporating React, Router, Cypress, and async JavaScript.

The end product is a collaborative book-selection tool. A user is greeted with a list of categories (e.g. "Paperback Nonfiction") which are taken from the [New York Times Books API](https://developer.nytimes.com/docs/books-product/1/overview).
From here users will be added, users can select specific books to see more details, users will vote individually on which books they are interested in reading, and finally, after all users in a group have voted, matching books (or not) will be displayed to the users.

For more detailed instructions on additional features, see below.

## How to Use and/or Contribute

To add more features to this project, or to simply view the code in action...

1. Clone this repo (or first fork it and then clone) using `git clone [THIS REPO'S SSH KEY] [OPTIONAL DIRECTORY NAME]` inside of your terminal.  
2. `cd` into that directory.  
3. Install any necessary dependencies using `npm install`.
4. Enter `npm start` to run the app on a local server or open the code in your text editor.  
5. The app should open automatically, but you can also navigate to `http://localhost:3000/` to view the app as well.
6. In order to run the Cypress testing suite, enter `npm run cypress` from the project directory.

## Additional Features

#### For Users
- On page load there is a filter bar which can be used to sort through the long list of available categories of books from which to choose from.
- A user can click on a category and be shown a list of the top 10 books that week according to the NYT Bestsellers Lists, along with some details about each book.
- A user can then select a category of books to move forward with - they will be prompted with 2 separate forms. One to say how many users will be using the app, and a second to assign names to each user.
- When arriving at the 'voting boards', each user will have a chance to vote on their own 'board'. Inside the 'boards' are buttons to click in order to vote for a book, and preview links that will lead a user to a new page showing expanded details about a specific book.
- Included in the details are a shopping link to buy the book online, and sometimes external links to reviews from the NYT about the book.
- After each user has voted, a "Final Submit" button will appear and a user need only click it to reveal which, if any, books all users voted interest in. If no books matched, they are also notified of that. In either case, users are given a link to return to the start to begin again if they wish.

#### For Devs
- A full testing suite using Cypress.io, which incorporates Mocha and Chai, that tests user flows.
    - Currently, there is one test in `routes_spec.js` that seems to randomly fail and the problem has yet to be identified. The test does pass when performed by itself.

## App in Action
#### Browse Categories

![Categories](https://media.giphy.com/media/YapIv4cv80QE9woPP9/giphy.gif)

#### User Input

![User Input](https://media.giphy.com/media/XDNAHNXu2Qe2yowhBS/giphy.gif)

#### Voting

![Voting](https://media.giphy.com/media/aDyA4X7GVqhEsAshn2/giphy.gif)

#### Book Details

![Book Details](https://media.giphy.com/media/V8zXzihqdlXbP3d5eF/giphy.gif)

#### Match Books

![Match Books](https://media.giphy.com/media/vMIm64AEKnhmzcdMpD/giphy.gif)

## Current Issues

- Currently the app is not fully responsive - this is item one on the agenda.
- The overall styling of the app is basic right now and is needing some upgrades.
- Router is having difficulties when navigating between previews and the book details pages, especially when using the browser back button.
- There should be some options for users to return to previous screens more easily in case of mistakes.
   
## Future Iterations

For future iterations, the developer hopes to make a back-end server along with user authentication to allow users to sign in and possibly be able to complete the app function using multiple devices.

Another future feature is a countdown timer after the voting has completed in the case of multiple matching books. This app is suppossed to help indecisive book groups; a timer may be needed for urgency.

## Project Wins / Challenges

#### Wins

- Heavy logic successfully employed.
- Multiple fetch calls to multiple endpoints utilized effectively.
- Found workaround using proxy server to fetch data.
- Biggest app built so far.
- Effective UX, in my opinion.

#### Challenges

- Testing Router with Cypress, am still unable to figure out failing test.
- Navigating unorganized/messy data.
- Figuring out logic for 'voting boards', especially when user leaves then returns from book details.

### Links
The link to the spec sheet that guided this project: [Spec](https://frontend.turing.io/projects/module-3/niche-audience.html)

The link to the New York Times Books API: [API](https://developer.nytimes.com/docs/books-product/1/overview)
The link to the OpenLibrary API: [API](https://openlibrary.org/developers/api)

The link to our initial wireframes and design inspiration: [Wireframe](https://miro.com/app/board/o9J_lRFh4U0=/)
