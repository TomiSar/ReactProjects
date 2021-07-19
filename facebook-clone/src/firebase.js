import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDfnvaZBvqhvy0zI2bCnCjFQZBZymzCwPA",
    authDomain: "facebook-clone-cd09f.firebaseapp.com",
    projectId: "facebook-clone-cd09f",
    storageBucket: "facebook-clone-cd09f.appspot.com",
    messagingSenderId: "871407449456",
    appId: "1:871407449456:web:bc93db5551f59d8c25cbb5",
    measurementId: "G-GQ5VDP6WDZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;