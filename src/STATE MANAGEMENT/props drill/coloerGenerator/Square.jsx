import { useContext } from 'react';
import { colorContext } from '../../context/colorContext';

const Square = () => {
  const { colorValue } = useContext(colorContext);
  console.log(colorValue);

  return (
    <section className='square' style={{ backgroundColor: colorValue }}>
      <p>{colorValue ? colorValue : 'Empty Value!'}</p>
    </section>
  );
};

Square.defaultProops = {
  colorValue: 'Empty Color Value',
};

export default Square;
