import React, { useEffect, useMemo, useState } from 'react';
import Item from './Item';
import './index.css';
import { useSelector } from 'react-redux';

export default function Filter() {
  const [selectedCategory, setSelectedCategory] = useState();
  const { getTodoItems, isLoading, error } = useSelector((state) => state.todo);

  // Function to get filtered list
  function getFilteredList() {
    if (!selectedCategory) {
      return getTodoItems;
    }
    return getTodoItems.filter((item) => item.category === selectedCategory);
  }

  // Avoid duplicate function calls with useMemo
  const filteredList = useMemo(getFilteredList, [
    selectedCategory,
    getTodoItems,
  ]);

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }

  if (isLoading) {
    return <h2 className='text-center p-5'>Loading...</h2>;
  }

  if (error) {
    return <h2 className='text-center p-5'>Somthing wrong!😌</h2>;
  }

  return (
    <div className='container mb-5'>
      <div className='d-flex gap-5 p-3 '>
        <div>Filter by Category:</div>
        <div className=''>
          <select
            name='category-list'
            id='category-list'
            onChange={handleCategoryChange}
          >
            <option value=''>All</option>
            <option value='woman'>Woman</option>
            <option value='children'>Children</option>
            <option value='man'>Man</option>
          </select>
        </div>
      </div>

      <div className='container text-center'>
        <div className='row row-cols-1 row-cols-md-5 g-2'>
          {filteredList.map((element, index) => (
            <Item {...element} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
