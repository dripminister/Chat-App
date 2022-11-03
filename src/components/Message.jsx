import React from 'react'
import { auth } from '../firebase'

export default function Message({message}) {

  return (
    <div className={`message-container ${auth.currentUser.uid === message.senderId ? "own" : ""}`}>
        <div className='sender'>
            <img src={message.senderImg} />
            <p>{message.senderName}</p>
        </div>
        <p className='message'>{message.text}</p>
    </div>
  )
}
