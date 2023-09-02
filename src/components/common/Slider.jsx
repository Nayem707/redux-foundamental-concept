import React from 'react';
import AliceCarousel from 'react-alice-carousel';

const items = [
  <div className='item' data-value='1'>
    NAyem
  </div>,
  <div className='item' data-value='2'>
    Sojib
  </div>,
  <div className='item' data-value='3'>
    Mahu
  </div>,
  <div className='item' data-value='4'>
    Sayem
  </div>,
  <div className='item' data-value='5'>
    Bulu
  </div>,
];

const Gallery = () => {
  return (
    <AliceCarousel
      autoPlay
      autoPlayStrategy='none'
      autoPlayInterval={2000}
      animationType='fadeout'
      infinite
      touchTracking={false}
      disableDotsControls
      disableButtonsControls
      items={items}
    />
  );
};

export default Gallery;
