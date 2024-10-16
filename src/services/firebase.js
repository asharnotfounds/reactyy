import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc, doc, setDoc, getDocs, getDoc } from "firebase/firestore";


const firebaseConfig = {

  apiKey: "x",
  authDomain: "x",
  projectId: "x",
  storageBucket: "x",
  messagingSenderId: "x",
  appId: "x"

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
  signOut };