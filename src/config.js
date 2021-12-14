import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDT7cBYkZmPbnHdfnlpt6I8amIV0_duwRw",
    authDomain: "team-b016c.firebaseapp.com",
    databaseURL: "https://team-b016c-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "team-b016c",
    storageBucket: "team-b016c.appspot.com",
    messagingSenderId: "657234540227",
    appId: "1:657234540227:web:33fa9818efd59ac7af5476",
    measurementId: "G-EGL8FM1WTG"
}

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

