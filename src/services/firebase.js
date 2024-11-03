import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateEmail, sendEmailVerification, validatePassword } from "firebase/auth";
import { getFirestore, collection, addDoc, doc, setDoc, getDocs, getDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC9fEu1m290Ww4Y0mz8kaL1136ES_0aiLE",
  authDomain: "dwss-dea5c.firebaseapp.com",
  projectId: "dwss-dea5c",
  storageBucket: "dwss-dea5c.firebasestorage.app",
  messagingSenderId: "920155255877",
  appId: "1:920155255877:web:47ff19e79f3b1e7e841f2c"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app)


export { 
  auth, 
  db,
  doc, 
  setDoc,
  addDoc,
  getDoc,
  getDocs,
  collection, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut,
  updateEmail,
  sendEmailVerification,
  validatePassword
 };