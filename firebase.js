import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAekKRPD9FivPKND33QXPTwPZ21kxn7vfc",
  authDomain: "new-e-abd00.firebaseapp.com",
  projectId: "new-e-abd00",
  storageBucket: "new-e-abd00.appspot.com",
  messagingSenderId: "905130006151",
  appId: "1:905130006151:web:245288fa448af888510a22",
  measurementId: "G-GXHB6VTQGE"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
  
  const db = app.firestore();

export default db;