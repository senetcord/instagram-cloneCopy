import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCdnMH2P9IuJQEFMp680KLlwEnVMUGvvX8",

  authDomain: "instagram-clone-dacd0.firebaseapp.com",

  projectId: "instagram-clone-dacd0",

  storageBucket: "instagram-clone-dacd0.appspot.com",

  messagingSenderId: "547145554568",

  appId: "1:547145554568:web:c46da004b1b975c3905d3d",

  measurementId: "G-9E2YRG4S1K",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
