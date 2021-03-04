import React, { Component } from 'react';
import './Selection.css';
import getData from '../../util';
import ListBox from '../../Components/ListBox/ListBox';

class Selection extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
    }
  }

  componentDidMount = () => {
    return getData("https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=obrhAVJmNNtUdhs3RSbGr7Shq6cwxtyH")
      .then(data => this.setState({ list: data.results }))
  }

  render() {
    return (
      <main className="selection">
        <ListBox list={this.state.list}/>
      </main>
    )
  }
}

export default Selection