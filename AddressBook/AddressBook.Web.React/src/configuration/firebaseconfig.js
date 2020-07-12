import firebase from "@firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: 'AIzaSyAhCpFb0QqnNwEZkVz7DbXUvtne5euEkAg',
    authDomain: 'addressbook-github.firebaseapp.com',
    databaseURL: 'https://addressbook-github.firebaseio.com',
    projectId: 'addressbook-github',
    storageBucket: 'addressbook-github.appspot.com',
    messagingSenderId: 'XXXXXXX',
    appId: "1:594743702405:web:a93ed40afd7c1d65b20aec"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider(); 

export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
};

export const signOut = () => {
    auth.signOut();
}