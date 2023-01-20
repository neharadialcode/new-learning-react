import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAfTiLLoym1QU2QrG1MEX7ilUJHoGB9kfY",
  authDomain: "fir-data-save-dc7fa.firebaseapp.com",
  databaseURL: "https://fir-data-save-dc7fa-default-rtdb.firebaseio.com",
  projectId: "fir-data-save-dc7fa",
  storageBucket: "fir-data-save-dc7fa.appspot.com",
  messagingSenderId: "103747719636",
  appId: "1:103747719636:web:1cd209519a06c0634c0641",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
