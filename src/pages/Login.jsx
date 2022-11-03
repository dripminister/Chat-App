import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from '../firebase'
import { useState } from 'react'

export default function Login() {

    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const res = await signInWithEmailAndPassword(auth, email, password)
            navigate("/")
        }
        catch{
            console.log("error")
        }
    }

  return (
    <div className='login'>
        <div className='form-container'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder='Email' 
                    onChange={(e) => setEmail(e.target.value)}
                    required/>
                <input 
                    type="password" 
                    placeholder='Password' 
                    onChange={(e) => setPassword(e.target.value)}
                    required/>
                <button>Log in</button>
            </form>
            <p>You don't have an account? <Link to="/register">Register</Link></p>
        </div>
    </div>
  )
}
