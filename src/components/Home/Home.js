import React, { useContext } from 'react'
import Banner from './Banner/Banner'
import Footer from './Footer/Footer'
import { AuthContext } from '../Context/Auth'
import Loader from '../Shared/Loader/Loader'
import Login from '../Authentication/LogIn/Login'

const Home = () => {
  const {loading}=useContext(AuthContext)
  

  if (!loading) {
    return <Loader />;
  }


  return (
    <div>
        <Banner></Banner>
        {/* <Login></Login> */}
        {/* <Footer></Footer> */}
    </div>
  )
}

export default Home