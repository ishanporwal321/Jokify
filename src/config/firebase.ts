// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaB0nyNCJoHC1A8VwWcAkM1JLRSilSOJM",
  authDomain: "react-social-media-app-fecb3.firebaseapp.com",
  projectId: "react-social-media-app-fecb3",
  storageBucket: "react-social-media-app-fecb3.appspot.com",
  messagingSenderId: "86681289947",
  appId: "1:86681289947:web:a3868581409ff271e938fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);