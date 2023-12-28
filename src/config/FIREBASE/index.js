import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyDVFfTvWKy3RlFVx5ueRTRtiU-kNI2ygvo",
    authDomain: "tajwidku-1041c.firebaseapp.com",
    databaseURL: "https://tajwidku-1041c-default-rtdb.firebaseio.com",
    projectId: "tajwidku-1041c",
    storageBucket: "tajwidku-1041c.appspot.com",
    messagingSenderId: "1069568152565",
    appId: "1:1069568152565:web:1508e01fdee6a08a2886bc"
});

const FIREBASE = firebase;

export default FIREBASE;
export const database = firebase.database();