import React from 'react';
import './Approval.css';
import UserForm from '../../Components/UserForm/UserForm';

const Approval = ({ users, addUsers }) => {

  if (!users.length) {
    return (
      <section className="userForm">
        <UserForm users={users} addUsers={addUsers} />
      </section>
    )
  } else {

    const userNameInputs = users.map(user => {
      return <label>User #{user.id}</label>
    })

    return (
      <section>
        {userNameInputs}
      </section>
    )
  }
}

export default Approval;