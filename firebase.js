// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCBqW_WICpvJxUhC9jOVWghLbRtBAPqxSM",
  authDomain: "react-native-instagram-c-af2c4.firebaseapp.com",
  projectId: "react-native-instagram-c-af2c4",
  storageBucket: "react-native-instagram-c-af2c4.appspot.com",
  messagingSenderId: "1067283025046",
  appId: "1:1067283025046:web:2c105c5d4a38422af206b7"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
!firebase.apps.length ? 
firebase.initializeApp(firebaseConfig) : 
firebase.app()

const db = firebase.firestore()
export { firebase, db }