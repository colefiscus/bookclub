import React from 'react';
import './Selection.css';
import ListBox from '../../Components/ListBox/ListBox';
import Filter from '../../Components/Filter/Filter';

const Selection = ({ lists, filteredLists, filterBooks }) => {

  return (
    <main className="selection">
      <h2 className="stepOne">Step 1: Pick a Category</h2>
      <Filter filterBooks={filterBooks}/>
      <ListBox lists={this.state.lists} filteredLists={this.state.filteredLists}/>
    </main>
  )
}

export default Selection