import React from 'react';
import './UserVoting.css';

const UserVoting = ({ users, category }) => {

  const voteBoards = users.map(user => {
    return <h3>Your turn, {user.name}</h3>
  });

  return (
    <>
      {voteBoards}
    </>
  );
}

export default UserVoting;