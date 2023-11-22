import firebase from "firebase";
require("@firebase/firestore");

//Coloque aqui seu SDK


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
