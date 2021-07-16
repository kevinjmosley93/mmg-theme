import React from 'react'
import Footer from '../Footer/Footer'
import Header1 from '../Header/Header1/Header1'
import SideNav from '../SideNav/SideNav'

const MainLayout = props => {
  const [toggle, setToggle] = React.useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }
  console.log({ toggle })

  return (
    <div className='fixed-nav transparent-nav'>
      <Header1 handleToggle={handleToggle} />
      <SideNav handleToggle={handleToggle} toggle={toggle} />
      <main>{props.children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
