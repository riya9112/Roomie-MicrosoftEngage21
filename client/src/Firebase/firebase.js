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

// const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();

export default app;

// import firebase from "firebase";

// const firebaseConfig = {
//     apiKey: "AIzaSyBJqlHwyVGgsvXUpAmmWMGvlMdSCOOTS5o",
//     authDomain: "roomie-development.firebaseapp.com",
//     projectId: "roomie-development",
//     storageBucket: "roomie-development.appspot.com",
//     messagingSenderId: "170483730801",
//     appId: "1:170483730801:web:046b921ecac5adc474ced0",
//     databaseURL: "http://roomie-development.firebaseapp.com",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();

// export default db;
