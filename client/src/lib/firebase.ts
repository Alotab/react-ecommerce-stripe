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
  apiKey: "AIzaSyBHZ7xsJPBhT0ok7Rqyq_41Fi5UXUIp6o0",
  authDomain: "supergearyt-dbb9e.firebaseapp.com",
  projectId: "supergearyt-dbb9e",
  storageBucket: "supergearyt-dbb9e.firebasestorage.app",
  messagingSenderId: "638830890464",
  appId: "1:638830890464:web:70c81c58090665ce392f85"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();