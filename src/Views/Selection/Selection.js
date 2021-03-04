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

  filterBooks(event) {
    const filteredBooks = this.state.list.filter(category => {
      return category.display_name.includes(event.target.value)
    })
    this.setState({ list: filteredBooks })
  }

  componentDidMount = () => {
    return getData("https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=obrhAVJmNNtUdhs3RSbGr7Shq6cwxtyH")
      .then(data => this.setState({ list: data.results }))
  }

  render() {
    return (
      <main className="selection">
        <h2 className="stepOne">Step 1: Pick a Category</h2>
        <form className="listFilters">
          <div>
            <label htmlFor="all">All</label>
            <input name="all" value="*" type="radio" onClick={(event) => this.filterBooks(event)} />
          </div>
          <div>
            <label htmlFor="kids">Kids</label>
            <input name="kids" value="Children" type="radio" onClick={(event) => this.filterBooks(event)} />
          </div>
          <div>
            <label htmlFor="youngAdult">Young Adult</label>
            <input name="youngAdult" value="Young Adult" type="radio" onClick={(event) => this.filterBooks(event)} />
          </div>
          <div>
            <label htmlFor="fiction">Fiction</label>
            <input name="fiction" value="Fiction" type="radio" onClick={(event) => this.filterBooks(event)} />
          </div>
          <div>
            <label htmlFor="nonFiction">Non-Fiction</label>
            <input name="nonFiction" value="Nonfiction" type="radio" onClick={(event) => this.filterBooks(event)} />
          </div>
        </form>
        <ListBox list={this.state.list}/>
      </main>
    )
  }
}

export default Selection