import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBRmf0CaFiUS0rgm4lQNrbpHtKQ5Du7Bhc",
  authDomain: "animal-rescue-34435.firebaseapp.com",
  projectId: "animal-rescue-34435",
  storageBucket: "animal-rescue-34435.appspot.com",
  messagingSenderId: "706902960961",
  appId: "1:706902960961:web:ed90bbce0b8de0459c4fc0",
  measurementId: "G-3NMHGK0DXN",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = firebase.firestore();
const auth = firebase.auth();

export { auth, db };
