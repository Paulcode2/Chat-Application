import React, { useContext } from 'react'
import me from '../assets/Me.jpeg'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { AuthContext } from '../context/authContext'

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)
  return (
    <div className='navbar'>
      {/* <span className="logo">Chat Application</span> */}
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={() =>signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
