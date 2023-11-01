// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrgTk_ERvoHaDhzjj_tJ7Oc8OWtMseoR0",
  authDomain: "whatsapp-clone-f1408.firebaseapp.com",
  projectId: "whatsapp-clone-f1408",
  storageBucket: "whatsapp-clone-f1408.appspot.com",
  messagingSenderId: "558354202387",
  appId: "1:558354202387:web:dd465348211501b1f7a4e6",
  measurementId: "G-QRCMFRZQSE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);