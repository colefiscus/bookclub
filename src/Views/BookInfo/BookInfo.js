import React from 'react';
import './BookInfo.css';

const BookInfo = ({ bookDetailsToRender }) => {
  return (
    <main>
      <h2>{bookDetailsToRender.book_details[0].title}</h2>
    </main>
  )
}

export default BookInfo