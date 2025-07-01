


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "thoughtfull-sphere.firebaseapp.com",
  projectId: "thoughtfull-sphere",
  storageBucket: "thoughtfull-sphere.firebasestorage.app",
  messagingSenderId: "1083760363377",
  appId: "1:1083760363377:web:85df4456272e77e47118d0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);