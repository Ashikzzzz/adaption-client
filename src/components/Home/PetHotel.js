import React from 'react'
import Lottie from 'lottie-react';
import hotelAnimation from "../../assets/Animation/9013-hotel.json"
import { FaCat, FaDog } from 'react-icons/fa';

const PetHotel = () => {
  return (
    <div className='mx-28 mt-20 bg-sky-50 rounded-lg '>
       <div className='flex items-center justify-center'>
        <FaCat  className='text-5xl gap-4 text-sky-600 '></FaCat>
         <h1 className='text-5xl text-cyan-900 font-bold my-16 text-center'>Grooming Salon</h1>
       </div>
       <div className='grid lg:grid-cols-2 gap-10 grid-cols-1 '>
        {/* lottie  */}
       <div className='flex items-center '>
                    <Lottie className='w-88 ml-28' animationData={hotelAnimation} loop={true} />
                </div>
       <div  className='grid  grid-cols-1  p-10 rounded'>
            <div>
                <h3 className='font-bold  text-center text-sky-600 text-2xl'>Pet Boarding</h3>
                <p className='text-center text-stone-400'>Bath, nail trim, ear cleaning, paw & pad trim, sanitary trim, anal gland cleaning & more.</p>
            </div>
            <div>
                <h3 className='font-bold text-sky-600 text-2xl text-center'>Book Now, Pay Later</h3>
                <p className='text-center text-stone-400'>Bath, nail trim, ear cleaning, paw & pad trim, sanitary trim, anal gland cleaning & more.</p>
            </div>
            <div>
                <h3 className='font-bold text-sky-600 text-2xl text-center'>Safety & Wellness Standards</h3>
                <p className='text-center text-stone-400'>Bath, nail trim, ear cleaning, paw & pad trim, sanitary trim, anal gland cleaning & more.</p>
            </div>
            <div>

            </div>
        </div>
       
        
       </div>
    </div>
  )
}

export default PetHotel