import React from 'react'
import '../../css/News.css'
import { FaCat } from 'react-icons/fa'

const News = () => {
  return (
    <div>
        <div className='flex items-center justify-center'>
  
  <FaCat  className='text-5xl gap-4 text-sky-600 '></FaCat>
   <h1 className='text-5xl text-cyan-900 font-bold my-16 text-center'>News</h1>
 </div>

      <div className='grid lg:grid-cols-4 grid-cols-1 ml-28'>
      <div class="book">
    <p>Hello</p>
    <div class="cover">
        <p>Hover Me</p>
    </div>
   </div>

         <div class="book">
    <p>Hello</p>
    <div class="cover">
        <p>Hover Me</p>
    </div>
   </div>

         <div class="book">
    <p>Hello</p>
    <div class="cover">
        <p>Hover Me</p>
    </div>
   </div>

         <div class="book">
    <p>Hello</p>
    <div class="cover">
        <p>Hover Me</p>
    </div>
   </div>
      </div>
    </div>
  )
}

export default News