// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

import { getAuth } from 'firebase/auth';

import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyDhrYFQ2zsN1R326W3YTuxo-dJOQBvhNJ8",

    authDomain: "chatapp-67c07.firebaseapp.com",

    databaseURL: "https://chatapp-67c07-default-rtdb.firebaseio.com",

    projectId: "chatapp-67c07",

    storageBucket: "chatapp-67c07.appspot.com",

    messagingSenderId: "547018093679",

    appId: "1:547018093679:web:1d8686995669f60cd9c99a",

    measurementId: "G-7PBLRQ9GMM"

};


// Initialize Firebase

export const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const db = getDatabase();
