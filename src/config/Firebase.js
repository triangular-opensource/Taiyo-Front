// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCJNpKxxxIfa9wgkSW9xDYytygfuc7wibY",
    authDomain: "taiyo-768b4.firebaseapp.com",
    projectId: "taiyo-768b4",
    storageBucket: "taiyo-768b4.appspot.com",
    messagingSenderId: "468296642765",
    appId: "1:468296642765:web:a667d8fb3eced631d4b984",
    measurementId: "G-87SEJV0JXQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export { auth, analytics }