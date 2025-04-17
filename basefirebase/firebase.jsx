// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDl9NfBNA9Dxnrxb0NvIL1L2fRo8l8p6Jg",
  authDomain: "first-firebase-24087.firebaseapp.com",
  projectId: "first-firebase-24087",
  storageBucket: "first-firebase-24087.firebasestorage.app",
  messagingSenderId: "1007037957548",
  appId: "1:1007037957548:web:b70df1aaddb22b8e2c6609"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFireBase = getFirestore(app);

export const auth = getAuth(app)