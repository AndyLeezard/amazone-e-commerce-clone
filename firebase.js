import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//capitalizing it won't work.
const firebaseConfig = {
  apiKey: process.env.firebase_apiKey,
  authDomain: process.env.firebase_authDomain,
  projectId: process.env.firebase_projectId,
  storageBucket: process.env.firebase_storageBucket,
  messagingSenderId: process.env.firebase_messagingSenderId,
  appId: process.env.firebase_appId,
  measurementId: process.env.firebase_measurementId
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
  
  const db = app.firestore();
  const auth = firebase.auth();

export {db, auth};