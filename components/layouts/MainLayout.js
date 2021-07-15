import React from 'react'
import Footer from '../Footer/Footer'
import Header1 from '../Header/Header1/Header1'

const MainLayout = props => {
  return (
    <div className='fixed-nav transparent-nav'>
      <Header1 />
      <main>{props.children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
