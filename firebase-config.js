// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdRzTjyVu7cwvhoUFTqZsLlRnmHx77t_0",
  authDomain: "fir-website-32e50.firebaseapp.com",
  projectId: "fir-website-32e50",
  storageBucket: "fir-website-32e50.appspot.com",
  messagingSenderId: "908676658823",
  appId: "1:908676658823:web:35d7f2a8e453f2cbe8ea22",
  measurementId: "G-XQKPYCL968"
};

// Export the Firebase configuration
export { firebaseConfig };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Import the Firebase configuration from the generated file
import { firebaseConfig } from './firebase-config.js'; // Adjust the path if needed

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
