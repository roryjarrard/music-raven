import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCOLr9_gooYSW0QHwB5Vd4W70gCyRyaEBY",
    authDomain: "music-raven.firebaseapp.com",
    projectId: "music-raven",
    storageBucket: "music-raven.appspot.com",
    messagingSenderId: "205944779155",
    appId: "1:205944779155:web:1e89756b24e03abd38b866"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, timestamp };