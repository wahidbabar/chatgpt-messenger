import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAikrKgRkPxT5rkO5nnbro2L7I5rbHXuUg",
  authDomain: "chatgpt-messenger-3f27c.firebaseapp.com",
  projectId: "chatgpt-messenger-3f27c",
  storageBucket: "chatgpt-messenger-3f27c.appspot.com",
  messagingSenderId: "906963220893",
  appId: "1:906963220893:web:495b839321a64f38599774",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);
