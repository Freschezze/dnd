import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB79rMZxk_1Ca-5rGeM76xEcaGohN8Z66U",
  authDomain: "dnd-app-53258.firebaseapp.com",
  projectId: "dnd-app-53258",
  storageBucket: "dnd-app-53258.firebasestorage.app",
  messagingSenderId: "70449235625",
  appId: "1:70449235625:web:43821908d5f9a543764bb8"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { app, db };