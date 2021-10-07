import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  setDoc,
  query,
  orderBy,
  doc
} from 'firebase/firestore';

import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBVjIWLsXI1tg5QKckgk6IRaVadJlCl3t4',
  authDomain: 'twotter-843fe.firebaseapp.com',
  projectId: 'twotter-843fe',
  storageBucket: 'twotter-843fe.appspot.com',
  messagingSenderId: '233762147239',
  appId: '1:233762147239:web:3b2bc786044a02f15e4482',
  measurementId: 'G-ZPWD5H2Q0D'
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

const auth = getAuth();

export async function signInWithGoogle(callBackSignInDone) {
  signInWithPopup(auth, provider)
    .then((result) => {
      const userData = result.user;
      const userDataFormated = {
        uid: userData.uid,
        displayName: userData.displayName,
        photoURL: userData.photoURL,
        email: userData.email,
        connected: true
      };
      callBackSignInDone(userDataFormated);
      delete userDataFormated.connected;
      addUser(userDataFormated);
    })
    .catch((error) => {
      console.error(error);
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
}

export async function logOut(callBackSignOutDone) {
  auth
    .signOut()
    .then(() => {
      callBackSignOutDone();
    })
    .catch((err) => console.error(err));
}

export function addTwott(ownerId, twott) {
  const twottContent = {
    ownerId,
    twottTime: new Date(),
    twottContent: twott
  };
  addDoc(collection(db, 'twotts'), twottContent);
}

export function subscribeTwotts(callback) {
  const q = query(collection(db, 'twotts'), orderBy('twottTime'));
  onSnapshot(q, callback);
}

export function addUser(userData) {
  const uidOfUser = userData.uid;
  delete userData.uid;
  let dataOfUserWithoutUid = userData;
  dataOfUserWithoutUid = { ...dataOfUserWithoutUid, createdAt: new Date() };
  setDoc(doc(db, 'users', uidOfUser), dataOfUserWithoutUid);
}

export { db };
