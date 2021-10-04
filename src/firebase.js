// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// IMPORT THE FUNCTION TO PULL IN THE FIREBASE REALTIME DATABASE SERVICE:
import { getDatabase } from 'firebase/database';


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyBY8MKz7Xx45ahEM5fQIbjSazhW_-qVn6s",

  authDomain: "netlify-test-64e52.firebaseapp.com",

  projectId: "netlify-test-64e52",

  storageBucket: "netlify-test-64e52.appspot.com",

  messagingSenderId: "435275431167",

  appId: "1:435275431167:web:fefcb35b69aab28f2160ca"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);


// GO GET THE REALTIME DATABASE SERVICE
const realtime = getDatabase(app);

export default realtime;
