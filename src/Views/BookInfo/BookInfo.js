import React from 'react';
import './BookInfo.css';

const BookInfo = ({ currentBook, bookDetails }) => {
  console.log(currentBook)
  console.log(bookDetails)
  if (bookDetails) {

    let description;
    if (!bookDetails[1].description) {
      description = "No description available."
    } else if (typeof bookDetails[1].description === 'string') {
      description = bookDetails[1].description
    } else if (bookDetails[1].description.value) {
      description = bookDetails[1].description.value
    }

    let reviews;
    if (bookDetails[1].results.length) {
      reviews = bookDetails[1].results.map(review => {
        return  <div key={review.url}>
                  <p>{review.summary}</p>
                  <p>{review.url}</p>
                </div>
      })
    }

    return (
      <main>
        <p>-------------- currentBook -----------------</p>
        <h2>{currentBook.book_details[0].title}</h2>
        <p>{currentBook.book_details[0].description}</p>
        <p>Publisher - {currentBook.book_details[0].publisher}</p>
        <p>Category - {currentBook.display_name}</p>
        <p>Link - {currentBook.amazon_product_url}</p>
        <p>--------------- bookDetails[0] ----------------</p>
        <h3>{bookDetails[0].subtitle}</h3>
        {bookDetails[0].authors && <p>{bookDetails[0].authors[0].name}</p>}
        <p>{bookDetails[0].number_of_pages}</p>
        <p>{bookDetails[0].publish_date}</p>
        {bookDetails[0].excerpts && <p>{bookDetails[0].excerpts[0].text}</p>}
        {bookDetails[0].cover && <img src={bookDetails[0].cover.large} alt={`Cover of ${currentBook.book_details[0].title}`} />}
        <p>------------------ bookDetails[2] ---------------</p>
        <p>{description}</p>
        <p>------------------ bookDetails[1] ---------------</p>
        <div>
          {reviews}
        </div>
      </main>
    )
  } else {
    return (
      <h2>Loading...</h2>
    )
  }

}

export default BookInfo