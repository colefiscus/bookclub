import React from 'react';
import { Link } from 'react-router-dom';
import './Approval.css';
import UserAmountForm from '../../Components/UserAmountForm/UserAmountForm';
import UserNames from '../../Components/UserNames/UserNames';
import UserVoting from '../../Components/UserVoting/UserVoting';

const Approval = ({ users, usersSet, bestSellers, currentUser, addUsers, updateUsers, setUsers, changeUser, chooseBook, voteForBook, matchBooks }) => {
  if (!users.length) {
    return (
      <main className="userForm">
        <UserAmountForm
          users={users}
          addUsers={addUsers} />
      </main>
    )
  } else if (users.length && usersSet === false) {
    return (
      <main className="userNames">
        <UserNames
          users={users}
          updateUsers={updateUsers}
          setUsers={setUsers} />
      </main>
    )
  } else if (usersSet === true) {
    return (
      <main className="votingScreen">
        <h2 className="stepThree">Step 3: Vote Individually</h2>
        <Link className="outcome" to="/outcome">
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