import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASm2By6DlBrZD0-ZRIvmvUsiCaWUOd3m8",
  authDomain: "coder-shop-93036.firebaseapp.com",
  projectId: "coder-shop-93036",
  storageBucket: "coder-shop-93036.appspot.com",
  messagingSenderId: "678748041644",
  appId: "1:678748041644:web:0d3c1cc5a4b81974d2ca09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);