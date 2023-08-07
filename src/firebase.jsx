import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCo4XyX40Q6n_y4_XdU5rYg_9QIpjsyc80",
    authDomain: "linkedin-clone-7ba05.firebaseapp.com",
    projectId: "linkedin-clone-7ba05",
    storageBucket: "linkedin-clone-7ba05.appspot.com",
    messagingSenderId: "507818766882",
    appId: "1:507818766882:web:c8a30c25f9553a13f4907b",
    measurementId: "G-9QD21YT6T3"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db , auth}