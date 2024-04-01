import React from 'react'
import me from '../assets/Me.jpeg'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Chat Application</span>
      <div className="user">
        <img src={me} alt="" />
        <span>Paul</span>
        <button onClick={() =>signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
