// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "habricks-fullstack.firebaseapp.com",
  projectId: "habricks-fullstack",
  storageBucket: "habricks-fullstack.appspot.com",
  messagingSenderId: "682544576092",
  appId: "1:682544576092:web:34d92288273594f37d9899"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);