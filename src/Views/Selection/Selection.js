import React, { Component } from 'react';
import './Selection.css';
import getData from '../../util';

class Selection extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
    }
  }

  componentDidMount = () => {
    return getData("https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=obrhAVJmNNtUdhs3RSbGr7Shq6cwxtyH")
      .then(data => console.log(data))
  }

  render() {
    return (
      <h1>BOOKCLUB</h1>
    )
  }
}

export default Selection