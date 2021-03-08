import React from 'react';
import './Outcome.css';

const Outcome = ({ matchingBooks }) => {
  if (matchingBooks.length) {
    return (
      <h2>yeehawwww we did it!</h2>
    )
  }
  else {
    <h2>Dang none of those books matched! Try again?</h2>
  }
}

export default Outcome;