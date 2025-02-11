// Importa las funciones necesarias de Firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

// Configuración de Firebase (ya la tienes)
const firebaseConfig = {
  apiKey: "AIzaSyAPunyYhRPi_3G-tvIy7rdTdrE19z5u8K8",
  authDomain: "resenasweb-76eea.firebaseapp.com",
  projectId: "resenasweb-76eea",
  storageBucket: "resenasweb-76eea.firebasestorage.app",
  messagingSenderId: "1077360753866",
  appId: "1:1077360753866:web:68cb990d2bd0226d2c4833",
  measurementId: "G-NC1JTE2JFK",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore
const db = getFirestore(app);

// Exporta las funciones que necesitas
export { db, collection, addDoc, getDocs };