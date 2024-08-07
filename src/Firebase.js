// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQKPhdhPRreounHHcEJQDv9HzaEVv_ipI",
  authDomain: "todo-98343.firebaseapp.com",
  projectId: "todo-98343",
  storageBucket: "todo-98343.appspot.com",
  messagingSenderId: "855261704692",
  appId: "1:855261704692:web:57bfd7a5f6a738e40e09a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);

