import React, { useContext } from 'react';
import { colorContext } from '../../context/colorContext';

const Input = () => {
  const { colorValue, setColorValue } = useContext(colorContext);
  console.log(colorValue);
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Add color : </label>
      <input
        autoFocus
        placeholder='color Name..'
        type='text'
        value={colorValue}
        onChange={(e) => setColorValue(e.target.value)}
      />
    </form>
  );
};

export default Input;
