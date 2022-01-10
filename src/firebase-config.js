
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyBFkmDqeSAu3yTfsr07uPJjAg3tKF8tctU",
  authDomain: "fir-teste-d7be7.firebaseapp.com",
  projectId: "fir-teste-d7be7",
  storageBucket: "fir-teste-d7be7.appspot.com",
  messagingSenderId: "224728779648",
  appId: "1:224728779648:web:6c45efba1d5e23a8600f65",
  measurementId: "G-TKXF8SJ5CC"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

export const  db = getFirestore(app);
