import React from 'react'
import Lottie from "lottie-react";
import LoginAnimation from "../../../assets/Animation/loginAnimation.json"

const Login = () => {
  return (
    <div>
       <h1 className='text-5xl text-slate-800 font-bold text-center mt-6'>Log In Here</h1>
       <div className='grid grid-cols-1 lg:grid-cols-2'>
     <div className='mt-16'>
     <Lottie animationData={LoginAnimation} loop={true} ></Lottie>
    </div>
        <div> 
        <form >
           
          </form>
         </div>
       </div>
    </div>
  )
}

export default Login