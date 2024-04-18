import React, { useContext } from 'react'
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from '../context/ChatContext';
// import { IoMdArrowRoundBack } from "react-icons/io";
// import {Navigate} from 'react-router-dom'

const Chat = () => {

  const {data} = useContext(ChatContext);
  // const handleBack = () =>{
  //   return <Navigate to='/'/>
  // }
  return (
    <div className='chat'>
      <div className="chatInfo">
      {/* <IoMdArrowRoundBack onClick={()=> handleBack}/> */}
        <span>{data.user?.displayName}</span>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat
