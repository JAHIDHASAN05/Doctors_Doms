// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:import.meta.env.VITE_apiKey,
//   authDomain:import.meta.env.VITE_authDomain,
//   projectId:import.meta.env.VITE_projectId,
//   storageBucket:import.meta.env.VITE_storageBucket,
//   messagingSenderId:import.meta.env.VITE_messagingSenderId,
//   appId:import.meta.env.VITE_appId
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export default app;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDY214y2UraoR1w206v1pw4kod_CnAQaBQ",
  authDomain: "doctors-doms.firebaseapp.com",
  projectId: "doctors-doms",
  storageBucket: "doctors-doms.appspot.com",
  messagingSenderId: "1033143548079",
  appId: "1:1033143548079:web:a3757f57aa1724476b3c5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;