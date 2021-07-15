import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyD9qFn-MfQclOlsx0B8afL3wUhi0YYCCTs',
  authDomain: 'slack-clone-project-17315.firebaseapp.com',
  projectId: 'slack-clone-project-17315',
  storageBucket: 'slack-clone-project-17315.appspot.com',
  messagingSenderId: '369118227201',
  appId: '1:369118227201:web:174ea101ae208715648900',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };