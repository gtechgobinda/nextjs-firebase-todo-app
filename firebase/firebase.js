import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA_sAkBk99Z9Y8JrGH8ajqLslqNZ9qC2SU",
  authDomain: "nextjs-firebase-todo-app-c7317.firebaseapp.com",
  projectId: "nextjs-firebase-todo-app-c7317",
  storageBucket: "nextjs-firebase-todo-app-c7317.appspot.com",
  messagingSenderId: "790440800063",
  appId: "1:790440800063:web:6565ffc0aa871a3dd02d8a"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);
