import React from 'react'
import { signOut } from "firebase/auth"
import { auth } from "../firebase"
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
    const navigate = useNavigate()

  return (
    <nav>
        <h1>Chat</h1>
        <p>Logged in as: {auth.currentUser.displayName}</p>
        <button onClick={()=>{
            signOut(auth)
            navigate("/login")
        }}>Log out</button>
    </nav>
  )
}
