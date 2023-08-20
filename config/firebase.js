import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1XPDECseWN3joaqsnXgc7IP-xWPyDjNY",
  authDomain: "z-ii-b2f8a.firebaseapp.com",
  projectId: "z-ii-b2f8a",
  storageBucket: "z-ii-b2f8a.appspot.com",
  messagingSenderId: "659723566018",
  appId: "1:659723566018:web:659c86ea2db5fabc3cb45b",
  measurementId: "G-Y2245WNDY7",
};

const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDb = getFirestore(firebaseApp);
