import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBJqlHwyVGgsvXUpAmmWMGvlMdSCOOTS5o",
  authDomain: "roomie-development.firebaseapp.com",
  projectId: "roomie-development",
  storageBucket: "roomie-development.appspot.com",
  messagingSenderId: "170483730801",
  appId: "1:170483730801:web:046b921ecac5adc474ced0",
  databaseURL: "http://roomie-development.firebaseapp.com",
});

export const auth = app.auth();

export const db = app.firestore();

export default app;
