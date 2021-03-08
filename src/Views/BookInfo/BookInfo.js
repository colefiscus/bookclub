import React from 'react';
import './BookInfo.css';
import { Link } from 'react-router-dom';

const BookInfo = ({ currentBook, bookDetails, error, removeDetails }) => {
  if (bookDetails) {
    let description;
    if (!bookDetails[1].description) {
      description = "No summary available."
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
        <Link to="/approval" onClick={() => removeDetails()}>Back to Voting</Link>
        <p>-------------- currentBook -----------------</p>
        <h2>{currentBook.book_details[0].title}</h2>
        <p>{currentBook.book_details[0].description}</p>
        <p>Publisher - {currentBook.book_details[0].publisher}</p>
        <p>Category - {currentBook.display_name}</p>
        <p>Link - {currentBook.amazon_product_url}</p>
        <p>--------------- bookDetails[0] ----------------</p>
        <h3>{bookDetails[0].subtitle}</h3>
        {bookDetails[0].authors && <p>By {bookDetails[0].authors[0].name}</p>}
        <p>Number of Pages - {bookDetails[0].number_of_pages}</p>
        <p>Publish Date - {bookDetails[0].publish_date}</p>
        {bookDetails[0].excerpts && <p>First sentence - {bookDetails[0].excerpts[0].text}</p>}
        {bookDetails[0].cover && <img src={bookDetails[0].cover.large} alt={`Cover of ${currentBook.book_details[0].title}`} />}
        <p>------------------ bookDetails[2] ---------------</p>
        <p>{description}</p>
        <p>------------------ bookDetails[1] ---------------</p>
        <div>
          <p>Reviews:</p>
          {reviews}
        </div>
      </main>
    )
  } else if (currentBook && error) {
    return (
        <main>
          <Link to="/approval" onClick={() => removeDetails()}>Back to Voting</Link>
          <h2>{currentBook.book_details[0].title}</h2>
          <p>{currentBook.book_details[0].description}</p>
          <p>Publisher - {currentBook.book_details[0].publisher}</p>
          <p>Category - {currentBook.display_name}</p>
          <p>Link - {currentBook.amazon_product_url}</p>
          <p>So sorry, the rest of the details for this book don't seem to exist yet...</p>
        </main>
    )
  } else {
    return (
      <h2>Loading...</h2>
    )
  }
}

export default BookInfo