import React from 'react'
// import '../../css/Banner.css'
import dogVideo from '../../../src/assets/hello.mp4'

const Banner = () => {
  return (
    <div className='relative'>
      <video autoPlay loop muted>
        <source src={dogVideo} type='video/mp4'></source>
      </video>
      <div className='absolute top-72 mx-96  p-6 border rounded-xl '>
          <h1 className='bg-sky-200 text-center p-3 mx-32 mb-4 text-2xl font-bold rounded-xl'>They Are Our Friends</h1>
          <p className='text-cyan-50'>Dog lovers know something that no one else does: there’s no purer form of love than the kind you get from your four-legged family. Here is a collection of adorable, inspirational quotes about dogs that celebrate our love for all things canine.
          </p>
      </div>

    </div>
  )
}

export default Banner