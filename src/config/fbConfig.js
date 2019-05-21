import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCZOKrXxx_lOGipreUMW0xW1w9Lro9SDOg",
    authDomain: "teamhub-12c7d.firebaseapp.com",
    databaseURL: "https://teamhub-12c7d.firebaseio.com",
    projectId: "teamhub-12c7d",
    storageBucket: "teamhub-12c7d.appspot.com",
    messagingSenderId: "617771406685",
    appId: "1:617771406685:web:6e872f7211b46dda"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapShots: true })

  export default firebase;