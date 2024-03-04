import React from 'react'
import { MdOutlineAddAPhoto } from "react-icons/md";

const Register = () => {
  return (
    <div className='register'>
      <div className="form">
        <span id="logo">Chat Application</span>
        <span id="title">Register</span>
        <form action="">
            <input type="text" placeholder='Username'/>
            <input type="email" placeholder='email'/>
            <input type="password" placeholder='password'/>
            <input style={{display: "none"}} type="file" id='file'/>
            <label htmlFor="file">
            <MdOutlineAddAPhoto />
            <span>Add image</span>
            </label>
            <button>Sign up</button>
        </form>
        <p>You have an account? Login</p>
      </div>
    </div>
  )
}

export default Register
