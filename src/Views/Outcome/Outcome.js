import React from 'react';
import './Outcome.css';
import { Link } from 'react-router-dom';

const Outcome = ({ matchingBooks }) => {
  if (matchingBooks.length) {

    const books = matchingBooks.map(book => {
      return (
        <section key={book.book_details[0].primary_isbn13}>
          <h2>{book.book_details[0].title}</h2>
        </section>
      )
    })

    return (
      <main>
        {books}
        <Link to="/">Go Again!</Link>
      </main>
    )
  }
  else {
    return (
      <main>
        <h2>Dang none of those books matched! Try again?</h2>
        <Link to="/">Back to Home</Link>
      </main>
    )
  }
}

export default Outcome;