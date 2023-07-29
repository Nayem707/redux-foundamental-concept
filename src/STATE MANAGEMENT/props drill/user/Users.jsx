import React, { useContext } from 'react';
import { UserContext } from '../context/userContex';
import User from './User';

const Users = ({ users, handleDeleteUser }) => {
  // const { users } = useContext(UserContext);
  return (
    <section className='user'>
      {users.map((use) => {
        return (
          <User key={use.id} use={use} handleDeleteUser={handleDeleteUser} />
        );
      })}
    </section>
  );
};

export default Users;
