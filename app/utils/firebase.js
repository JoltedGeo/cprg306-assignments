// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVxt58Q10x4UnslZH8tXKnJ6OIrX8ZbQw",
  authDomain: "cprg306-assignments-b28d3.firebaseapp.com",
  projectId: "cprg306-assignments-b28d3",
  storageBucket: "cprg306-assignments-b28d3.firebasestorage.app",
  messagingSenderId: "90234044656",
  appId: "1:90234044656:web:d61b33570108bb7b30c235"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);