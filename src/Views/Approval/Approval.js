import React from 'react';
import './Approval.css';
import UserAmountForm from '../../Components/UserAmountForm/UserAmountForm';
import UserNames from '../../Components/UserNames/UserNames';
import UserVoting from '../../Components/UserVoting/UserVoting';

const Approval = ({ users, usersSet, bestSellers, addUsers, updateUsers, setUsers }) => {
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
      <main className="allVoteBoards">
        <UserVoting users={users} bestSellers={bestSellers} />
      </main>
    )
  }
}

export default Approval;