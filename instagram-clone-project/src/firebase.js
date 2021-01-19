// For Firebase JS SDK v7.20.0 and later, measurementId is optional --> npm install firebase
//https://console.firebase.google.com/ --> create cloud firestone database
//Create DB and get the config file in Projects settings/general/Firebase SDK snippet
//Add config file to firebase.js
//Firebase User Aurhentication -> Setup Sign-in method/Email/Password ()
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCHmOMoC6opvOfGo0tcopT-fUJXkfKBWQY",
    authDomain: "instagram-clone-react-pr-a8460.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-project.firebaseio.com",
    projectId: "instagram-clone-react-pr-a8460",
    storageBucket: "instagram-clone-react-pr-a8460.appspot.com",
    messagingSenderId: "429314259156",
    appId: "1:429314259156:web:07841c316e0073dbbe2341",
    measurementId: "G-BDKYBN1C00"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage(); 

export { db, auth, storage };