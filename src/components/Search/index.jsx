import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function SeachView() {
  const { getTodoItems } = useSelector((state) => state.todo);
  // the value of the search field
  const [searchKeyword, setSearchKeyword] = useState('');
  // the search result
  const [foundUsers, setFoundUsers] = useState(getTodoItems);

  const handleChange = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = getTodoItems.filter((item) => {
        return item.title.toLowerCase().includes(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });

      setFoundUsers(results);
    } else {
      setFoundUsers(getTodoItems);
      // If the text field is empty, show all users
    }
    setSearchKeyword(keyword);
  };

  return (
    <div className='container pt-5'>
      <input
        type='search'
        value={searchKeyword}
        onChange={handleChange}
        className='form-control'
        placeholder='search...'
      />

      <div className='user-list pt-2'>
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((user) => (
            <li key={user.id} className=''>
              <span className=' p-1'>{user.title}</span>
            </li>
          ))
        ) : (
          <h1 className='text-center'>No results found!</h1>
        )}
      </div>
    </div>
  );
}

export default SeachView;
