import React from 'react'
import Lottie from 'lottie-react';
import groomingAnimation from "../../assets/Animation/29001-pet-love.json"

const Grooming = () => {
  return (
    <div className='mx-28 mt-20'>
        <h1 className='text-5xl text-cyan-900 font-bold my-16 text-center'>Grooming Salon</h1>
       <div className='grid lg:grid-cols-2 gap-10 grid-cols-1'>
       <div  className='grid  grid-cols-1'>
            <div>
                <h3 className='font-bold text-cyan-900 text-center'>Bath & Brush</h3>
                <p className='text-center text-stone-400'>Bath, nail trim, ear cleaning, paw & pad trim, sanitary trim, anal gland cleaning & more.</p>
            </div>
            <div>
                <h3 className='font-bold text-cyan-900 text-center'>Bath & Brush</h3>
                <p className='text-center text-stone-400'>Bath, nail trim, ear cleaning, paw & pad trim, sanitary trim, anal gland cleaning & more.</p>
            </div>
            <div>
                <h3 className='font-bold text-cyan-900 text-center'>Bath & Brush</h3>
                <p className='text-center text-stone-400'>Bath, nail trim, ear cleaning, paw & pad trim, sanitary trim, anal gland cleaning & more.</p>
            </div>
            <div>

            </div>
        </div>
        {/* lottie  */}
        <div className='flex items-center '>
                    <Lottie className='w-96 ml-28' animationData={groomingAnimation} loop={true} />
                </div>
       </div>
    </div>
  )
}

export default Grooming