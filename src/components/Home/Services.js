import React from 'react'
import { FaBeer, FaCat, FaHospitalAlt, FaHotel, FaRegPaperPlane, FaUnsplash } from 'react-icons/fa';


const Services = () => {
  return (
    <div >
        <h1 className='text-5xl text-center text-cyan-900 mt-8 font-bold '>Our Services</h1>
        <div className='grid lg:grid-cols-5 grid-cols-1 mt-8 justify-center '>
            <div>
                <FaCat className='text-4xl w-full mx-auto text-sky-600 '></FaCat>

                <h3 className='font-bold  text-lg text-center '>Grooming</h3>
            </div>
            <div>
                <FaHotel className='text-4xl w-full mx-auto text-sky-600'></FaHotel>

                <h3 className='font-bold  text-lg text-center '>Pet's Hotel</h3>
            </div>
            <div>
               <FaHospitalAlt  className='text-4xl w-full mx-auto text-sky-600'></FaHospitalAlt>

                <h3 className='font-bold  text-lg text-center '>Pet's Care</h3>
            </div>
            <div>
                <FaRegPaperPlane  className='text-4xl w-full mx-auto text-sky-600'></FaRegPaperPlane>

                <h3 className='font-bold  text-lg text-center '>Play Zone</h3>
            </div>
            <div>
                <FaUnsplash className='text-4xl w-full mx-auto text-sky-600'></FaUnsplash>

                <h3 className='font-bold  text-lg text-center '>Adaption</h3>
            </div>
        </div>
    </div>
  )
}

export default Services