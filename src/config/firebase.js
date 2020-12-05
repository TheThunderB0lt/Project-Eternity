import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAwvqBBryz7fbMx48H8OPQnplB1QP0S2ag",
  authDomain: "project-eternity-dbd4e.firebaseapp.com",
  databaseURL: "https://project-eternity-dbd4e.firebaseio.com",
  projectId: "project-eternity-dbd4e",
  storageBucket: "project-eternity-dbd4e.appspot.com",
  messagingSenderId: "102822527496",
  appId: "1:102822527496:web:7a8199b56e0ca5ccfe87bd",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
