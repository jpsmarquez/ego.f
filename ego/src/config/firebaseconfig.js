import * as firebase from 'firebase';
import "firebase/auth";

const Aplicacion =  {
  apiKey: "AIzaSyBkeISy8mRFTQaO6tMJxFoisgU6ppFAtog",
  authDomain: "egdeo-app.firebaseapp.com",
  databaseURL: "https://egdeo-app.firebaseio.com",
  projectId: "egdeo-app",
  storageBucket: "egdeo-app.appspot.com",
  messagingSenderId: "209060058382",
  appId: "1:209060058382:web:0524132f918e632651735f",
  measurementId: "G-XRYWKRC3NT"
  };
  // Initialize Firebase
  firebase.initializeApp(Aplicacion);
  firebase.analytics();

export {Aplicacion};
