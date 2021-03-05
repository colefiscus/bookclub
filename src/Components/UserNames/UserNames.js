import React from 'react';
import './UserNames.css';

const UserNames = ({ users, updateUsers, setUsers }) => {
  const UserNameInputs = users.map(user => {
    return  <div key={user.id}>
              <label>User {user.id + 1} Name</label>
              <input 
                required 
                id={user.id} 
                onChange={(event) => updateUsers(event.target.value, user.id)} />
            </div>
  })

  const setUserNames = (event) => {
    event.preventDefault()
    setUsers()
  }

  return (
    <form>
      {UserNameInputs}
      <button onClick={(event) => setUserNames(event)}>BEGIN</button>
    </form>
  )
}

export default UserNames;