// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCndLWz-iRr7B21wv_JuV7fcmC5g4eA24w",
  authDomain: "ema-john-with-firebase-a-fd41c.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-fd41c",
  storageBucket: "ema-john-with-firebase-a-fd41c.appspot.com",
  messagingSenderId: "667122892210",
  appId: "1:667122892210:web:d10a1098173ccb97ecb8ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;