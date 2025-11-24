// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';

// 🔹 Substitua pelos dados do seu projeto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCXSFXwS-BYi9uSufqQJgboN5hbfh95IdE",
  authDomain: "conectabd-b58eb.firebaseapp.com",
  projectId: "conectabd-b58eb",
  storageBucket: "conectabd-b58eb.appspot.com",
  messagingSenderId: "347595217563",
  appId: "1:347595217563:web:cb685efa1c92462883443e",
};
 
// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// ✅ Configura auth com persistência para React Native
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export const db = getFirestore(app);