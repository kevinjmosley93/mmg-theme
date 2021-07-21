import React from 'react'

const Services = () => {
  return (
    <div
      style={{ backgroundColor: 'black', padding: '4rem 1rem' }}
      className='text-light '>
      <div className='container '>
        <div className='row'>
          <div className='col-md-4'>
            <figure className='item-feature'>
              <span className='text-primary'>
                <i className='fa fa-2x fa-truck'></i>
              </span>
              <figcaption className='pt-3'>
                <h5 className='title'>Fast delivery</h5>
                <p>
                  Dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore{' '}
                </p>
              </figcaption>
            </figure>
          </div>
          <div className='col-md-4'>
            <figure className='item-feature'>
              <span className='text-primary'>
                <i className='fas fa-2x fa-phone'></i>
              </span>
              <figcaption className='pt-3'>
                <h5 className='title'>24/7 Customer Service</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod
                </p>
              </figcaption>
            </figure>
          </div>
          <div className='col-md-4'>
            <figure className='item-feature'>
              <span className='text-primary'>
                <i className='fa fa-2x fa-lock'></i>
              </span>
              <figcaption className='pt-3'>
                <h5 className='title'>Money Back Guarantee</h5>
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
