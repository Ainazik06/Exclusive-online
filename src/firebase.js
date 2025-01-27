// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzRUdGv1y67uLMR-X9ZaGo5z0gY3zThtA",
  authDomain: "exclusive-register-178a2.firebaseapp.com",
  projectId: "exclusive-register-178a2",
  storageBucket: "exclusive-register-178a2.firebasestorage.app",
  messagingSenderId: "863026327950",
  appId: "1:863026327950:web:40640fc7f3e507d8b1b4df",
  measurementId: "G-RW5TXC1TE3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)