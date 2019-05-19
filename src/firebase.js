import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAAj83OWg74eUHaXcXriVYFklT5AZAC7m0",
    authDomain: "deevesoft-14fc0.firebaseapp.com",
    databaseURL: "https://deevesoft-14fc0.firebaseio.com"
};

const firebaseConf = firebase.initializeApp(config);

export default firebaseConf;
