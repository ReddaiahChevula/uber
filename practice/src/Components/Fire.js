// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAJeqlSQOgy_53OWsmi_yMl4xES8SfslAg",
    authDomain: "reddychinnu-e780d.firebaseapp.com",
    projectId: "reddychinnu-e780d",
    storageBucket: "reddychinnu-e780d.firebasestorage.app",
    messagingSenderId: "697144061249",
    appId: "1:697144061249:web:fdfe1703f51264dc2b85c0",
    measurementId: "G-3NBNMPYBBS"
  };

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth,db}

