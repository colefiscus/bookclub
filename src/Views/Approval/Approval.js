import React from 'react';
import './Approval.css';

const Approval = ({ users }) => {

  if (!users.length) {
    return (
      <section className="userForm">
        <form>
          <label>How many readers?
            <input type="number" min="2"/>
          </label>
        </form>
      </section>
    )
  }
}

export default Approval;