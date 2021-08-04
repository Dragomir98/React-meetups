import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDVdH107v_3mwdeDKjvJrTXqO2npWRcaM",
  authDomain: "react-meetups-e5862.firebaseapp.com",
  databaseURL: "https://react-meetups-e5862-default-rtdb.firebaseio.com",
  projectId: "react-meetups-e5862",
  storageBucket: "react-meetups-e5862.appspot.com",
  messagingSenderId: "750545996129",
  appId: "1:750545996129:web:8a37555e53a74de45b9d20",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// firebase.database().ref();

export default firebase;
