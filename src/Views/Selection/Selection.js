import React from 'react';
import './Selection.css';
import ListBox from '../../Components/ListBox/ListBox';
import Filter from '../../Components/Filter/Filter';

const Selection = ({ lists, filteredLists, filterBooks, chooseCategory }) => {

  return (
    <main className="selection">
      <h2 className="stepOne">Step 1: Browse Categories</h2>
      <Filter filterBooks={filterBooks}/>
      <ListBox lists={lists} filteredLists={filteredLists} chooseCategory={chooseCategory} />
    </main>
  )
}

export default Selection