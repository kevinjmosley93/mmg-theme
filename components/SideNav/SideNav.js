import React from 'react'

const SideNav = ({ toggle, handleToggle }) => {
  return (
    <aside className={`side-nav ${toggle ? 'd-block' : 'd-none'}`}>
      <div
        className='side-navbar active-nav d-flex justify-content-between flex-wrap flex-column'
        id='sidebar'>
        <ul className='nav flex-column text-white w-100'>
          <div className='h3 text-white my-2'>
            Side Nav{' '}
            <span>
              <i onClick={handleToggle} className='fas fa-times'></i>
            </span>
          </div>
          <li href='#' className='nav-link'>
            <span className='mx-2'>Home</span>
          </li>
          <li href='#' className='nav-link'>
            <span className='mx-2'>About</span>
          </li>
          <li href='#' className='nav-link'>
            <span className='mx-2'>Contact</span>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default SideNav
