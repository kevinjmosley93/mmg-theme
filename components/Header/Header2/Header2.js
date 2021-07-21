import React from 'react'

const Header2 = () => {
  return (
    <header className='header header2'>
      <div className='header2__logo'>
        <a>Company</a>
      </div>
      <div className='header2__collections-nav'>
        <a href='#' className='header2__collection-link'>
          Link
        </a>
        <a href='#' className='header2__collection-link'>
          Link
        </a>
        <a href='#' className='header2__collection-link'>
          Link
        </a>
      </div>

      <div className='header2__collections-nav'>
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

export default Header2
