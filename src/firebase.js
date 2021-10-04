// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
//import { getAnalytics } from 'firebase/analytics';
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  onSnapshot,
  setDoc,
  addDoc
} from 'firebase/firestore';
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

export function addTwott(twott) {
  const twottContent = {
    ownerId: '00X',
    twottTime: new Date(),
    twottContent: twott
  };
  addDoc(collection(db, 'twotts'), twottContent);
}

export function subscribeTwotts(callback) {
  onSnapshot(collection(db, 'twotts'), callback);
}

export { db };
