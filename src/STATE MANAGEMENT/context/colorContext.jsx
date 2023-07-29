import { createContext, useState } from 'react';

const colorContext = createContext({});

const ColorProvider = ({ Children }) => {
  const [colorValue, setColorValue] = useState('');

  return (
    <colorContext.Provider value={{ colorValue, setColorValue }}>
      {Children}
    </colorContext.Provider>
  );
};

export { ColorProvider, colorContext };
