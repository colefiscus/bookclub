import React, { Component } from 'react';
import './UserNamesForm.css';

class UserNamesForm extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    }
  }

  handleChange = (event, id) => {
    this.setState( {name: event.target.value} )
    this.props.updateUsers(event.target.value, id)
  }

  createUserNameInputs = () => this.props.users.map(user => {
    return  <div key={user.id}>
              <label>User {user.id + 1} Name</label>
              <input required id={user.id} onKeyUp={(event) => this.handleChange(event, user.id)} />
            </div>
  })

  // updateUsers = (name) => {
  //   this.props.users.find(user => {
  //     return user.id
  //   })
  // }

  render() {
    return (
      <form>
        {this.createUserNameInputs()}
        <button>BEGIN</button>
      </form>
    )  
  }
}

export default UserNamesForm;