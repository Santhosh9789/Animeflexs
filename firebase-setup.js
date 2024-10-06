// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDdRzTjyVu7cwvhoUFTqZsLlRnmHx77t_0",  // Replace with your own API key
    authDomain: "fir-website-32e50.firebaseapp.com",  // Replace with your own auth domain
    projectId: "fir-website-32e50",                   // Replace with your own project ID
    storageBucket: "fir-website-32e50.appspot.com",   // Replace with your own storage bucket
    messagingSenderId: "908676658823",                 // Replace with your own messaging sender ID
    appId: "1:908676658823:web:35d7f2a8e453f2cbe8ea22",  // Replace with your own app ID
    measurementId: "G-XQKPYCL968"                      // Replace with your own measurement ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Firebase Authentication

console.log("Firebase initialized successfully.");

// Export the auth object for use in other files
export { auth };
