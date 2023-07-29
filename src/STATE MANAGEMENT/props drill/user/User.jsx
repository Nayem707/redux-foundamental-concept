import React from 'react';

const User = ({ u, handleDeleteUser }) => {
  const { id, name } = u;

  const handleDelete = (id) => {
    handleDeleteUser(id);
  };

  return (
    <article key={id} className='user'>
      <p>{id}</p>
      <h2>{name}</h2>
      <button
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete
      </button>
    </article>
  );
};

export default User;
