import React, { Component } from 'react';
import './UserAmountForm.css';

class UserAmountForm extends Component {
  constructor(props) {
    super();
    this.state = {
      userAmount: '',
    }
  }

  addUserAmount = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  clearInputs = () => {
    this.setState({ userAmount: '' });
  }

  createUsers = (event) => {
    event.preventDefault();
    const users = [];
    for (let i = 0; i < this.state.userAmount; i++) {
      users.push({id: i})
    }
    this.props.addUsers(users)
    this.clearInputs();
  }

  render() {
    return (
      <form>
        <label>How many readers?</label>
        <input 
          type="number" 
          name="userAmount" 
          placeholder="2" 
          value={this.state.userAmount} 
          min="2" 
          onChange={(event) => this.addUserAmount(event)} />
        <button onClick={(event) => this.createUsers(event)}>
          Next
        </button>
      </form>
    );
  }
}

export default UserAmountForm;