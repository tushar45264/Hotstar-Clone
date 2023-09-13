import { initializeApp } from 'firebase/app';
import { getFirestore ,collection} from 'firebase/firestore'; // Use 'lite' version for Firestore
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';


 const firebaseConfig = {
    apiKey: "AIzaSyBcIc9hpbOvTn_3IctlFj5GfaChOI7SrLs",
    authDomain: "hotstar-clone-783fd.firebaseapp.com",
    projectId: "hotstar-clone-783fd",
    storageBucket: "hotstar-clone-783fd.appspot.com",
    messagingSenderId: "719510900543",
    appId: "1:719510900543:web:5e9cfe2332ff270f660d8a",
    measurementId: "G-JGH9Q9YLRH"
  };
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const storage = getStorage(app);
  
  export { auth,app, provider, storage,collection };
  export default db;

// just the start of firebase
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBcIc9hpbOvTn_3IctlFj5GfaChOI7SrLs",
//   authDomain: "hotstar-clone-783fd.firebaseapp.com",
//   projectId: "hotstar-clone-783fd",
//   storageBucket: "hotstar-clone-783fd.appspot.com",
//   messagingSenderId: "719510900543",
//   appId: "1:719510900543:web:5e9cfe2332ff270f660d8a",
//   measurementId: "G-JGH9Q9YLRH"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);