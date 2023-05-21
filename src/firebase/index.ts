// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth as _getAuth } from "firebase/auth";
import { getFirestore as _getFirestore } from "firebase/firestore";

// INFO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2RTWvCTiimgV4_ud7e0gqzLK0cLdDlAY",
  authDomain: "escalafacil-3a421.firebaseapp.com",
  projectId: "escalafacil-3a421",
  storageBucket: "escalafacil-3a421.appspot.com",
  messagingSenderId: "924242313040",
  appId: "1:924242313040:web:8b74f4c5792dd73c13f655",
  measurementId: "G-WJH7DQ5013"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = _getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const firestore = _getFirestore(app);

function getApp() {
  return app;
}

function getAuth() {
  return auth;
}

function getFirestore() {
  return firestore;
}


export { getApp, getAuth, getFirestore };