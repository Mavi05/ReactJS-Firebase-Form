import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAAj83OWg74eUHaXcXriVYFklT5AZAC7m0",
    authDomain: "deevesoft-14fc0.firebaseapp.com",
    databaseURL: "https://deevesoft-14fc0.firebaseio.com",
    projectId: "deevesoft-14fc0",
    storageBucket: "deevesoft-14fc0.appspot.com",
    messagingSenderId: "647484469246",
    appId: "1:647484469246:web:8a6fc60ec3474b8b"
};

const firebaseConf = firebase.initializeApp(config);

export default firebaseConf;
