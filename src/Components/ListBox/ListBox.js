import React from 'react'
import { Link } from 'react-router-dom';
import './ListBox.css';

const ListBox = ({ lists, filteredLists, chooseCategory }) => {
  
  const makeLinks = (listType) => listType.map(category => {
    return  <article className='categorySelection'>
              <div className='category'>
                <Link 
                  to={`preview/${category.list_name_encoded}`} 
                  key={category.list_name_encoded}
                  onClick={() => chooseCategory(category.list_name_encoded)}>
                    {category.display_name}
                </Link>
              </div>
              <button className='categoryButton'>Select</button>
            </article>
  })
  
  let categories;

  if (filteredLists.length) {
    categories = makeLinks(filteredLists)
  } else if (lists) {
    categories = makeLinks(lists)
  }

  return (
    <section className='listBox'>
      {categories}
    </section>
  )
}

export default ListBox;