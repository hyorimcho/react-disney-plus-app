// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkZHlAPPILdMzdw24Ov0ayat1X2P8rqHU",
  authDomain: "react-disney-plus-app-d84b8.firebaseapp.com",
  projectId: "react-disney-plus-app-d84b8",
  storageBucket: "react-disney-plus-app-d84b8.appspot.com",
  messagingSenderId: "531944078461",
  appId: "1:531944078461:web:35fdf543fb5b99f4e40514",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
