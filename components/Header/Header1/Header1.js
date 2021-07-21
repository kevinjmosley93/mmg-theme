import React from 'react'

const Header1 = ({ handleToggle }) => {
  return (
    <header className='header header1'>
      <div className='header1__collections-nav d-lg-block d-none'>
        <a href='/link' className='header1__collection-link'>
          Link
        </a>
        <a href='/link' className='header1__collection-link'>
          Link <i className='fas fa-chevron-down'></i>
          <ul className='collection-link__sub-links'>
            <li>
              <a href='#'>Link</a>
            </li>
            <li>
              <a href='#'>Link</a>
            </li>
            <li>
              <a href='#'>Link</a>
            </li>
            <li>
              <a href='#'>Link</a>
            </li>
          </ul>
        </a>
        <a href='/link' className='header1__collection-link'>
          Link
        </a>
      </div>
      <div onClick={handleToggle} className='d-lg-none text-light'>
        <i className='fas fa-bars'></i>
      </div>
      <div className='header1__logo'>
        <a>Company</a>
      </div>
      <div className='header1__collections-nav'>
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
