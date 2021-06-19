import firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCGZ8C-nuEXBfiR7zOLrlvdAOMGA03a4qg",
  authDomain: "react-gallery-e4bbf.firebaseapp.com",
  projectId: "react-gallery-e4bbf",
  storageBucket: "react-gallery-e4bbf.appspot.com",
  messagingSenderId: "247712680608",
  appId: "1:247712680608:web:6489db14e4cdb6be6157c5",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
