import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaczfvdzcdzczdccuMM",
  authDomain: "fintick.firebaseapp.com",
  databaseURL: "https://fintick-default-rtdb.firebaseio.com",
  projectId: "fintick",
  storageBucket: "fintick.appspot.com",
  messagingSenderId: "344534583987",
  appId: "1:48408088cxzcxzcv
  measurementId: "G-LJxzcxzcvxD"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

// const analytics = getAnalytics(firebaseApp);
