// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqo9T1og87qVBGh16L677Gq4l6xOQ4ntg",
  authDomain: "ades-healthcare.firebaseapp.com",
  projectId: "ades-healthcare",
  storageBucket: "ades-healthcare.appspot.com",
  messagingSenderId: "913991224011",
  appId: "1:913991224011:web:622046575db3a913aea94e",
  measurementId: "G-6VJKV1F234",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
