import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import "bootstrap/dist/css/bootstrap.css"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import App from "./App"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
const app = initializeApp(firebaseConfig)
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
