import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, db, storage } from '../firebase'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { doc, setDoc } from "firebase/firestore"
import { useState } from 'react'

export default function Register() {

    const navigate = useNavigate()
    const [displayName, setDisplayName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [file, setFile] = useState(null)

    console.log(file)

    const handleSubmit = async (e) => {
        e.preventDefault()

        //const file = e.target[3].files[0]

        try{
            const res = await createUserWithEmailAndPassword(auth, email, password)
            const storageRef = ref(storage, displayName)

            await uploadBytesResumable(storageRef, file).then(() => {
              getDownloadURL(storageRef).then(async (downloadURL) => {
                try {
                    await updateProfile(res.user, {
                        displayName,
                        photoURL: downloadURL
                    })

                    await setDoc(doc(db, "users", res.user.uid), {
                        uid: res.user.uid,
                        displayName,
                        email,
                        photoURL: downloadURL
                    })

                    navigate("/")
                    } catch (err) {
                        console.log(err)
                    }
                })
            })
        }
        catch(err){
            console.log(err)
        }
    }


  return (
    <div className='register'>
        <div className='form-container'>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder='Username' 
                    onChange={(e) => setDisplayName(e.target.value)}
                    required/>
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
                <input required style={{ display: "none" }} type="file" id="file" onChange={e => setFile(e.target.files[0])}/>
                <label htmlFor="file">
                    {file == null ? <p><span>+</span> Add a profile picture</p> : <p>Picture added</p>}
                </label>
                <button>Register</button>
            </form>
            <p>You already have an account? <Link to="/login">Log In</Link></p>
        </div>
    </div>
  )
}
