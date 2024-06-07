import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getDatabase } from "firebase/database";

//Martin Ilguan Prueba


const firebaseConfig = {
  apiKey: "AIzaSyBcfBdJABwQa2FMhduWppt-BZXuUqidWrs",
  authDomain: "pruebailguanmartin.firebaseapp.com",
  projectId: "pruebailguanmartin",
  storageBucket: "pruebailguanmartin.appspot.com",
  messagingSenderId: "1091497658106",
  appId: "1:1091497658106:web:8c2d7f6a6d69fb9272ab43"
};

const firebase = initializeApp(firebaseConfig);

export const auth = initializeAuth(firebase, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const database = getDatabase(firebase);