import { createContext, useState } from 'react';

const bookContext = createContext();

const people = [
  {
    id: 1,
    name: 'nayem islam',
  },
  {
    id: 2,
    name: 'sojib talukdar',
  },
];

const UserProvider = ({ children }) => {
  const [books, setBooks] = useState(people);

  return (
    <bookContext.Provider value={{ books, setBooks }}>
      {children}
    </bookContext.Provider>
  );
};

export { bookContext, UserProvider };
