import React from 'react'
import Banner from '../components/Home/Banner'
import Services from '../components/Home/Services'
import PetGoods from '../components/Home/PetGoods'
import Grooming from '../components/Home/Grooming'

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <Services></Services>
        <Grooming></Grooming>
        <PetGoods></PetGoods>
    </div>
  )
}

export default Home