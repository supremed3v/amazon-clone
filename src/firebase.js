import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATZgwP3sPZVpYoSQ-gh6hvNoMNgEWqXjw",
  authDomain: "clone-7c60d.firebaseapp.com",
  projectId: "clone-7c60d",
  storageBucket: "clone-7c60d.appspot.com",
  messagingSenderId: "1073072890395",
  appId: "1:1073072890395:web:abf435402c3aeac34ecebe",
  measurementId: "G-816T9RSG96",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
