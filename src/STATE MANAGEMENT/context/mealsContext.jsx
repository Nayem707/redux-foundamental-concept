import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState([{ name: 'nayem' }, { name: 'sayem' }]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <AppContext.Provider
      value={{
        data,
        loading,
        error,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };

export const useGlobalContext = () => {
  return useContext(AppContext);
};
