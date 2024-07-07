import React from 'react'
import navbarLogo from '../../assets/Navbar-logo.svg'
import { CiMenuFries, CiSearch, CiUser, CiHeart, CiShoppingBasket } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className='navbar-wrapper'>
      <div className="container">
        <div className="navbar">

          <div className='navbar-logo-collection-wrapper'>
            <Link to={"/"} className='navbar-logo-link' href="">
            <h1>Texnomart*</h1>
            </Link>
            
            <button className='navbar-menu-btn' >
              <CiMenuFries />
              <span>Katalog</span>
            </button>
          </div>




          <div className='navbar-search'>
            <input type="text" placeholder= ' search' />
      
          </div>

          <div className='navbar-collection'>

            <Link className='navbar-collection-item navbar-collection-home'>
              <IoHomeOutline />
              <span className='lolo'>Kirish</span>
            </Link>


            <Link to={"login"} className='navbar-collection-item'>
              <CiUser />
              
              <span>Kirish</span>
            </Link>

            <Link to={'like'} className='navbar-collection-item'>
              <CiHeart />
              <span>Saralanagan</span>
            </Link>

            <Link to={'card'} className='navbar-collection-item' style={{ borderBottom: 'none' }}>
              <CiShoppingBasket />
              <span>Savat</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar