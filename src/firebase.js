// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDknmpBM36i67VnDwbZqlQxw4RHhGUNKgE",
  authDomain: "nextchat-65370.firebaseapp.com",
  projectId: "nextchat-65370",
  storageBucket: "nextchat-65370.appspot.com",
  messagingSenderId: "1061960041670",
  appId: "1:1061960041670:web:40fce22fc10b20046fc3c7",
  measurementId: "G-JJTBYQTMGV"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()