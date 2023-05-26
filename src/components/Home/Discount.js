import React from 'react'
import '../../css/Discount.css'
import { FaCat } from 'react-icons/fa'

const Discount = () => {
  return (
<div className=''>
<div className='flex items-center justify-center'>
  
        <FaCat  className='text-5xl gap-4 text-sky-600 '></FaCat>
         <h1 className='text-5xl text-cyan-900 font-bold my-16 text-center'>Discount</h1>
       </div>
<div className='grid lg:grid-cols-4 grid-cols-1 ml-28'>
        <div class="card">
    <h2>CARD</h2>
</div>
        <div class="card">
    <h2>CARD</h2>
</div>
        <div class="card">
    <h2>CARD</h2>
</div>
        <div class="card">
    <h2>CARD</h2>
</div>
    </div>
</div>
  )
}

export default Discount