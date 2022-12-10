// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7BFwaYRnwkA70geE4hjMgc4SnNfc0Tg8",
  authDomain: "fir-auth-725b7.firebaseapp.com",
  projectId: "fir-auth-725b7",
  storageBucket: "fir-auth-725b7.appspot.com",
  messagingSenderId: "402602205621",
  appId: "1:402602205621:web:ecd5ba9b8f9380a621f9fc"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };