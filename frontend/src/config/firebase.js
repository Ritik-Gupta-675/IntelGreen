// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZL3LBSxVmARVG-WUfIpeBuTZU63OM4Vw",
  authDomain: "inteligreen.firebaseapp.com",
  projectId: "inteligreen",
  storageBucket: "inteligreen.firebasestorage.app",
  messagingSenderId: "275426894229",
  appId: "1:275426894229:web:64c130aeb8b994af57569c",
  measurementId: "G-46DC51591V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);