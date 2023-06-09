import React, { useContext } from 'react'
import avatarPic from "../assets/images/9000.jpg"
import { Link } from 'react-router-dom'
import { CONTEXT } from '../context/MainContext'

const Header = () => {

const {user}=useContext(CONTEXT)

  return (
    <div>
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li> <Link to='/login'>LogIn </Link> </li>
        <li><Link to="/signup">SignUp</Link></li>
      </ul>
    </div>
    <Link className="btn btn-ghost normal-case text-xl" to="/">PetCare</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li> <Link to='/login'>LogIn </Link> </li>
      <li><li><Link to="/signup">SignUp</Link></li></li>
    </ul>
    <div className="avatar">
  <div className="w-12 rounded">
    <img className='w-12 rounded' src={avatarPic}/>
  </div>
</div>
  </div>
  <div className="navbar-end">
    <a className="btn">Get started</a>
  </div>
</div>
    </div>
  )
}

export default Header