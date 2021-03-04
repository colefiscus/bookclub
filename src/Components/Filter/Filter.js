import React from 'react';
import './Filter.css';

const Filter = ({ filterBooks }) => {
  
  return (
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
  )
}

export default Filter;