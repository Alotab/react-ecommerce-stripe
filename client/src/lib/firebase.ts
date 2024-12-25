// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyAt5ygg-2gbt2oo1dkKjv4hGK9A8sI_Umc",

  authDomain: "react-ecommerce-stripe-4b0ce.firebaseapp.com",

  projectId: "react-ecommerce-stripe-4b0ce",

  storageBucket: "react-ecommerce-stripe-4b0ce.firebasestorage.app",

  messagingSenderId: "85034116348",

  appId: "1:85034116348:web:9a5ff47621e8e46b642379"

};

// Projectid: react-ecommerce-stripe-4b0ce
// apiKey: AIzaSyADfTtvKORN3IHLwmYLu5davUSpy7rlvTw 


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();