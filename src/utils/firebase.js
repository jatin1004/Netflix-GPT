// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaxoOcy4mVxwuN1-tLvucz_OqLG_S1eio",
  authDomain: "netflixgpt-ec358.firebaseapp.com",
  projectId: "netflixgpt-ec358",
  storageBucket: "netflixgpt-ec358.appspot.com",
  messagingSenderId: "151625124378",
  appId: "1:151625124378:web:fbe1c057711300297c9fa3",
  measurementId: "G-PHJV4PJM85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();