import React from 'react';
import './BookPreview.css';
import { Link } from 'react-router-dom';

const BookPreview = ({ bestSellers }) => {

  if (bestSellers.length) {
    const categoryName = bestSellers[0].display_name;
    const bookPreviews = bestSellers.map(book => {
      return  <section className="bookPreviewRank" key={book.book_details[0].primary_isbn13}>
                <aside className="bookRank">
                  <p>#{book.rank}</p>
                </aside>
                <article className="bookPreview">
                  <h3>{book.book_details[0].title}</h3>
                  <p>by {book.book_details[0].author}</p>
                  <p>{book.book_details[0].description}</p>
                  <p>Weeks on New York Times Bestseller List: {book.weeks_on_list}</p>
                  <p>Rank Last Week: {book.rank_last_week}</p>
                </article>
              </section>
    });
  
    return (
      <main className="allBookPreviews">
        <div className="previewLabels">
          <h2>Rank</h2>
          <h2 className="categoryName">{categoryName}</h2>
          <Link to="/">Back to Home</Link>
        </div>
        {bookPreviews}
      </main>
    );
  } else {
    return (
      <h2 className="loading">Loading...</h2>
    );
  }
}

export default BookPreview;