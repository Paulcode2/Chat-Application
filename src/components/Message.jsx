import React from 'react'
import me from '../assets/Me.jpeg'

const Message = () => {
  return (
    <div className='message'>
      <div className="msgInfo">
      <img src={me} alt="" />
      <span>Just Now</span>
      </div>
      <div className="msgContent">
        <p>Hello Paul</p>
        <img src={me} alt="" />
      </div>
    </div>
  )
}

export default Message
