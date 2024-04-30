import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyHn_Nlzu-z7400qmkFDiW905govD8A44",
  authDomain: "fit-finesse.firebaseapp.com",
  projectId: "fit-finesse",
  storageBucket: "fit-finesse.appspot.com",
  messagingSenderId: "200048079514",
  appId: "1:200048079514:web:9bcd6430f9792268b2e523",
  measurementId: "G-HG7EMFGNGZ",
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
