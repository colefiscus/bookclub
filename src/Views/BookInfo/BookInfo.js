import React from 'react';
import './BookInfo.css';
import { Link } from 'react-router-dom';

const BookInfo = ({ currentBook, bookDetails, secondaryError, removeDetails }) => {
  if (bookDetails) {
    let description;
    if (!bookDetails[2].description) {
      description = "No summary available."
    } else if (typeof bookDetails[2].description === 'string') {
      description = bookDetails[2].description
    } else if (bookDetails[2].description.value) {
      description = bookDetails[2].description.value
    }

    let reviews;
    if (bookDetails[1].results.length) {
      reviews = bookDetails[1].results.map(review => {
        return  <div key={review.url}>
                  <p>{review.summary}</p>
                  <a className="nytReview" href={review.url}>NYT Link</a>
                </div>
      })
    }

    return (
      <main className="bookDetails">
        <section className="bookDetailsText">
          <h2>{currentBook.book_details[0].title}</h2>
          {bookDetails[0].subtitle && <h3>{bookDetails[0].subtitle}</h3>}
          {bookDetails[0].authors && <p>By {bookDetails[0].authors[0].name}</p>}
          <p>{currentBook.book_details[0].description}</p>
          <p>Publisher - {currentBook.book_details[0].publisher}</p>
          <p>Category - {currentBook.display_name}</p>
          <p>Link - <a href={currentBook.amazon_product_url}>amazon.com</a></p>
          <p>Number of Pages - {bookDetails[0].number_of_pages}</p>
          <p>Publish Date - {bookDetails[0].publish_date}</p>
          {bookDetails[0].excerpts && <p>First sentence - {bookDetails[0].excerpts[0].text}</p>}
          <p>{description}</p>
          <p>Reviews:</p>
          <div>
            {reviews}
          </div>
        </section>
        <section className="bookCoverAndLink">
          <Link 
            className="toVotingLink" 
            to="/approval" 
            onClick={() => removeDetails()}>
              Back to Voting
          </Link>
          {bookDetails[0].cover && 
          <img 
            className="bookCover" 
            src={bookDetails[0].cover.large} 
            alt={`Cover of ${currentBook.book_details[0].title}`} />}
          </section>
      </main>
    )
  } else if (currentBook && secondaryError) {
    return (
        <main className="justCurrentBook">
          <Link 
            className="toVotingLink" 
            to="/approval" 
            onClick={() => removeDetails()}>
              Back to Voting
          </Link>
          <h2>{currentBook.book_details[0].title}</h2>
          <p>{currentBook.book_details[0].description}</p>
          <p>Publisher - {currentBook.book_details[0].publisher}</p>
          <p>Category - {currentBook.display_name}</p>
          <p>Link - <a href={currentBook.amazon_product_url}>amazon.com</a></p>
          <p>So sorry, the rest of the details for this book don't seem to exist yet...</p>
        </main>
    )
  } else {
    return (
      <h2 className="loading">Loading...</h2>
    )
  }
}

export default BookInfo