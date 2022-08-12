import firebase from "firebase/compat/app"
import "firebase/compat/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCebPSZkWPxK6v3o1jdjO6-K107GdQTd78",
  authDomain: "where-s-waldo-e15f9.firebaseapp.com",
  projectId: "where-s-waldo-e15f9",
  storageBucket: "where-s-waldo-e15f9.appspot.com",
  messagingSenderId: "905595972259",
  appId: "1:905595972259:web:0a2bd232018d5868636d16",
  measurementId: "G-GYZ284XVZ8",
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const firestore = firebase.firestore()

const timestamp = firebase.firestore.FieldValue.serverTimestamp()

export { firestore, timestamp }
