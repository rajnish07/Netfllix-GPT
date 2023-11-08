// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "netflix-gpt-122e1.firebaseapp.com",
  projectId: "netflix-gpt-122e1",
  storageBucket: "netflix-gpt-122e1.appspot.com",
  messagingSenderId: "676657577540",
  appId: "1:676657577540:web:3cbd7c9a7c4107d66d4611",
  measurementId: "G-7EDRGRL6EP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
