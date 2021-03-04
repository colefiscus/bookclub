import React from 'react';
import './Approval.css';

const Approval = ({ users }) => {

  if (!users.length) {
    return (
      <section className="userForm">
        <form>
          <label>How many readers?
            <input />
          </label>
        </form>
      </section>
    )
  }
}

export default Approval;