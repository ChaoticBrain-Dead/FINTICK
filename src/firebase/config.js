import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAeM7c3pDRpNNClEm8eRwHYShvucIgyuMM",
  authDomain: "fintick.firebaseapp.com",
  databaseURL: "https://fintick-default-rtdb.firebaseio.com",
  projectId: "fintick",
  storageBucket: "fintick.appspot.com",
  messagingSenderId: "484080883987",
  appId: "1:484080883987:web:a54d5cb83fb78b887d62e6",
  measurementId: "G-LJZJ6KD54D"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

// const analytics = getAnalytics(firebaseApp);