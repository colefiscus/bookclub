import React from 'react';
import './Approval.css';
import UserForm from '../../Components/UserForm/UserForm';

const Approval = ({ users }) => {

  if (!users.length) {
    return (
      <section className="userForm">
        <UserForm />
      </section>
    )
  }
}

export default Approval;