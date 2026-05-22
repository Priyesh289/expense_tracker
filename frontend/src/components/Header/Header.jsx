import React from 'react'
import { IoMdMenu } from "react-icons/io";
import "./Header.css"
const Header = () => {
  return (
    <div className='header'>
      <div className='menuBox'>
        <IoMdMenu className='menuIcon' />
        <p >Financial Serenity</p>
      </div>
      <div className='profile'>
        <img className='profileImg'
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
          alt="userImage1"></img>
      </div>
    </div>
  )
}

export default Header