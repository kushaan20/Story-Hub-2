import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyAZK5MKubQmw6zy4jWDkNkVyJVNOCwWw1o",
    authDomain: "story-hub-ea930.firebaseapp.com",
    databaseURL: "https://story-hub-ea930.firebaseio.com",
    projectId: "story-hub-ea930",
    storageBucket: "story-hub-ea930.appspot.com",
    messagingSenderId: "900634991220",
    appId: "1:900634991220:web:62774a894469b19b1b8f21"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();