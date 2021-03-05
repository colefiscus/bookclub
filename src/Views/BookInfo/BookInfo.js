import React from 'react';
import './BookInfo.css';

const BookInfo = ({ bookDetails }) => {
  return (
    <main>
      <h2>{bookDetails.book_details[0].title}</h2>
    </main>
  )
}

export default BookInfo