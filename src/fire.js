import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZtScJP68DAQ4ZJdHM552j8w4-S29fGMU",
  authDomain: "hotel-janel.firebaseapp.com",
  projectId: "hotel-janel",
  storageBucket: "hotel-janel.appspot.com",
  messagingSenderId: "961866904145",
  appId: "1:961866904145:web:d574ace134c07e07eb7e70",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
