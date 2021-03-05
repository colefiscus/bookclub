import React, { Component } from 'react';
import './UserNames.css';

const UserNames = ({ users, updateUsers }) => {
  const UserNameInputs = users.map(user => {
    return  <div key={user.id}>
              <label>User {user.id + 1} Name</label>
              <input 
                required 
                id={user.id} 
                onChange={(event) => updateUsers(event.target.value, user.id)} />
            </div>
  })

  return (
    <form>
      {UserNameInputs}
      <button>BEGIN</button>
    </form>
  )
}

export default UserNames;