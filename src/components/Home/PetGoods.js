import React from 'react'
import '../../css/petGoods.css'

const PetGoods = () => {
  return (
   <div >
    <h1 className='text-5xl font-bold mt-16 text-center text-cyan-900'>Our Goods for Your Pets</h1>
        <div className='flex justify-center space-x-8 my-6'>
            <div>
                <p className='font-bold hover:border-b border-blue-900'>Dogs</p>
            </div>
            <div>
                <p className='font-bold hover:border-b border-blue-900'>Cats</p>
            </div>
            <div>
                <p className='font-bold hover:border-b border-blue-900'>Fish</p>
            </div>
            <div>
                <p className='font-bold hover:border-b border-blue-900' >Small pets</p>
            </div>
        </div>

     <div className='grid lg:grid-cols-4 grid-cols-1 lg:ml-20'>
        <div class="card">
            <div class="card-details">
          <p class="text-title">Card title</p>
             <p class="text-body">Here are the details of the card</p>
   </div>
       <button class="card-button">More info</button>
</div>
        <div class="card">
            <div class="card-details">
          <p class="text-title">Card title</p>
             <p class="text-body">Here are the details of the card</p>
   </div>
       <button class="card-button">More info</button>
</div>
        <div class="card">
            <div class="card-details">
          <p class="text-title">Card title</p>
             <p class="text-body">Here are the details of the card</p>
   </div>
       <button class="card-button">More info</button>
</div>
        <div class="card">
            <div class="card-details">
          <p class="text-title">Card title</p>
             <p class="text-body">Here are the details of the card</p>
   </div>
       <button class="card-button">More info</button>
</div>
    </div>
   </div>
  )
}

export default PetGoods