// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-d11ee.firebaseapp.com",
  projectId: "mern-blog-d11ee",
  storageBucket: "mern-blog-d11ee.appspot.com",
  messagingSenderId: "274086922413",
  appId: "1:274086922413:web:d41957f184c43f1d849e24"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);