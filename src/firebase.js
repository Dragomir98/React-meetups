import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCDVdH107v_3mwdeDKjvJrTXqO2npWRcaM",
  authDomain: "react-meetups-e5862.firebaseapp.com",
  databaseURL: "https://react-meetups-e5862-default-rtdb.firebaseio.com",
  projectId: "react-meetups-e5862",
  storageBucket: "react-meetups-e5862.appspot.com",
  messagingSenderId: "750545996129",
  appId: "1:750545996129:web:8a37555e53a74de45b9d20",
};
firebase.initializeApp(firebaseConfig);

export default firebase;
