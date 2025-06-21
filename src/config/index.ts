// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuCtquxahtvrxlU-gsicvD2ub87pi6GtY",
  authDomain: "green-shop-66b77.firebaseapp.com",
  projectId: "green-shop-66b77",
  storageBucket: "green-shop-66b77.firebasestorage.app",
  messagingSenderId: "444364504232",
  appId: "1:444364504232:web:f7df8401441cb1aaab569d",
  measurementId: "G-P4TGN995P9"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};
