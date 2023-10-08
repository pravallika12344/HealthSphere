// Import the functions you need from the SDKs you need
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDsXL4v5A-KBKgzbBlMMrpemdIbCWvqB7g",
    authDomain: "healthsphere-17c44.firebaseapp.com",
    projectId: "healthsphere-17c44",
    storageBucket: "healthsphere-17c44.appspot.com",
    messagingSenderId: "1098989068627",
    appId: "1:1098989068627:web:9b9c162cbbc0ad797cc1a6",
    measurementId: "G-0RRNKE1FL5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, db, provider, storage };
