// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCa08anjCK1jQaEC2PvK45Tzufu2j9lr1g",
  authDomain: "hackathon-a7ebd.firebaseapp.com",
  projectId: "hackathon-a7ebd",
  storageBucket: "hackathon-a7ebd.appspot.com",
  messagingSenderId: "440187860540",
  appId: "1:440187860540:web:ba24c06d312c97ae96b539"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);  

const auth = getAuth(app);
export {auth}
