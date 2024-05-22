// Import the functions you need from the SDKs you need

import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwfLC7ELheIwNm0SLzM1UbXs_IXKvcqj0",
  authDomain: "netflix-clone-92c57.firebaseapp.com",
  projectId: "netflix-clone-92c57",
  storageBucket: "netflix-clone-92c57.appspot.com",
  messagingSenderId: "827725593380",
  appId: "1:827725593380:web:551f2245f6c486c6fc11b1",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
