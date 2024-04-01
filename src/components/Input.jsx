import React from 'react'
import { MdOutlineAddAPhoto } from "react-icons/md";

const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Enter Message'/>
      <div className="send">
        <img src="" alt="" />
        <input type="file" style={{display:"none"}} id="file" />
        <label htmlFor="file">
        <MdOutlineAddAPhoto />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input
