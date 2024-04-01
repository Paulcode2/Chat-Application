import React from 'react'
import me from '../assets/Me.jpeg'

const Chats = () => {
  return (
    <div className='chats'>
      <div className="userChat">
      <img src={me} alt="" />
      <div className="userChatInfo">
        <span>Paul</span>
        <p>Hello</p>
      </div>
      </div>
      <div className="userChat">
      <img src={me} alt="" />
      <div className="userChatInfo">
        <span>Paul</span>
        <p>Hello</p>
      </div>
      </div>
      <div className="userChat">
      <img src={me} alt="" />
      <div className="userChatInfo">
        <span>Paul</span>
        <p>Hello</p>
      </div>
      </div>
      <div className="userChat">
      <img src={me} alt="" />
      <div className="userChatInfo">
        <span>Paul</span>
        <p>Hello</p>
      </div>
      </div>
    </div>
  )
}

export default Chats
