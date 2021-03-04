import React from 'react';
import './Filter.css';

const Filter = ({ filterBooks }) => {
  
  return (
    <form className="listFilters">
      <div>
        <label>All
          <input 
            name="filter" 
            value="all" 
            type="radio" 
            onClick={(event) => filterBooks(event)} />
        </label>
      </div>
      <div>
        <label>Fiction
          <input 
            name="filter" 
            value="Fiction" 
            type="radio" 
            onClick={(event) => filterBooks(event)} />
        </label>    
      </div>
      <div>
        <label>Non-Fiction
          <input 
            name="filter" 
            value="Nonfiction" 
            type="radio" 
            onClick={(event) => filterBooks(event)} />
        </label> 
      </div>
      <div>
        <label>Miscellaneous
          <input 
            name="filter" 
            value="misc" 
            type="radio" 
            onClick={(event) => filterBooks(event)} />
        </label>
      </div>
      <div>
        <label>Young Adult
          <input 
            name="filter" 
            value="Young Adult" 
            type="radio" 
            onClick={(event) => filterBooks(event)} />
        </label>
      </div>
      <div>
        <label>Kids
          <input 
          name="filter" 
          value="Children" 
          type="radio" 
          onClick={(event) => filterBooks(event)} />
        </label>
      </div>
    </form>
  )
}

export default Filter;