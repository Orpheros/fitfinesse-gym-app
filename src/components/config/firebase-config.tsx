import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVfMAdDOA0GPLtQk_Em3aLO5TTuDRXUPQ",
  authDomain: "expense-tracker-7ae76.firebaseapp.com",
  projectId: "expense-tracker-7ae76",
  storageBucket: "expense-tracker-7ae76.appspot.com",
  messagingSenderId: "70769079727",
  appId: "1:70769079727:web:22fb26276f2361bfc6eb5a",
  measurementId: "G-18GBGLLY52",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
// const analytics = getAnalytics(app);

// firebase login
// firebase init
// firebase deploy
