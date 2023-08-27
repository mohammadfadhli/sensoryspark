// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLC8iV360gHj470JBgK3W1BD8HC0FqS7w",
  authDomain: "hackathon-final-bae8f.firebaseapp.com",
  projectId: "hackathon-final-bae8f",
  storageBucket: "hackathon-final-bae8f.appspot.com",
  messagingSenderId: "85859869696",
  appId: "1:85859869696:web:7d79f98bc3f2578e97a4e5"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);  

const auth = getAuth(app);
export {auth}
