import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/functions'
import 'firebase/auth'
import 'firebase/storage'

export const fbConfig = {
    apiKey: "AIzaSyDcYvtD_AosUOpoYu3NNVVTJtjC27-3OSQ",
    authDomain: "ngo-project-d0252.firebaseapp.com",
    databaseURL: "https://ngo-project-d0252.firebaseio.com",
    projectId: "ngo-project-d0252",
    storageBucket: "ngo-project-d0252.appspot.com",
    messagingSenderId: "887025802479",
    appId: "1:887025802479:web:549eddf38f9131e890cf1a",
    measurementId: "G-FLD81Q3VG1"
  };
  // Initialize Firebase
  firebase.initializeApp(fbConfig);
  firebase.firestore()
  firebase.functions()
  
  export default firebase