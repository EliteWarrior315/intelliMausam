import firebase from 'firebase/app'
import 'firebase/database'

// initialize database

const config = {
    apiKey: "",
  authDomain: "i",
  databaseURL: "",
  projectId: "a",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

firebase.initializeApp(config);

export default firebase;
