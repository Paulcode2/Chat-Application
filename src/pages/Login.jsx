import React, { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from '../firebase';
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { doc, setDoc } from "firebase/firestore"; 
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
  navigate("/")
  }catch(err){
  setErr(true)
}
}

  return (
    <div className='register'>
      <div className="form">
        <span id="logo">Chat Application</span>
        <span id="title">Login</span>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder='email'/>
            <input type="password" placeholder='password'/>
            <button>Sign in</button>
            { err && <span className='err'>Incorrect username/password</span> }
        </form>
        <p>Don't have an account? <Link to='/register'>Register</Link> </p>
      </div>
    </div>
  )
}

export default Login
