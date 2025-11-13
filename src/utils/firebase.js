// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API,
    authDomain: "netflixgpt-2c816.firebaseapp.com",
    projectId: "netflixgpt-2c816",
    storageBucket: "netflixgpt-2c816.firebasestorage.app",
    messagingSenderId: "277869138949",
    appId: "1:277869138949:web:53c9ef3b0ab7ec65dc386c",
    measurementId: "G-4ZZKXL5HRF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();