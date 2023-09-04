import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
  const { getTodoItems } = useSelector((state) => state.todo);
  const paramsId = useParams();
  const isInHere = getTodoItems.filter((item) => item.id === paramsId.id);

  return (
    <div>
      {isInHere.map((i) => {
        return (
          <div key={i.id}>
            <p>{i.id}</p>
            <h5>{i.title}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default ItemDetails;
