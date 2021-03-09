import React from 'react';
import './Outcome.css';
import { Link } from 'react-router-dom';

const Outcome = ({ matchingBooks, resetState }) => {
  if (matchingBooks.length) {

    const books = matchingBooks.map(book => {
      return (
        <h2 key={book.book_details[0].primary_isbn13}>{book.book_details[0].title}</h2>
      )
    })

    return (
      <main className="votingOutcome">
        <h1>Matching Books:</h1>
        {books}
        <Link className="restartLink" to="/" onClick={() => resetState()}>Go Again!</Link>
      </main>
    )
  }
  else {
    return (
      <main className="votingOutcome">
        <h2>None of your books matched. Try again?</h2>
        <Link to="/" onClick={() => resetState()}>Start Again</Link>
      </main>
    )
  }
}

export default Outcome;