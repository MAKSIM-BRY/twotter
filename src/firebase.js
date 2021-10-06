// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
//import { getAnalytics } from 'firebase/analytics';
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  query,
  orderBy
} from 'firebase/firestore';

import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBVjIWLsXI1tg5QKckgk6IRaVadJlCl3t4',
  authDomain: 'twotter-843fe.firebaseapp.com',
  projectId: 'twotter-843fe',
  storageBucket: 'twotter-843fe.appspot.com',
  messagingSenderId: '233762147239',
  appId: '1:233762147239:web:3b2bc786044a02f15e4482',
  measurementId: 'G-ZPWD5H2Q0D'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);

const db = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

const auth = getAuth();

export async function signInWithGoogle() {
  // auth.signOut();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
      console.log(result);
      console.log(credential);
      console.log(token);
      console.log(user);
    })
    .catch((error) => {
      console.error(error);
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}

export async function logOut() {
  auth.signOut().catch((err) => console.error(err));
}

export function addTwott(twott) {
  const twottContent = {
    ownerId: '00X',
    twottTime: new Date(),
    twottContent: twott
  };
  addDoc(collection(db, 'twotts'), twottContent);
}

export function subscribeTwotts(callback) {
  const q = query(collection(db, 'twotts'), orderBy('twottTime'));
  onSnapshot(q, callback);
}

export { db };
