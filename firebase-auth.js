import { auth } from './firebase-setup.js'; // Import the auth object from firebase-setup.js
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

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
            document.getElementById('signupError').textContent = error.message;
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
        })
        .catch((error) => {
            document.getElementById('loginError').textContent = error.message;
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
