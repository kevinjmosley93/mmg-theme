import React from 'react'

const Header1 = () => {
  return (
    <header className='header header1'>
      <div className='header1__collections-nav'>
        <a>Link</a>
        <a>Link</a>
        <a>Link</a>
      </div>
      <div className='header1__logo'>
        <a>Company</a>
      </div>
      <div className='header1__collections-nav'>
        <a>Link</a>
        <a>Link</a>
        <a>Link</a>
        <a>
          <i className='fas fa-user'></i>
        </a>
        <a>
          <i className='fas fa-shopping-cart'></i>
        </a>
      </div>
    </header>
  )
}

export default Header1
