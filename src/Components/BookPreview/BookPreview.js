import React from 'react';
import './BookPreview.css';

const BookPreview = ({ bestSellers }) => {

  if (bestSellers.length) {
    const categoryName = bestSellers[0].display_name
    
    const bookPreviews = bestSellers.map(book => {
      return <article className="bookPreview">
             <h3>{book.book_details[0].title}</h3>
             <p>by {book.book_details[0].author}</p>
             <p>{book.book_details[0].description}</p>
             <p>Weeks on New York Times Bestseller List: {book.weeks_on_list}</p>
             <p>Rank Last Week: {book.rank_last_week}</p>
           </article>
    })
  
    return (
      <section className="allBookPreviews">
        <h2 className="categoryName">{categoryName}</h2>
        {bookPreviews}
      </section>
    )
  } else {
    return (
      <h2>Loading...</h2>
    )
  }
}

export default BookPreview;