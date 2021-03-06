import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import getData from './util';
import Header from './Components/Header/Header';
import Selection from './Views/Selection/Selection';
import Preview from './Views/Preview/Preview';
import Approval from './Views/Approval/Approval';
import BookInfo from './Views/BookInfo/BookInfo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      lists: [],
      filteredLists: [],
      category: "",
      bestSellers: [],
      users: [],
      usersSet: false
    }
  }
  
  componentDidMount = () => {
    return getData("https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=obrhAVJmNNtUdhs3RSbGr7Shq6cwxtyH")
      .then(data => this.setState({ lists: data.results }))
  }

  filterBooks = (event) => {
    if (event.target.value === "All") {
      this.setState({ filteredLists: [] })
    } else if (event.target.value === "Misc") {
      const filteredBooks = this.state.lists.filter(category => {
        return !category.display_name.includes("Fiction") 
            && !category.display_name.includes("Nonfiction") 
            && !category.display_name.includes("Young Adult") 
            && !category.display_name.includes("Children")
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
    getData(`https://api.nytimes.com/svc/books/v3/lists.json?list=${category}&api-key=obrhAVJmNNtUdhs3RSbGr7Shq6cwxtyH`)
      .then(data => this.setState({ bestSellers: data.results.splice(0, 10), category: category }))
    this.setState({ category: category })
  }

  chooseBook = (isbn) => {
    const publisherDetails = getData(`https://reststop.randomhouse.com/resources/titles/${isbn}/`);
    const coverImage = getData(`http://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`);
    
  }

  addUsers = (users) => {
    this.setState({ users: users })
  }

  updateUsers = (name, id) => {
    const users = [...this.state.users]
    const user = {...users[id]}
    user.name = name
    users[id] = user
    this.setState({ users: users })
  }

  setUsers = () => {
    this.setState({ usersSet: true })
  }

  render() {
    return (
      <>
        <Header />
        <Route
          exact path="/" 
          render={() => <Selection
                          lists={this.state.lists}
                          filteredLists={this.state.filteredLists}
                          filterBooks={this.filterBooks}
                          chooseCategory={this.chooseCategory} /> } />
        <Route
          exact path="/preview/:category" 
          render={() => <Preview
                          bestSellers={this.state.bestSellers} /> } /> 
        <Route
          exact path="/approval"
          render={() => <Approval
                          users={this.state.users}
                          usersSet={this.state.usersSet}
                          bestSellers={this.state.bestSellers}
                          addUsers={this.addUsers}
                          updateUsers={this.updateUsers}
                          setUsers={this.setUsers} /> } />
        <Route
          exact path="/details/:title"
          render={({ match }) => {
            const { title } = match.params;
            const bookDetailsToRender = this.state.bestSellers.find(book => {
              return book.book_details[0].title === title
            })
            return <BookInfo bookDetails={bookDetailsToRender} /> } }/>
      </>
    )
  }
}

export default App;
