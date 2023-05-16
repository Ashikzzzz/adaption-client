import React from 'react'
import './Banner.css';
import bannerVideo from "../../../assets/hellodog.mp4"

const Banner = () => {
  return (
    <div>
        <div className='banner-section'>
          <video autoPlay loop muted>
            <source  className="w-screen"  src={bannerVideo} type='video/mp4'></source>
          </video>
            <div className='text-wrapper'>
                <h1 className=' font-bold  md:text-lg lg:text-5xl'>Think </h1>
                <h1  className='lg:text-5xl md:text-lg font-bold text-gray-900-600 font-serif'>Pawsitive!</h1>
                <p>As a nation we are obsessed with our pets (in a good way of course) which explains why we love to talk about them. The number of pet bloggers is rising every year which presents an opportunity to share information, chat and even meet up for dog walks, social events and competitions.</p>
            </div>
        </div>
    </div>
  )
}

export default Banner