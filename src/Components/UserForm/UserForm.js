import React, { Component } from 'react';
import './UserForm.css';

class UserForm extends Component {
  constructor() {
    super()
    this.state = {
      userAmount: 0,
      names: [],
    }
  }

  render() {
    return (
      <form>
        <label>How many readers?</label>
        <input type="number" min="2"/>
      </form>
    )
  }
}

export default UserForm;