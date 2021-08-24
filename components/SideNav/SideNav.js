import React from 'react'

const SideNav = ({ toggle, handleToggle }) => {
  return (
    <aside className='side-nav'>
      <div
        className='side-navbar justify-content-between flex-wrap flex-column'
        id='sidebar'>
        <div className='text-white'>
          <span style={{ float: 'right', paddingRight: '.5rem' }}>
            <i onClick={handleToggle} className='fas fa-times'></i>
          </span>
        </div>
      </div>
    </aside>
  )
}

export default SideNav
