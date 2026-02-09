// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
import { getFirestore, collection, addDoc, onSnapshot, serverTimestamp, query, orderBy } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB8s4zuysWQH7hT18hnKUt96wgirBFODLA",
  authDomain: "spaza-app-8f69c.firebaseapp.com",
  projectId: "spaza-app-8f69c",
  storageBucket: "spaza-app-8f69c.appspot.com",
  messagingSenderId: "69621333151",
  appId: "1:69621333151:web:d69dae9362b4b7ba3476aa",
  measurementId: "G-46GS3FYHSQ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, collection, addDoc, onSnapshot, serverTimestamp, query, orderBy };
