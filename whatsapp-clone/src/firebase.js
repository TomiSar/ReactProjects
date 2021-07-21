import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyA59rRnBRJflzrYProgNtp_WIPk0WiA2H4',
  authDomain: 'whatsapp-clone-5f6ba.firebaseapp.com',
  projectId: 'whatsapp-clone-5f6ba',
  storageBucket: 'whatsapp-clone-5f6ba.appspot.com',
  messagingSenderId: '593655818995',
  appId: '1:593655818995:web:d831aebe759a62bc20a586',
};

const firebaseApp = firebase.initializeApp();
const db = firebaseApp.firestore();
const auth = firestore.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default { db, auth, provider } ;