import React from 'react'
import { useEffect, useState } from 'react'
import { db } from '../firebase'
import { doc, onSnapshot } from "firebase/firestore"
import Message from './Message'

export default function ChatDisplay() {

    const [messages, setMessages] = useState([])

    useEffect(() => {
        const unSub = onSnapshot(doc(db, "messages", "messages"), (doc) => {
            doc.exists() && setMessages(doc.data().messages);
        })

        return () => {
            unSub()
        }

    }, [])


  return (
    <div className='chat'>
        {messages && messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
    </div>
  )
}
