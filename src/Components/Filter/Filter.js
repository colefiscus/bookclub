import React from 'react';
import './Filter.css';

const Filter = ({ filterBooks }) => {
  
  return (
    <form className="listFilters">
      <div>
        <label>
          <input 
            name="filter" 
            value="All" 
            type="radio" 
            onClick={(event) => filterBooks(event)} />
          All
        </label>
      </div>
      <div>
        <label>
          <input 
            name="filter" 
            value="Fiction" 
            type="radio" 
            onClick={(event) => filterBooks(event)} />
          Fiction
        </label>    
      </div>
      <div>
        <label>
          <input 
            name="filter" 
            value="Nonfiction" 
            type="radio" 
            onClick={(event) => filterBooks(event)} />
          Non-Fiction
        </label> 
      </div>
      <div>
        <label>
          <input 
            name="filter" 
            value="Misc" 
            type="radio" 
            onClick={(event) => filterBooks(event)} />
          Miscellaneous
        </label>
      </div>
      <div>
        <label>
          <input 
            name="filter" 
            value="Young Adult" 
            type="radio" 
            onClick={(event) => filterBooks(event)} />
          Young Adult
        </label>
      </div>
      <div>
        <label>
          <input 
            name="filter" 
            value="Children" 
            type="radio" 
            onClick={(event) => filterBooks(event)} />
          Children
        </label>
      </div>
    </form>
  )
}

export default Filter;