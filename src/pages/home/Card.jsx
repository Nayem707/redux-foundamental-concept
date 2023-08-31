import React from 'react';

const Card = () => {
  return (
    <>
      <div class='row row-cols-1 row-cols-md-3 g-4'>
        <div class='col'>
          <div class='card h-100'>
            <img
              src='https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg'
              class='card-img-top'
              alt='...'
            />
            <div class='card-body'>
              <h5 class='card-title'>Card title</h5>
              <p class='card-text'>
                This is a wider card with supporting text below as a natural
              </p>
            </div>
            <div class='card-footer'>
              <small class='text-muted'>Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div class='col'>
          <div class='card h-100'>
            <img
              src='https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg'
              class='card-img-top'
              alt='...'
            />
            <div class='card-body'>
              <h5 class='card-title'>Card title</h5>
              <p class='card-text'>
                This card has supporting text below as a natural lead-in to
              </p>
            </div>
            <div class='card-footer'>
              <small class='text-muted'>Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div class='col'>
          <div class='card h-100'>
            <img
              src='https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg'
              class='card-img-top'
              alt='...'
            />
            <div class='card-body'>
              <h5 class='card-title'>Card title</h5>
              <p class='card-text'>
                This is a wider card with supporting text below as a natural
              </p>
            </div>
            <div class='card-footer'>
              <small class='text-muted'>Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
