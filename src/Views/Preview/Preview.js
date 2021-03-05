import React from 'react';
import BookPreview from '../../Components/BookPreview/BookPreview';
import './Preview.css';

const Preview = ({ bestSellers }) => {

    return (
      <BookPreview bestSellers={bestSellers} />
    )
  
}

export default Preview;