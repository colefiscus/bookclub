import React from 'react';
import { Link } from 'react-router-dom';
import './UserVoting.css';

const UserVoting = ({ users, bestSellers, chooseBook }) => {

  const voteBoards = users.map(user => {
    const bookOptions = bestSellers.map(book => {
      return    <div className="bookVote" key={book.book_details[0].primary_isbn13}>
                  <Link to={`details/${book.book_details[0].title}`} className="previewLink" onClick={() => chooseBook(book.book_details[0].primary_isbn13)}>📖</Link> 
                  <button className="voteButton">{book.book_details[0].title}</button>
                </div>
    })
    if (user.id === 0) {
      return  <section className="voteBoard currentBoard" id={user.id} key={user.id}>
                <h2>{user.name}</h2>
                {bookOptions}
                <button className="voteCompleteButton" onClick={() => changeVoteBoard()}>Submit</button>
              </section>     
    } else {
      return  <section className="voteBoard" id={user.id} key={user.id}>
                <h2>{user.name}</h2>
                {bookOptions}
                <button className="voteCompleteButton" onClick={() => changeVoteBoard()}>Submit</button>
              </section>
    }
  });

  const changeVoteBoard = () => {
    const currentBoard = document.querySelector(".currentBoard")
    const nextBoard = document.getElementById(parseInt(currentBoard.id) + 1)
    currentBoard.classList.remove("currentBoard")
    nextBoard.classList.add("currentBoard")
  }

  return (
    <>
      {voteBoards}
    </>
  );
}

export default UserVoting;