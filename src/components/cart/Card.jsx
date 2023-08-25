import React from 'react';

const Card = () => {
  return (
    <>
      <div class='container-fluid'>
        <div class='px-lg-5'>
          <div class='row'>
            <div class='col-xl-3 col-lg-4 col-md-6 mb-4'>
              <div class='bg-white rounded shadow-sm'>
                <img
                  src='https://bootstrapious.com/i/snippets/sn-gallery/img-1.jpg'
                  alt=''
                  class='img-fluid card-img-top'
                />
                <div class='p-4'>
                  <h5>
                    {' '}
                    <a href='#a' class='text-dark'>
                      Red paint cup
                    </a>
                  </h5>
                  <p class='small text-muted mb-0'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </p>
                  <div class='d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4'>
                    <p class='small mb-0'>
                      <i class='fa fa-picture-o mr-2'></i>
                      <span class='font-weight-bold'>JPG</span>
                    </p>
                    <div class='badge badge-danger px-3 rounded-pill font-weight-normal'>
                      New
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
