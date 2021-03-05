import React from 'react';
import './Approval.css';
import UserAmountForm from '../../Components/UserAmountForm/UserAmountForm';

const Approval = ({ users, addUsers }) => {

  if (!users.length) {
    return (
      <section className="userForm">
        <UserAmountForm users={users} addUsers={addUsers} />
      </section>
    )
  } else {

    const userNameInputs = users.map(user => {
      return  <div key={user.id}>
                <label>User {user.id} Name</label>
                <input />
              </div>
    })

    return (
      <section>
        {userNameInputs}
        <button>Begin</button>
      </section>
    )
  }
}

export default Approval;