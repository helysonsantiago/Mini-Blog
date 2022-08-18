import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAq0HgAbuSL4VeUMgsma0DC173M6vqC3xs",
  authDomain: "mini-blog-778dd.firebaseapp.com",
  projectId: "mini-blog-778dd",
  storageBucket: "mini-blog-778dd.appspot.com",
  messagingSenderId: "543292214564",
  appId: "1:543292214564:web:e47aa30a518a26305cf7b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
