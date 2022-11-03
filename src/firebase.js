import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"
import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyDdW2J3Bcv_3B-sI8RWJ1MUhs9pxeqLlPo",
  authDomain: "open-chat-45917.firebaseapp.com",
  projectId: "open-chat-45917",
  storageBucket: "open-chat-45917.appspot.com",
  messagingSenderId: "129145482216",
  appId: "1:129145482216:web:72d02f7713e410b7c2d25d"
}


const app = initializeApp(firebaseConfig)
export const db = getFirestore()
export const auth = getAuth()
export const storage = getStorage()
