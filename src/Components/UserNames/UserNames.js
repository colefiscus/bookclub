import React from 'react';
import './UserNames.css';

const UserNames = ({ users, updateUsers, setUsers }) => {
  const userNameInputs = users.map(user => {
    return  <div className="nameInputLabel" key={user.id}>
              <label className="nameLabel">User {user.id + 1} Name</label>
              <input 
                required
                className="nameInput" 
                id={user.id} 
                onChange={(event) => updateUsers(event.target.value, user.id)} />
            </div>
  })

  const setUserNames = (event) => {
    event.preventDefault()
    setUsers()
  }

  return (
    <form className="userNamesForm" onSubmit={(event) => setUserNames(event)}>
      {userNameInputs}
      <button>SUBMIT</button>
    </form>
  )
}

export default UserNames;