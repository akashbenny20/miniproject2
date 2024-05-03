
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDpobe0CLCA5qJILcPSJd0hIuKg1Dt9HIE",
    authDomain: "ai-legalease.firebaseapp.com",
    databaseURL: "https://ai-legalease-default-rtdb.firebaseio.com",
    projectId: "ai-legalease",
    storageBucket: "ai-legalease.appspot.com",
    messagingSenderId: "671784949113",
    appId: "1:671784949113:web:a75159f67e2d912577cba8",
    measurementId: "G-LT4DH1BGLH"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app); // Get Auth instance
  const analytics = getAnalytics(app);

  const signUpForm = document.querySelector('form');

signUpForm.addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevent default form submission

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    // Create user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Update user display name
    // await updateProfile(user, { displayName: name });

    // Redirect or show success message
    alert('Sign up successful!');
  } catch (error) {
    console.error('Sign up error:', error.message);
    alert(error.message); // Display error message to user
  }
});
 

