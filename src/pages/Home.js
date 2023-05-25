import React from 'react'
import Banner from '../components/Home/Banner'
import Services from '../components/Home/Services'
import PetGoods from '../components/Home/PetGoods'
import Grooming from '../components/Home/Grooming'
import PetHotel from '../components/Home/PetHotel'

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <Services></Services>
        <Grooming></Grooming>
        <PetGoods></PetGoods>
        <PetHotel></PetHotel>
    </div>
  )
}

export default Home