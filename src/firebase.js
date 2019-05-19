import firebase from 'firebase';

const config = {
    apiKey: "Your API Key",
    authDomain: "Your authentication domain",
    databaseURL: "URL of Database"
};

const firebaseConf = firebase.initializeApp(config);

export default firebaseConf;
