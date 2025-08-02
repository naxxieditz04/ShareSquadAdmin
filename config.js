import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCwoxp278aud76u5pFE7mkqfiQL2T8S0s",
  authDomain: "grouplinkapp.firebaseapp.com",
  projectId: "grouplinkapp",
  storageBucket: "grouplinkapp.firebasestorage.app",
  messagingSenderId: "543518481244",
  appId: "1:543518481244:web:4d5c5a66ea214ab4e67f99"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
