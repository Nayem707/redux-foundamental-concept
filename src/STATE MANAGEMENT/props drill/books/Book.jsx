import React, { useContext } from 'react';
import { bookContext } from '../../context/bookContex';

const Book = () => {
  const { books, setBooks } = useContext(bookContext);

  return (
    <div>
      {books.map((book) => {
        return (
          <div key={book.id}>
            <p>{book.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Book;
