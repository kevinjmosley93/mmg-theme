import React from 'react'

const Header1 = ({ handleToggle }) => {
  return (
    <header className='header header1'>
      <ul className='header1__collections-nav d-lg-block d-none'>
        <li className='header1__collection-link'>
          <a href='/link'>
            Link <i className='fas fa-chevron-down'></i>
          </a>
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
        </li>

        <li className='header1__collection-link'>
          <a href='/link'>Link</a>
        </li>
        <li className='header1__collection-link'>
          <a href='/link'>Link</a>
        </li>
      </ul>

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
