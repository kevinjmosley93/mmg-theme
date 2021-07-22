import React from 'react'

const Header2 = () => {
  return (
    <header className='header header2'>
      <div className='header2__logo'>
        <a>Company</a>
      </div>
      <ul className='header2__collections-nav d-lg-block d-none'>
        <li className='header2__collection-link'>
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

        <li className='header2__collection-link'>
          <a href='/link'>Link</a>
        </li>
        <li className='header2__collection-link'>
          <a href='/link'>Link</a>
        </li>
      </ul>

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
