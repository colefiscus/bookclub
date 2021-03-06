import React from 'react';
import './BookInfo.css';

const BookInfo = ({ currentBook, bookDetails }) => {
  console.log(currentBook)
  console.log(bookDetails)
  if (bookDetails) {

    let description;

    if (!bookDetails[2].description) {
      description = "No description available."
    } else if (typeof bookDetails[2].description === 'string') {
      description = bookDetails[2].description
    } else if (bookDetails[2].description.value) {
      description = bookDetails[2].description.value
    }

    return (
      <main>
        <p>-------------- currentBook -----------------</p>
        <h2>{currentBook.book_details[0].title}</h2>
        <p>{currentBook.book_details[0].description}</p>
        <p>Publisher - {currentBook.book_details[0].publisher}</p>
        <p>Category - {currentBook.display_name}</p>
        <p>Link - {currentBook.amazon_product_url}</p>
        <p>Reviews - Need another API call from NYT</p>
        <p>--------------- bookDetails[0] ----------------</p>
        <h3>{bookDetails[0].subtitle}</h3>
        <p>{bookDetails[0].authors[0].name}</p>
        <p>{bookDetails[0].number_of_pages}</p>
        <p>{bookDetails[0].publish_date}</p>
        {bookDetails[0].excerpts && <p>{bookDetails[0].excerpts[0].text}</p>}
        {bookDetails[0].cover && <img src={bookDetails[0].cover.large} />}
        <p>------------------ bookDetails[2] ---------------</p>
        <p>{description}</p>
      </main>
    )
  } else {
    return (
      <h2>Loading...</h2>
    )
  }

}

export default BookInfo