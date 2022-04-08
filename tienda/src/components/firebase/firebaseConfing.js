// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5BYR71azvDn6HiGpg18kNMIiRvhDm_aE",
  authDomain: "joyeria-avant-d3304.firebaseapp.com",
  databaseURL: "https://joyeria-avant-d3304-default-rtdb.firebaseio.com",
  projectId: "joyeria-avant-d3304",
  storageBucket: "joyeria-avant-d3304.appspot.com",
  messagingSenderId: "887475414348",
  appId: "1:887475414348:web:317857ba2be880ec83dbe9",
  measurementId: "G-P9TJ8XW28B"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

console.log(db)
export default db;
