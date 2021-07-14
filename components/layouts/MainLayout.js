import React from 'react'
import Header1 from '../Header/Header1/Header1'

const MainLayout = props => {
  return (
    <div className='fixed-nav transparent-nav'>
      <Header1 />
      <main>{props.children}</main>
      <footer>Footer</footer>
    </div>
  )
}

export default MainLayout
