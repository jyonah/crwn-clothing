import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyD4iUnRcmoHOZuBc1lO_J5o3H-IdMqEg5M",
    authDomain: "crwn-db-4385a.firebaseapp.com",
    databaseURL: "https://crwn-db-4385a.firebaseio.com",
    projectId: "crwn-db-4385a",
    storageBucket: "",
    messagingSenderId: "323100297263",
    appId: "1:323100297263:web:b8b73131b6858b49"
  };


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;