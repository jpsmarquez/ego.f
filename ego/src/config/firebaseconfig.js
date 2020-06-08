import * as firebase from 'firebase';
import "firebase/auth";

const Aplicacion =  {
    apiKey: "AIzaSyCsrJwOTh9EsWqCiyvXtuUoelsBsohcAIU",
    authDomain: "egdeomx.firebaseapp.com",
    databaseURL: "https://egdeomx.firebaseio.com",
    projectId: "egdeomx",
    storageBucket: "egdeomx.appspot.com",
    messagingSenderId: "1012924663671",
    appId: "1:1012924663671:web:3592cc97e4dd67cdec0372",
    measurementId: "G-QL4JJ74DJY"
  };
  // Initialize Firebase
  firebase.initializeApp(Aplicacion);
  firebase.analytics();

export {Aplicacion};
