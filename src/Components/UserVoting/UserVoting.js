import React from 'react';
import { Link } from 'react-router-dom';
import './UserVoting.css';

const UserVoting = ({ users, bestSellers, currentUser, chooseBook, changeUser, voteForBook }) => {

  const voteBoards = users.map(user => {
    const bookOptions = bestSellers.map(book => {
      return    <div className="bookVote" key={book.book_details[0].primary_isbn13}>
                  <Link to={`details/${book.book_details[0].title}`} className="previewLink" onClick={() => chooseBook(book.book_details[0].primary_isbn13)}>📖</Link> 
                  <button className="voteButton" onClick={() => voteForBook(user.id, book.book_details[0].primary_isbn13)}>{book.book_details[0].title}</button>
                </div>
    })
    if (user.id === currentUser) {
      return  <section className="voteBoard currentBoard" id={user.id + 1} key={user.id}>
                <h2>{user.name}</h2>
                {bookOptions}
                <button className="voteCompleteButton" onClick={() => changeVoteBoard(user.id)}>Submit</button>
                <div></div>
              </section>     
    } else {
      return  <section className="voteBoard" id={user.id + 1} key={user.id}>
                <h2>{user.name}</h2>
                {bookOptions}
                <button className="voteCompleteButton" onClick={() => changeVoteBoard(user.id)}>Submit</button>
                <div className="overlay"></div>
              </section>
    }
  });

  const changeVoteBoard = (id) => {
    changeUser(parseInt(id) + 1)
    const allVoteBoards = document.querySelectorAll(".voteBoard")
    const currentBoard = document.querySelector(".currentBoard")
    const nextBoard = document.getElementById(parseInt(currentBoard.id) + 1)
    if (currentBoard.id < allVoteBoards.length) {
      currentBoard.classList.remove("currentBoard")
      currentBoard.lastChild.classList.add("overlay")
      nextBoard.classList.add("currentBoard")
      nextBoard.lastChild.classList.remove("overlay")
    } else {
      currentBoard.classList.remove("currentBoard")
      currentBoard.lastChild.classList.add("overlay")
      window.scrollTo(0, 0)
      const finalSubmitButton = document.querySelector(".finalSubmitButton")
      finalSubmitButton.classList.remove('hidden')
    }
  }

  return (
    <div className="allVoteBoards">
      {voteBoards}
    </div>
  );
}

export default UserVoting;