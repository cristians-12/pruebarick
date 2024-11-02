// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAo9WTa9Ojtmcw36iqtrFghUtLORHbUXhI",
  authDomain: "rickymorty-d5a3e.firebaseapp.com",
  projectId: "rickymorty-d5a3e",
  storageBucket: "rickymorty-d5a3e.firebasestorage.app",
  messagingSenderId: "128391058935",
  appId: "1:128391058935:web:61080d2bf11a136639caf2",
  measurementId: "G-9NMN7EGYXJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
