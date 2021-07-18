import React from 'react'

const Services = () => {
  return (
    <div
      style={{ backgroundColor: 'black', padding: '4rem 1rem' }}
      className='text-light '>
      <div className='container '>
        <div class='row'>
          <div class='col-md-4'>
            <figure class='item-feature'>
              <span class='text-primary'>
                <i class='fa fa-2x fa-truck'></i>
              </span>
              <figcaption class='pt-3'>
                <h5 class='title'>Fast delivery</h5>
                <p>
                  Dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore{' '}
                </p>
              </figcaption>
            </figure>
          </div>
          <div class='col-md-4'>
            <figure class='item-feature'>
              <span class='text-primary'>
                <i class='fa fa-2x fa-landmark'></i>
              </span>
              <figcaption class='pt-3'>
                <h5 class='title'>Creative Strategy</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod
                </p>
              </figcaption>
            </figure>
          </div>
          <div class='col-md-4'>
            <figure class='item-feature'>
              <span class='text-primary'>
                <i class='fa fa-2x fa-lock'></i>
              </span>
              <figcaption class='pt-3'>
                <h5 class='title'>High secured </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
