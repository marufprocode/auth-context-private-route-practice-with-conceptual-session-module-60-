// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChSCrm46yyQ6HF5uPYAxHt22Ikc3TgKzc",
  authDomain: "auth-recap-with-context.firebaseapp.com",
  projectId: "auth-recap-with-context",
  storageBucket: "auth-recap-with-context.appspot.com",
  messagingSenderId: "433098921902",
  appId: "1:433098921902:web:fe61e7f630d595c1375a3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;