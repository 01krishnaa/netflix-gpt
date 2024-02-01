import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfbJQcKe-tHanMecfaapgoKwFoqm4DdvA",
  authDomain: "netflixgpt-5bd46.firebaseapp.com",
  projectId: "netflixgpt-5bd46",
  storageBucket: "netflixgpt-5bd46.appspot.com",
  messagingSenderId: "368110289573",
  appId: "1:368110289573:web:d27c84d050c57aa7a7034c",
  measurementId: "G-DKCEEMWJ4K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
