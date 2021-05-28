import firebase from "firebase/app"
import 'firebase/auth'

let firebaseConfig = {
    apiKey: "AIzaSyDR-QQpSb3gMwU0bMweizV_8H8h1HGVuqQ",
    authDomain: "fir-chat-74bd6.firebaseapp.com",
    projectId: "fir-chat-74bd6",
    storageBucket: "fir-chat-74bd6.appspot.com",
    messagingSenderId: "140017521818",
    appId: "1:140017521818:web:a15122b57bdca461ed3b23"
}

firebase.initializeApp(firebaseConfig)

export const getCurrentUser = ()=> {
    return new Promise((resolve, reject) => {
      const unsubscribe = firebase.auth.onAuthStateChanged(user => {
        unsubscribe()
        resolve(user)
      }, reject)
    })
  }

export default firebase
