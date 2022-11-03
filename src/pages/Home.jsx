import React from 'react'
import ChatDisplay from '../components/ChatDisplay'
import Navbar from '../components/Navbar'
import TextInput from '../components/TextInput'
import { auth } from '../firebase'

export default function Home() {

  return (
    <div className='home'>
        <div className='wrapper'>
            <Navbar />
            <ChatDisplay />
            <TextInput />
        </div>
    </div>
  )
}
