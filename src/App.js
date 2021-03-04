import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import getData from './util';
import Header from './Components/Header/Header';
import Selection from './Views/Selection/Selection';
import Preview from './Views/Preview/Preview';
import Approval from './Views/Approval/Approval';

class App extends Component {
  constructor() {
    super();
    this.state = {
      lists: [],
      filteredLists: [],
      category: "",
      users: []
    }
  }
  
  componentDidMount = () => {
    return getData("https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=obrhAVJmNNtUdhs3RSbGr7Shq6cwxtyH")
      .then(data => this.setState({ lists: data.results }))
  }

  filterBooks = (event) => {
    if (event.target.value === "All") {
      this.setState({ filteredLists: [] })
    } else if (event.target.value === "misc") {
      const filteredBooks = this.state.lists.filter(category => {
        return !category.display_name.includes("Fiction") && !category.display_name.includes("Nonfiction") && !category.display_name.includes("Young Adult") && !category.display_name.includes("Children")
      })
      this.setState({ filteredLists: filteredBooks })
    } else {
      const filteredBooks = this.state.lists.filter(category => {
        return category.display_name.includes(event.target.value)
      })
      this.setState({ filteredLists: filteredBooks })
    }
  }

  chooseCategory = (category) => {
    this.setState({ category: category })
  }

  render() {
    return (
      <>
        <Header />
        <Route 
          exact path="/" 
          render={() => <Selection lists={this.state.lists} 
          filteredLists={this.state.filteredLists} 
          filterBooks={this.filterBooks} 
          chooseCategory={this.chooseCategory} />} />
        <Route 
          exact path="/preview/:category" 
          render={() => <Preview category={this.state.category} />} />
        <Route exact path="/approval" render={() => <Approval users={this.state.users} />} />
      </>
    )
  }
}

export default App;
