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
      users: [],
      lists: [],
      category: "",
      bookDetails: "",
      bestSellers: [],
      usersSet: false,
      filteredLists: []
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
    getData(`https://openlibrary.org/isbn/${isbn}.json`)
      .then(data => {
        const apiData = getData(`https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`)
        const reviews = getData(`https://api.nytimes.com/svc/books/v3/reviews.json?isbn=${isbn}&api-key=obrhAVJmNNtUdhs3RSbGr7Shq6cwxtyH`)
        const workData = getData(`https://pacific-caverns-07550.herokuapp.com/https://openlibrary.org${data.works[0].key}.json`)
        Promise.all([apiData, reviews, workData])
          .then((details) => this.setState({ bookDetails: [details[0][`ISBN:${isbn}`], details[1], details[2]] }))
          .catch(error => console.log(error))
      })
  }

  addUsers = (users) => {
    this.setState({ users: users })
  }
  
  setUsers = () => {
    this.setState({ usersSet: true })
  }

  updateUsers = (name, id) => {
    const users = [...this.state.users]
    const user = {...users[id]}
    user.name = name
    users[id] = user
    this.setState({ users: users })
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
                          setUsers={this.setUsers} 
                          chooseBook={this.chooseBook} /> } />
        <Route
          exact path="/details/:title"
          render={({ match }) => {
            const { title } = match.params;
            const bookDetailsToRender = this.state.bestSellers.find(book => {
              return book.book_details[0].title === title
            })
            return <BookInfo currentBook={bookDetailsToRender} bookDetails={this.state.bookDetails} /> } }/>
      </>
    )
  }
}

export default App;
