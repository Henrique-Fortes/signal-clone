import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyASP6u39qPaeHJ4n2yYSCgKSz7RRRvACgI",
	authDomain: "signal-clone-b7a2c.firebaseapp.com",
	projectId: "signal-clone-b7a2c",
	storageBucket: "signal-clone-b7a2c.appspot.com",
	messagingSenderId: "192645829562",
	appId: "1:192645829562:web:50890e4888aca420adc383",
};

let app;

if (firebase.apps.length === 0) {
	app = firebase.initializeApp(firebaseConfig);
} else {
	app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
