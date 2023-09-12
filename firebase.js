import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKfT3uwtglt9DQnEaXDTZWxMaXQxin-No",
  authDomain: "react-deployment-demo-70793.firebaseapp.com",
  projectId: "react-deployment-demo-70793",
  storageBucket: "react-deployment-demo-70793.appspot.com",
  messagingSenderId: "872072184993",
  appId: "1:872072184993:web:608ac54fbbfe91dd715ce0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
