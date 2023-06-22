import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBL3-rEq6Gl5v2jwQgpXMUA0oljrUBfcOE",
    authDomain: "disneyplus-clone-67b1e.firebaseapp.com",
    projectId: "disneyplus-clone-67b1e",
    storageBucket: "disneyplus-clone-67b1e.appspot.com",
    messagingSenderId: "887679838483",
    appId: "1:887679838483:web:62a8f9da851e95f63ad2e6"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Firebase Database
const db = firebaseApp.firestore();

// Firebase Authentication
const auth = firebase.auth();

// Useful for adding in google, social login.
const provider = new firebase.auth.GoogleAuthProvider();

const storage = firebase.storage();

export { auth, provider, storage };
export default db;