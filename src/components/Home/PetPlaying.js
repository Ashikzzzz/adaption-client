import React from 'react'
import Lottie from 'lottie-react';
import groomingAnimation from "../../assets/Animation/107394-cat-playing.json"
import { FaDog } from 'react-icons/fa';

const PetPlaying = () => {
  return (
    <div className='mx-28 mt-20 bg-sky-50 rounded-lg '>
       <div className='flex items-center justify-center'>
        <FaDog className='text-5xl gap-4 text-sky-600 '></FaDog>
         <h1 className='text-5xl text-cyan-900 font-bold my-16 text-center'>Pet Playing</h1>
       </div>
       <div className='grid lg:grid-cols-2 gap-10 grid-cols-1 '>
       <div  className='grid  grid-cols-1  p-10 rounded'>
            <div>
                <h3 className='font-bold text-sky-600 text-2xl text-center'>Accumsan</h3>
                <p className='text-center text-stone-400'>Bath, nail trim, ear cleaning, paw & pad trim, sanitary trim, anal gland cleaning & more.</p>
            </div>
            <div>
                <h3 className='font-bold text-sky-600 text-2xl text-center'>Orci Ut Cras Etiam</h3>
                <p className='text-center text-stone-400'>Bath, nail trim, ear cleaning, paw & pad trim, sanitary trim, anal gland cleaning & more.</p>
            </div>
            <div>
                <h3 className='font-bold text-sky-600 text-2xl text-center'>Volutpat Nisi Pellentesque</h3>
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

export default PetPlaying