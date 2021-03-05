import React, { Component } from 'react';
import './UserNamesForm.css';

class UserNamesForm extends Component {
  constructor() {
    super();
    this.state = {
      names: []
    }
  }

  handleChange = (event) => {
    this.setState({ names: [...this.state.names, {[event.target.id]: [event.target.value]}] })
  }

  createUserNameInputs = (event) => this.props.users.map(user => {
    return  <div key={user.id}>
              <label>User {user.id} Name</label>
              <input required id={user.id} onBlur={(event => this.handleChange(event))} />
            </div>
  })

  updateUsers = (name) => {
    this.props.users.find(user => {
      return user.id
    })
  }

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