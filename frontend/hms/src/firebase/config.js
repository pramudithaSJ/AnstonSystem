// import * as firebase from 'firebase/app';
// var firebase = require('firebase/app');
import firebase from "firebase";
import 'firebase/storage';
import 'firebase/firestore';

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyBBnxqXXn33v6aUEZZ1Ne4giJSltejQyp0",
        authDomain: "hotelms-e2c1d.firebaseapp.com",
        databaseURL: "https://hotelms-e2c1d-default-rtdb.firebaseio.com",
        projectId: "hotelms-e2c1d",
        storageBucket: "hotelms-e2c1d.appspot.com",
        messagingSenderId: "11149223129",
        appId: "1:11149223129:web:72d11e6005e0a6a7634ac8",
        measurementId: "G-6VX63WX8WJ"
      };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };