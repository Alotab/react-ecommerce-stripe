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
  apiKey: "AIzaSyCzgw__DCgflCwenUJDIbuVOp9YYtHjJ2g",
  authDomain: "supergearyt-dbb9e.firebaseapp.com",
  projectId: "supergearyt-dbb9e",
  storageBucket: "supergearyt-dbb9e.firebasestorage.app",
  messagingSenderId: "638830890464",
  appId: "1:638830890464:web:295271b1a3ef03d7392f85"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();