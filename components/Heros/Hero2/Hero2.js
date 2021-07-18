import React from 'react'

const Hero1 = () => {
  return (
    <>
      <div className='hero hero2'>
        <div className='hero2__collection1'>
          <img
            src='https://images.unsplash.com/photo-1484517186945-df8151a1a871?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbiUyMHdpdGglMjB0c2hpcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
            className='hero2__bg-img'
          />
          <div className='hero2__content-container'>
            <div className='hero2__info'>
              <a className='hero2__btn'>T-Shirts</a>
            </div>
          </div>
        </div>
        <div className='hero2__collection2'>
          <img
            src='https://images.unsplash.com/photo-1521886243261-7fc82ca5cb60?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fG1hbiUyMHdpdGglMjBob29kaWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
            className='hero2__bg-img'
          />
          <div className='hero2__content-container'>
            <div className='hero2__info'>
              <a className='hero2__btn'>Hoodies</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero1
