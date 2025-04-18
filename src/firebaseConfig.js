import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDiEhC2I-dZF-YdzTFQ0WTA6mXIH0Oq_zU",
    authDomain: "edueco-a19d0.firebaseapp.com",
    projectId: "edueco-a19d0",
    storageBucket: "edueco-a19d0.firebasestorage.app",
    messagingSenderId: "944443582928",
    appId: "1:944443582928:web:8e071e3f6b3865937831d5",
    measurementId: "G-J5K4V87B18"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
