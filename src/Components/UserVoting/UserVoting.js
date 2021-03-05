import React from 'react';
import './UserVoting.css';

const UserVoting = ({ users, bestSellers }) => {

  const voteBoards = users.map(user => {
    const bookOptions = bestSellers.map(book => {
      return    <div className="bookVote">
                  <button className="previewButton">📖</button> 
                  <button className="voteButton">{book.book_details[0].title}</button>
                </div>
    })
    return  <section className="voteBoard">
              <h2>{user.name}</h2>
              {bookOptions}
            </section>
           
  });

  return (
    <>
      {voteBoards}
    </>
  );
}

export default UserVoting;