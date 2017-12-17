import * as firebase from 'firebase';
 // Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDYvQaRPag_1pvnBLkxWRQEAOjujYONYu8",
  authDomain: "contactmanager-a73ef.firebaseapp.com",
  databaseURL: "https://contactmanager-a73ef.firebaseio.com",
  storageBucket: "",
};
const myFirebaseApp = firebase.initializeApp(firebaseConfig);

export default myFirebaseApp
