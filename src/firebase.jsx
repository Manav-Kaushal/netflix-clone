import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDxQgE3qz-Sa-xl3UhGPL2DnKzlJ0swi-M",
  authDomain: "netflix-build-d55e6.firebaseapp.com",
  projectId: "netflix-build-d55e6",
  storageBucket: "netflix-build-d55e6.appspot.com",
  messagingSenderId: "942668601776",
  appId: "1:942668601776:web:a0f084e9ca144217ed9e75",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;