import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD7g4uO6i1_MX-Qe9kXMLrmsgeFWMvM-Sg",
  authDomain: "fir-react-569e9.firebaseapp.com",
  databaseURL: "https://fir-react-569e9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fir-react-569e9",
  storageBucket: "fir-react-569e9.appspot.com",
  messagingSenderId: "19062922758",
  appId: "1:19062922758:web:109605f281b2ecc2d36d87"
};


export const app = initializeApp(firebaseConfig);