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
        <h2 className="stepOne">Step 1: Pick a Category</h2>
        <form className="listFilters">
          <div>
            <label for="kids">Kids</label>
            <input name="kids" type="checkbox" />
          </div>
          <div>
            <label for="youngAdult">Young Adult</label>
            <input name="youngAdult" type="checkbox" />
          </div>
          <div>
            <label for="fiction">Fiction</label>
            <input name="fiction" type="checkbox" />
          </div>
          <div>
            <label for="nonFiction">Non-Fiction</label>
            <input name="nonFiction" type="checkbox" />
          </div>
        </form>
        <ListBox list={this.state.list}/>
      </main>
    )
  }
}

export default Selection