import React from 'react'

const Hero1 = () => {
  return (
    <>
      <div className='hero hero2'>
        <div className='hero2__collection1'>
          <img
            src='https://images.unsplash.com/photo-1507114845806-0347f6150324?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            className='hero2__bg-img'
          />
          <div className='hero2__content-container'>
            <div className='hero2__info'>
              <a className='hero2__btn'>Men</a>
            </div>
          </div>
        </div>
        <div className='hero2__collection2'>
          <img
            src='https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            className='hero2__bg-img'
          />
          <div className='hero2__content-container'>
            <div className='hero2__info'>
              <a className='hero2__btn'>Women</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero1
