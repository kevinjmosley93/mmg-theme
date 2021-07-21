import React from 'react'

const Video = () => {
  return (
    <div className='container mt-3'>
      <iframe
        width='100%'
        height='515'
        src='https://www.youtube.com/embed/f7JkH-Ik96s'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
    </div>
  )
}

export default Video
