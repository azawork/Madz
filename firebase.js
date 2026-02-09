// Import Firebase functions (modern modular SDK)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.24.0/firebase-app.js";
import { getFirestore, collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.24.0/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8s4zuysWQH7hT18hnKUt96wgirBFODLA",
  authDomain: "spaza-app-8f69c.firebaseapp.com",
  projectId: "spaza-app-8f69c",
  storageBucket: "spaza-app-8f69c.appspot.com",
  messagingSenderId: "69621333151",
  appId: "1:69621333151:web:d69dae9362b4b7ba3476aa",
  measurementId: "G-46GS3FYHSQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export db for use in reviews.js
export { db, collection, addDoc, query, orderBy, onSnapshot, serverTimestamp };
