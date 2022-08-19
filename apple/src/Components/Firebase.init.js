// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsoBG51MP7ivu6O5ltNsMNgQvc-qUWRHY",
  authDomain: "apple-b6e8a.firebaseapp.com",
  projectId: "apple-b6e8a",
  storageBucket: "apple-b6e8a.appspot.com",
  messagingSenderId: "705188670101",
  appId: "1:705188670101:web:aacdd6d88ce3a7d582099c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth