import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDNcLT4G12YzeE8WLEbjXMrm5C6MPIkuk",
  authDomain: "netflixgpt-49c50.firebaseapp.com",
  projectId: "netflixgpt-49c50",
  storageBucket: "netflixgpt-49c50.appspot.com",
  messagingSenderId: "356962970269",
  appId: "1:356962970269:web:eee3853587a6695c6fc274",
  measurementId: "G-JELKJQMXN8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
