import React from 'react';
import './Approval.css';
import UserAmountForm from '../../Components/UserAmountForm/UserAmountForm';
import UserNamesForm from '../../Components/UserNamesForm/UserNamesForm';

const Approval = ({ users, addUsers }) => {

  if (!users.length) {
    return (
      <section className="userForm">
        <UserAmountForm users={users} addUsers={addUsers} />
      </section>
    )
  } else {

    return (
      <section>
        <UserNamesForm users={users} />
      </section>
    )
  }
}

export default Approval;