import React from 'react';
import './Approval.css';
import UserForm from '../../Components/UserForm/UserForm';

const Approval = ({ users, addUsers }) => {

  if (!users.length) {
    return (
      <section className="userForm">
        <UserForm addUsers={addUsers} />
      </section>
    )
  } else {
    return (
      <h2>wowww...</h2>
    )
  }
}

export default Approval;