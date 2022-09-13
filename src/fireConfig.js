// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzU9n9A2K4DaUIJ2xJgSeJCT1cdsDVIwY",
  authDomain: "concise-isotope-273707.firebaseapp.com",
  projectId: "concise-isotope-273707",
  storageBucket: "concise-isotope-273707.appspot.com",
  messagingSenderId: "420721419481",
  appId: "1:420721419481:web:40c1c308c2392778948ac8",
  measurementId: "G-J2FD42J4V9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export {auth,db};
export default app;
