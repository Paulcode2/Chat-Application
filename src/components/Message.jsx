import React, { useContext, useEffect, useRef } from 'react'
// import me from '../assets/Me.jpeg'
import { AuthContext } from '../context/authContext'
import { ChatContext } from '../context/ChatContext'
// import { ref } from 'firebase/storage'

const Message = ({message}) => {

  const {currentUser} = useContext(AuthContext)
  const {data} = useContext(ChatContext)

  const ref = useRef()

  useEffect(()=>{
    ref.current?.scrollIntoView({behaviour:"smooth"})
  }, [message])
  return (
    <div ref={ref} className={`message ${message.senderId === currentUser.Uid && "owner"}`}>
      <div className="msgInfo">
      <img src={message.senderId === currentUser.Uid ? currentUser.photoURL :  data.user.photoURL} alt="" />
      <span>Just Now</span>
      </div>
      <div className="msgContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  )
}

export default Message
