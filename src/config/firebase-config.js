// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCN44U7J88EiKVockbL2WU0xKgT44tWv5k",
  authDomain: "expense-tracker-76c47.firebaseapp.com",
  projectId: "expense-tracker-76c47",
  storageBucket: "expense-tracker-76c47.appspot.com",
  messagingSenderId: "809575797119",
  appId: "1:809575797119:web:a9d1cad5dd13649557ca4a",
  measurementId: "G-ETTZKG9KD2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore();
