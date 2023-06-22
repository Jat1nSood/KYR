import React from 'react'

// import Link from 'react-router-dom'
import '../css/Navbar.css'
export default function Navbar() {
  return (
    <div>
      <div className='navbar'>
        <div className='navcontainer1'>
            <img className='navlogo' src=''/>
        </div>

        <div className='navcontainer2'>
            <div className='nav-item'>Home</div>
            <div className='nav-item'>About us</div>
             <div className='nav-item'>Products</div>
             <div className='nav-item'>Contact Us</div>
        </div>

        <div className='navcontainer3'>

        <div className='nav-item'>Send Email</div>
        <div className='nav-item'>Send SMS</div>


            
        </div>
      </div>
    </div>
  )
}

