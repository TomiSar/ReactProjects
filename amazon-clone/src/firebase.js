import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBA69CEgsaXnw2LUHWyXt0VOXDSJLvNCMw',
  authDomain: 'clone-9d1e8.firebaseapp.com',
  projectId: 'clone-9d1e8',
  storageBucket: 'clone-9d1e8.appspot.com',
  messagingSenderId: '721899845996',
  appId: '1:721899845996:web:76a49cc7ec9dbee9ec9b49',
  measurementId: 'G-K0RWLL0R01',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };