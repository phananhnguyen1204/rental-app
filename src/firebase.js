// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHejLbHw7TUwoldZjr3tmCOMG3goV0cNU",
  authDomain: "rental-app-27464.firebaseapp.com",
  projectId: "rental-app-27464",
  storageBucket: "rental-app-27464.appspot.com",
  messagingSenderId: "351973677096",
  appId: "1:351973677096:web:e08c1d215e714a66f3fd1d",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
