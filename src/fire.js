import React from 'react';
import firebase from "firebase";


// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCdKVT5uUR4FzLdZguyyAxwAW6gRctrFWo",
    authDomain: "react-login-page-38201.firebaseapp.com",
    projectId: "react-login-page-38201",
    storageBucket: "react-login-page-38201.appspot.com",
    messagingSenderId: "1092394340738",
    appId: "1:1092394340738:web:e8c9b5456a11dc5b7f3f9b"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;