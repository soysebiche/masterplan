// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB3ZZ2TP45oPUNFK9wPJoWXbY7nUN6C55g",
    authDomain: "masterplan-pe.firebaseapp.com",
    projectId: "masterplan-pe",
    storageBucket: "masterplan-pe.firebasestorage.app",
    messagingSenderId: "508760375216",
    appId: "1:508760375216:web:0be581a67c0d0eec6ee075",
    measurementId: "G-ESF2QR1GSL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup };
