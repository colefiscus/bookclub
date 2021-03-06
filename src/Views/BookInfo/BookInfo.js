import React from 'react';
import './BookInfo.css';

const BookInfo = ({ currentBook, bookDetails }) => {
  console.log(currentBook)
  console.log(bookDetails)
  if (bookDetails) {

    

    return (
      <main>
        <p>-------------- currentBook -----------------</p>
        <h2>{currentBook.book_details[0].title}</h2>
        <p>Publisher - {currentBook.book_details[0].publisher}</p>
        <p>Category - {currentBook.display_name}</p>
        <p>Link - {currentBook.amazon_product_url}</p>
        <p>Reviews - Need another API call from NYT</p>
        <p>--------------- bookDetails[0] ----------------</p>
        <h3>{bookDetails.api.subtitle}</h3>
        <p>{bookDetails.api.authors[0].name}</p>
        <p>{bookDetails.api.number_of_pages}</p>
        <p>{bookDetails.api.publish_date}</p>
        {bookDetails.api.excerpts && <p>{bookDetails.api.excerpts[0].text}</p>}
        {bookDetails.api.cover && <img src={bookDetails.api.cover.large} />}
        <p>------------------ bookDetails[2] ---------------</p>
        <p>{bookDetails.works.description}</p>
      </main>
    )
  } else {
    return (
      <h2>Loading...</h2>
    )
  }

}

export default BookInfo