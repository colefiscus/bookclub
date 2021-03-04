import React from 'react'
import { Link } from 'react-router-dom';
import './ListBox.css';

const ListBox = ({ list }) => {

  const categories = list.map(category => {
    return <Link className='category'>{category.display_name}</Link>
  })

  return (
    <section className='listBox'>
      {categories}
    </section>
  )
}

export default ListBox;