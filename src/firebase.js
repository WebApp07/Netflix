import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTNoN9wud9BdDYG3JhUeoDo4_2q8yokfM",
  authDomain: "netflix-9dc26.firebaseapp.com",
  projectId: "netflix-9dc26",
  storageBucket: "netflix-9dc26.appspot.com",
  messagingSenderId: "875339497600",
  appId: "1:875339497600:web:71823e42d83df9394f2665",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
