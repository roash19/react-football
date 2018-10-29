import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyC-LhfhzKR_J2tbYKbbyv6lvdFBwoROiBg",
  authDomain: "react-football-5d448.firebaseapp.com",
  databaseURL: "https://react-football-5d448.firebaseio.com",
  projectId: "react-football-5d448",
  storageBucket: "react-football-5d448.appspot.com",
  messagingSenderId: "835577019906"
};
firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');

export {
  firebase,
  firebaseMatches
}