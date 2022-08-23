// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB0mcm5v2WBP59u28NXtRCWHCH0fA0aRrU",
    authDomain: "todo-app-b12f5.firebaseapp.com",
    projectId: "todo-app-b12f5",
    storageBucket: "todo-app-b12f5.appspot.com",
    messagingSenderId: "461613913992",
    appId: "1:461613913992:web:2340e956cbf412bd9d4c3d"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();

export { app, db };