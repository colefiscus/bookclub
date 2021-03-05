import React from 'react';
import './Approval.css';
import UserAmountForm from '../../Components/UserAmountForm/UserAmountForm';
import UserNames from '../../Components/UserNames/UserNames';

const Approval = ({ users, addUsers, updateUsers }) => {
  if (!users.length) {
    return (
      <section className="userForm">
        <UserAmountForm 
          users={users} 
          addUsers={addUsers} />
      </section>
    )
  } else {
    return (
      <section>
        <UserNames 
          users={users} 
          updateUsers={updateUsers} />
      </section>
    )
  }
}

export default Approval;