import React, { Component } from 'react';
import './Selection.css';
import getData from '../../util';
import ListBox from '../../Components/ListBox/ListBox';

class Selection extends Component {
  constructor() {
    super();
    this.state = {
      lists: [],
      filteredLists: [],
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
      <main className="selection">
        <h2 className="stepOne">Step 1: Pick a Category</h2>
        <form className="listFilters">
        <div>
            <label htmlFor="all">All</label>
            <input name="filter" value="all" type="radio" onClick={(event) => this.filterBooks(event)} />
          </div>
          <div>
            <label htmlFor="fiction">Fiction</label>
            <input name="filter" value="Fiction" type="radio" onClick={(event) => this.filterBooks(event)} />
          </div>
          <div>
            <label htmlFor="nonFiction">Non-Fiction</label>
            <input name="filter" value="Nonfiction" type="radio" onClick={(event) => this.filterBooks(event)} />
          </div>
          <div>
            <label htmlFor="misc">Miscellaneous</label>
            <input name="filter" value="misc" type="radio" onClick={(event) => this.filterBooks(event)} />
          </div>
          <div>
            <label htmlFor="youngAdult">Young Adult</label>
            <input name="filter" value="Young Adult" type="radio" onClick={(event) => this.filterBooks(event)} />
          </div>
          <div>
            <label htmlFor="kids">Kids</label>
            <input name="filter" value="Children" type="radio" onClick={(event) => this.filterBooks(event)} />
          </div>
        </form>
        <ListBox lists={this.state.lists} filteredLists={this.state.filteredLists}/>
      </main>
    )
  }
}

export default Selection