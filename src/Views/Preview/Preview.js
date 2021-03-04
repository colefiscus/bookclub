import React, { Component } from 'react';
import getData from '../../util';
import './Preview.css';

class Preview extends Component {
  constructor() {
    super() 
    this.state = {
      bestSellers: []
    }
  }

  componentDidMount() {
    getData(`https://api.nytimes.com/svc/books/v3/lists.json?list=${this.props.category}&api-key=obrhAVJmNNtUdhs3RSbGr7Shq6cwxtyH`)
      .then(data => this.setState({ bestSellers: data.results.splice(0, 10) }))
  }

  render() {
    return (
      <h1>Let's do ittttttt.</h1>
    )
  }
}

export default Preview;