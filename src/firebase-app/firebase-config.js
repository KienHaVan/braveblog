import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBxIdzYrCi0XD7fHX4qT6Asd6BddJOZ6N4",
  authDomain: "monkey-blogging-16b38.firebaseapp.com",
  projectId: "monkey-blogging-16b38",
  storageBucket: "monkey-blogging-16b38.appspot.com",
  messagingSenderId: "397230158691",
  appId: "1:397230158691:web:dca0c0c7003e1f32d35956",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
