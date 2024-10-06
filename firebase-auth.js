import { auth } from './firebase-setup.js'; // Import the auth object from firebase-setup.js
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

// Sign Up Function
window.signup = function () {
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Sign-up successful!");
            document.getElementById('signupError').textContent = '';
            document.getElementById('signupForm').reset();
        })
        .catch((error) => {
            // Customize error messages based on error code
            const errorMessage = error.code === 'auth/email-already-in-use' 
                ? 'This email is already in use.'
                : error.message;
            document.getElementById('signupError').textContent = errorMessage;
        });
};

// Login Function
window.login = function () {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Login successful!");
            document.getElementById('loginError').textContent = '';
            document.getElementById('loginForm').reset();
            document.getElementById('logoutButton').style.display = 'block'; // Show the logout button after successful login
            
            // Optionally redirect to another page
            // window.location.href = 'dashboard.html'; // Uncomment to redirect
        })
        .catch((error) => {
            // Customize error messages based on error code
            const errorMessage = error.code === 'auth/wrong-password' 
                ? 'Incorrect password. Please try again.'
                : error.message;
            document.getElementById('loginError').textContent = errorMessage;
        });
};

// Logout Function
window.logout = function () {
    signOut(auth).then(() => {
        alert("Logged out successfully!");
        document.getElementById('logoutButton').style.display = 'none'; // Hide the logout button after logout
    }).catch((error) => {
        console.error("Error logging out:", error);
    });
};

// Listen for authentication state changes
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in
        console.log('User is signed in:', user);
        document.getElementById('logoutButton').style.display = 'block'; // Show logout button
    } else {
        // User is signed out
        console.log('User is signed out');
        document.getElementById('logoutButton').style.display = 'none'; // Hide logout button
    }
});
