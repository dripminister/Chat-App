import React from 'react'
import { auth, db } from '../firebase'
import { updateDoc, doc, arrayUnion, serverTimestamp, Timestamp } from 'firebase/firestore'
import { useState } from 'react'

export default function TextInput() {

    const [message, setMessage] = useState("")

    const handleClick = async () => {
        await updateDoc(doc(db, "messages", "messages"), {
            messages: arrayUnion({
              id: Timestamp.now(),
              text: message,
              senderId: auth.currentUser.uid,
              senderName: auth.currentUser.displayName,
              senderImg: auth.currentUser.photoURL,
              date: Timestamp.now(),
            })
          })

          setMessage("")
    }


  return (
    <div className='input'>
        <input 
            type="text"
            placeholder="Write something"
            onChange={e => setMessage(e.target.value)}
            value={message}
        />
        <button onClick={handleClick}>Send</button>
    </div>
  )
}
