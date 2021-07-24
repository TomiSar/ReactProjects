import firebase from "firebase";

const firebaseConfig = {
  apiKey: 'AIzaSyCXiwqekn_Hn0fAkguB9S1A1MpDPvMS_Gs',
  authDomain: 'linkedin-clone-735a3.firebaseapp.com',
  projectId: 'linkedin-clone-735a3',
  storageBucket: 'linkedin-clone-735a3.appspot.com',
  messagingSenderId: '870358232586',
  appId: '1:870358232586:web:acdc019762aff3db6239f3',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.EmailAuthProvider();

export const { auth, provider };
export default db;