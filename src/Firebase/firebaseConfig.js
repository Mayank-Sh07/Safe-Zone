import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBRrj_qpzy1LtGSoz5yOfB03eq8UMyKl5c",
  authDomain: "safezone-7460.firebaseapp.com",
  databaseURL: "https://safezone-7460.firebaseio.com",
  projectId: "safezone-7460",
  storageBucket: "safezone-7460.appspot.com",
  messagingSenderId: "262226003361",
  appId: "1:262226003361:web:3188980cc85e5ae163b7e0",
  measurementId: "G-T8Q5H27JC7",
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export default database;
