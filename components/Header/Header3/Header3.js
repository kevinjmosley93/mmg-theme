import React from 'react'

const Header3 = () => {
  return (
    <header className='header header3'>
      <div className='header3__logo'>
        <a>Company</a>
      </div>

      <div className='header3__collections-nav'>
        <div className='header3__collections-nav'>
          <a href='#' className='header3__collection-link'>
            Link
          </a>
          <a href='#' className='header3__collection-link'>
            Link
          </a>
          <a href='#' className='header3__collection-link'>
            Link
          </a>
          <a>
            <i className='fas fa-user'></i>
          </a>
          <a>
            <i className='fas fa-shopping-cart'></i>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header3
