import React from 'react'
import { Link } from 'react-router-dom';
import './ListBox.css';

const ListBox = ({ lists, filteredLists }) => {

  let categories;

  const makeLinks = (listType) => listType.map(category => {
    return <Link className='category' key={category}>{category.display_name}</Link>
  })

  if (filteredLists.length) {
    categories = makeLinks(filteredLists)
  } else if (lists) {
    categories = makeLinks(lists)
  }

  console.log(lists, filteredLists)

  return (
    <section className='listBox'>
      {categories}
    </section>
  )
}

export default ListBox;