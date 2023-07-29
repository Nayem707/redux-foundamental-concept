import React, { useState } from 'react';
import people from '../data/data';

const HigerOrderCom = () => {
  const [users, setUsers] = useState(people);

  const userList = users.filter((user) => {
    return user.catagory === 'C';
  });

  console.log(userList);

  return <div>HigerOrderCom</div>;
};

export default HigerOrderCom;
