// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAwFiSWY70UZYlYr7AxTseumLQuPjJciCs",
    authDomain: "vue3-examples.firebaseapp.com",
    projectId: "vue3-examples",
    storageBucket: "vue3-examples.appspot.com",
    messagingSenderId: "328688395628",
    appId: "1:328688395628:web:26ab780a005fa7e9b2ff49"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
export const chatsRef = db.ref("chats");

export default firebase;