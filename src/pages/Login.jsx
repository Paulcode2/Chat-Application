import React, { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth, storage, db } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate()
  const handleSubmit = async (e) =>{
    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value

try{
  await signInWithEmailAndPassword(auth, email, password)
  navigate("/login")
  }catch(err){
  setErr(true)
}
}

// const stopError = () =>{
//   setInterval(() => err(), 3000);
// }
  return (
    <div className='register'>
      <div className="form">
        <span id="logo">Chat Application</span>
        <span id="title">Login</span>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Username'/>
            <input type="password" placeholder='password'/>
            <button>Sign in</button>
            { err && <span>Something went wrong</span> }
        </form>
        <p>Already an account? <Link to='/register'>Register</Link> </p>
      </div>
    </div>
  )
}

export default Login
