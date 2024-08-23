
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGMfwKIS_T87j9kAKBjmGgfFub9_p4MiQ",
  authDomain: "antonewtonq.firebaseapp.com",
  projectId: "antonewtonq",
  storageBucket: "antonewtonq.appspot.com",
  messagingSenderId: "664241737651",
  appId: "1:664241737651:web:0340b3b9a7eda4315045c6",
  measurementId: "G-FFJLM7VS16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };