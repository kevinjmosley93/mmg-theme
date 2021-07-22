import React from 'react'

const Header3 = () => {
  return (
    <header className='header header3'>
      <div className='header3__logo'>
        <a>Company</a>
      </div>

      <div className='header3__collections-nav'>
        <ul className='header3__collections-nav d-lg-block d-none'>
          <li className='header3__collection-link'>
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

          <li className='header3__collection-link'>
            <a href='/link'>Link</a>
          </li>
          <li className='header3__collection-link'>
            <a href='/link'>Link</a>
          </li>
          <a>
            <i className='fas fa-user'></i>
          </a>
          <a>
            <i className='fas fa-shopping-cart'></i>
          </a>
        </ul>
      </div>
    </header>
  )
}

export default Header3
