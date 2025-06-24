// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "green-aqua-land.firebaseapp.com",
  projectId: "green-aqua-land",
  storageBucket: "green-aqua-land.firebasestorage.app",
  messagingSenderId: "961507433895",
  appId: "1:961507433895:web:b105f55801cf090f576a82",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
