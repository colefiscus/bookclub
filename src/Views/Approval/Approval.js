import React from 'react';
import { Link } from 'react-router-dom';
import './Approval.css';
import UserAmountForm from '../../Components/UserAmountForm/UserAmountForm';
import UserNames from '../../Components/UserNames/UserNames';
import UserVoting from '../../Components/UserVoting/UserVoting';

const Approval = ({ users, usersSet, bestSellers, currentUser, addUsers, updateUsers, setUsers, changeUser, chooseBook, voteForBook, matchBooks }) => {
  if (!users.length) {
    return (
      <section className="userForm">
        <UserAmountForm
          users={users}
          addUsers={addUsers} />
      </section>
    )
  } else if (users.length && usersSet === false) {
    return (
      <section>
        <UserNames
          users={users}
          updateUsers={updateUsers}
          setUsers={setUsers} />
      </section>
    )
  } else if (usersSet === true) {
    return (
      <main className="votingScreen">
        <Link to="/outcome">
          <button 
            className="finalSubmitButton hidden" 
            onClick={() => matchBooks()}>
              FINAL SUBMIT
          </button>
        </Link>
        <UserVoting users={users} bestSellers={bestSellers} currentUser={currentUser} chooseBook={chooseBook} changeUser={changeUser} voteForBook={voteForBook} />
      </main>
    )
  }
}

export default Approval;