import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: `${process.env.FIREBASE_API_KEY}`,
  authDomain: `${process.env.FIREBASE_DOMAIN_URL}`,
  projectId: "rickymorty-d5a3e",
  storageBucket: "rickymorty-d5a3e.firebasestorage.app",
  messagingSenderId: "128391058935",
  appId: "1:128391058935:web:61080d2bf11a136639caf2",
  measurementId: "G-9NMN7EGYXJ",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
