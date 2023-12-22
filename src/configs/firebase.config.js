// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHTgrMDWh3I261_ugGJ_B3Dcisexy5MwU",
  authDomain: "manageme-todo.firebaseapp.com",
  projectId: "manageme-todo",
  storageBucket: "manageme-todo.appspot.com",
  messagingSenderId: "937698578176",
  appId: "1:937698578176:web:674cd86c508fd435d22de5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth