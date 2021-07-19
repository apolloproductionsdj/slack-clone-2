import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA1onslFnfXdEcCoeX_eQIOPkwJQHHmEXA",
    authDomain: "slack-clone-2-91b32.firebaseapp.com",
    projectId: "slack-clone-2-91b32",
    storageBucket: "slack-clone-2-91b32.appspot.com",
    messagingSenderId: "44833977975",
    appId: "1:44833977975:web:7b31b2ff1a007a5e64b872"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db }