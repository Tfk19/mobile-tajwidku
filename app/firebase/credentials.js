// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
// import { getAuth } from "@firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyDVFfTvWKy3RlFVx5ueRTRtiU-kNI2ygvo",
  authDomain: "tajwidku-1041c.firebaseapp.com",
  projectId: "tajwidku-1041c",
  storageBucket: "tajwidku-1041c.appspot.com",
  messagingSenderId: "1069568152565",
  appId: "1:1069568152565:web:1508e01fdee6a08a2886bc"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
// export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const FIRESTORE = getFirestore(FIREBASE_APP);