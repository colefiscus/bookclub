import React, { Component } from 'react';
import './App.css';
import getData from './util';
import Selection from './Views/Selection/Selection';
import Header from './Components/Header/Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      lists: []
    }
  }

  componentDidMount = () => {
    return getData("https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=obrhAVJmNNtUdhs3RSbGr7Shq6cwxtyH")
      .then(data => this.setState({ lists: data.results }))
  }

  render() {
    return (
      <>
        <Header />
        <Selection lists={this.state.lists}/>
      </>
    )
  }
}

export default App;
