import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
	apiKey: "AIzaSyDnUpSdwe9OQ6007gW7gsJq2SqdvIf6jPU",
	authDomain: "crwn-db-f7ada.firebaseapp.com",
	projectId: "crwn-db-f7ada",
	storageBucket: "crwn-db-f7ada.appspot.com",
	messagingSenderId: "799808655035",
	appId: "1:799808655035:web:a5adf47ec14ee5d557639e",
	measurementId: "G-E3X2C9XM9H",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
