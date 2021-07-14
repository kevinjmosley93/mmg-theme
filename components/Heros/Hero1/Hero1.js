import React from 'react'

const Hero1 = () => {
  return (
    <>
      <div className='hero hero1 aligned-right'>
        <img
          src='https://images.unsplash.com/photo-1470072508653-1be229b63562?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
          className='hero1__bg-img'
        />
        <div className='hero1__content-container'>
          <div className='hero1__info'>
            <h1 className='hero1__title'>Hero Title</h1>
            <p className='hero1__body'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <a className='hero1__btn'>Link</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero1
