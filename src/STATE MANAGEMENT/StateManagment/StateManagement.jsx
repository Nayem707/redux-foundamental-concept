import React, { useState } from 'react';

const books = [
  {
    id: 1,
    name: 'javascript',
    price: 150,
  },
  {
    id: 2,
    name: 'typescript',
    price: 150,
  },
];

const ModalText = ({ modalText }) => {
  return <p>{modalText}</p>;
};

const StateManagement = () => {
  const [book, setBook] = useState(books);
  const [booksName, setBooksName] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalText, setModalText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setBook((prev) => {
      const NewBooks = { id: new Date().getTime().toString(), name: booksName };
      return [...prev, NewBooks];
    });

    setBooksName('');
    setModalOpen(true);
    setModalText('book is Added!');
  };

  const handleChange = (e) => {
    setBooksName(e.target.value);
  };
  //my name is nayem islam
  return (
    <div>
      <h4>Book list 2</h4>
      <form onSubmit={handleSubmit}>
        <input type='text' value={booksName} onChange={handleChange} />
        <button type='submit'>Submit</button>
      </form>
      {modalOpen && <ModalText modalText={modalText} />}
      {book.map((b) => {
        return <li key={b.id}>{b.name}</li>;
      })}
    </div>
  );
};

export default StateManagement;
