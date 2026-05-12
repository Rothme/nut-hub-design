// NUT Financial Hub — Firebase Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyB7HMW0HsGF43kNypj4Uyc3X7P3qa0Uk6I",
  authDomain: "nut-financial-hub.firebaseapp.com",
  projectId: "nut-financial-hub",
  storageBucket: "nut-financial-hub.firebasestorage.app",
  messagingSenderId: "982343043448",
  appId: "1:982343043448:web:156f027a2ab6c6224f608d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
