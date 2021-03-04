import React, { Component } from 'react';
import './App.css';
import getData from './util';
import Selection from './Views/Selection/Selection';
import Header from './Components/Header/Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      lists: [],
      filteredLists: []
    }
  }

  filterBooks(event) {
    if (event.target.value === "misc") {
      const filteredBooks = this.state.lists.filter(category => {
        return !category.display_name.includes("Fiction") && !category.display_name.includes("Nonfiction") && !category.display_name.includes("Young Adult") && !category.display_name.includes("Children")
      })
      this.setState({ filteredLists: filteredBooks })
    } else if (event.target.value) {
      const filteredBooks = this.state.lists.filter(category => {
        return category.display_name.includes(event.target.value)
      })
      this.setState({ filteredLists: filteredBooks })
    } else if (event.target.value === "all") {
      this.setState({ filteredLists: [] })
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
        <Selection lists={this.state.lists} filteredLists={this.state.filteredLists} filterBooks={this.filterBooks} />
      </>
    )
  }
}

export default App;
