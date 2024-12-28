// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "lathwal-estate.firebaseapp.com",
  projectId: "lathwal-estate",
  storageBucket: "lathwal-estate.appspot.com",
  messagingSenderId: "1047080216461",
  appId: "1:1047080216461:web:5c61595421024a8b687fc4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);