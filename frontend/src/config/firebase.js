// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZL3LBSxVmARVG-WUfIpeBuTZU63OM4Vw",
  authDomain: "inteligreen.firebaseapp.com",
  projectId: "inteligreen",
  storageBucket: "inteligreen.firebasestorage.app",
  messagingSenderId: "275426894229",
  appId: "1:275426894229:web:64c130aeb8b994af57569c",
  measurementId: "G-46DC51591V",
  databaseURL: "https://inteligreen-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const rtdb = getDatabase(app);

export { app, db, rtdb };

// const firebaseConfig = {
//   apiKey: "AIzaSyC5k7Izr58mJyjqmGbxJ5f4BaFapxvGEG4",
//   authDomain: "intelligreen-e5bd8.firebaseapp.com",
//   projectId: "intelligreen-e5bd8",
//   storageBucket: "intelligreen-e5bd8.firebasestorage.app",
//   messagingSenderId: "247365550558",
//   appId: "1:247365550558:web:edc30e73a79dcb558d9d4f",
//   measurementId: "G-LYX4Z8PTEG"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);