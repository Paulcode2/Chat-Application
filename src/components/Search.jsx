import React from 'react'
import me from '../assets/Me.jpeg'

const Search = () => {
  return (
    <div className='search'>
      <div className="form">
        <input type="text" placeholder='find a user'/>
      </div>
      <div className="userChat">
      <img src={me} alt="" />
      <div className="userChatInfo">
        <span>Paul</span>
      </div>
      </div>

    </div>
  )
}

export default Search
