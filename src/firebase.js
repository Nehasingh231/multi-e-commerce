// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtwI-5RqPgD_06WPOFspBuIt4K4StJLPw",
  authDomain: "e-commerce-b2b1b.firebaseapp.com",
  projectId: "e-commerce-b2b1b",
  storageBucket: "e-commerce-b2b1b.firebasestorage.app",
  messagingSenderId: "848419187150",
  appId: "1:848419187150:web:08e6dbfa9eb8ac30bee39f",
  measurementId: "G-5R2GMKCFW1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Auth setup
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export { auth, googleProvider, githubProvider, signInWithPopup, signOut };
