import React from 'react'
import Banner from '../components/Home/Banner'
import Services from '../components/Home/Services'
import PetGoods from '../components/Home/PetGoods'
import Grooming from '../components/Home/Grooming'
import PetHotel from '../components/Home/PetHotel'
import Discount from '../components/Home/Discount'
import VaterinaryCare from '../components/Home/VaterinaryCare'
import News from '../components/Home/News'
import PetPlaying from '../components/Home/PetPlaying'
import Testimonial from '../components/Home/Testimonial'
import Adaption from '../components/Home/Adaption'
import Footer from '../Shared/Footer'

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <Services></Services>
        <Grooming></Grooming>
        <PetGoods></PetGoods>
        <PetHotel></PetHotel>
        <Discount></Discount>
        <VaterinaryCare></VaterinaryCare>
        <News></News>
        <PetPlaying></PetPlaying>
        <Testimonial></Testimonial>
        <Adaption></Adaption>
        {/* <Footer></Footer> */}
    </div>
  )
}

export default Home