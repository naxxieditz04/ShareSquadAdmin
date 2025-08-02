// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCwoxp278aud76u5pFE7mkqfiQL2T8S0s",
  authDomain: "grouplinkapp.firebaseapp.com",
  databaseURL: "https://grouplinkapp-default-rtdb.firebaseio.com",
  projectId: "grouplinkapp",
  storageBucket: "grouplinkapp.firebasestorage.app",
  messagingSenderId: "543518481244",
  appId: "1:543518481244:web:4d5c5a66ea214ab4e67f99",
  measurementId: "G-K4NL2Y0XYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
