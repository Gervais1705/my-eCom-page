// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbYD5U9j1bmv6Vp0k6Fc3Wc7mo0r-Nw5E",
  authDomain: "e-commerce-spacecats.firebaseapp.com",
  projectId: "e-commerce-spacecats",
  storageBucket: "e-commerce-spacecats.appspot.com",
  messagingSenderId: "455577561112",
  appId: "1:455577561112:web:2a443cd4a184a0d1b67b6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;