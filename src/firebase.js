// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAceVr2E5MadKeaVZ39Ay_wlAlWQccasn8",
  authDomain: "new-chat-project-e8754.firebaseapp.com",
  projectId: "new-chat-project-e8754",
  storageBucket: "new-chat-project-e8754.appspot.com",
  messagingSenderId: "762906787152",
  appId: "1:762906787152:web:f39c6ecb0e5a6783a98055",
  measurementId: "G-4W35XDZ7LH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()