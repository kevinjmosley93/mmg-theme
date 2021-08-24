import React from 'react'

const ImgLeft = () => {
  return (
    <div>
      <div className='container col-xxl-8 px-4 py-5'>
        <div className='row flex-lg-row align-items-center justify-content-center g-5 py-5'>
          <div className='col-10 col-sm-8 col-lg-6'>
            <img
              src='https://images.unsplash.com/photo-1601002975252-7a3a3309511a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGJsYWNrJTIwbW9kZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
              className='d-block mx-auto img-fluid rounded'
              alt='img text'
              width='250'
              height='250'
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImgLeft
