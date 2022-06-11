// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHVjz3pciVJTLZSPitIcSddFzcFGRBM0M",
  authDomain: "my-profile-1630c.firebaseapp.com",
  projectId: "my-profile-1630c",
  storageBucket: "my-profile-1630c.appspot.com",
  messagingSenderId: "657364253562",
  appId: "1:657364253562:web:63e3353e077cd65d86f4c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;