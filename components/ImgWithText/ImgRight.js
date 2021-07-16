import React from 'react'

const ImgRight = () => {
  return (
    <div>
      <div className='container col-xxl-8 px-4 py-5'>
        <div className='row flex-lg-row-reverse align-items-center justify-content-center g-5 py-5'>
          <div className='col-10 col-sm-8 col-lg-6'>
            <img
              src='bootstrap-themes.png'
              className='d-block mx-lg-auto img-fluid'
              alt='Bootstrap Themes'
              width='700'
              height='500'
              loading='lazy'
            />
          </div>
          <div className='col-lg-6'>
            <h1 className='display-5 fw-bold lh-1 mb-3'>
              Premier Fashion and Apparel Brand made for comfort
            </h1>
            <p className='lead'>
              Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt
              ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error
              repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis
              modi at sunt excepturi expedita sint?
            </p>
            <div className='d-grid gap-2 d-md-flex justify-content-md-start'>
              <a type='button' className='btn btn-primary btn-lg px-4 me-md-2'>
                View Collections
              </a>
              <a type='button' className='btn btn-lg px-4'>
                How We Got Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImgRight
