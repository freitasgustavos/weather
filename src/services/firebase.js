import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBkFT25lhy8Ia__t7JlM8VOhrMrdiY6LGY",
    authDomain: "weather-db14c.firebaseapp.com",
    projectId: "weather-db14c",
    storageBucket: "weather-db14c.appspot.com",
    messagingSenderId: "590821489146",
    appId: "1:590821489146:web:8264ebc5f8ae8635964c43",
    measurementId: "G-MT5T1QCNR9"
};

firebase.initializeApp(firebaseConfig);

export default firebase;