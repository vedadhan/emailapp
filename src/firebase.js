import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAefzY4KncS45hJu6uX5Ru9HSuLcjX_oRI",
    authDomain: "emailapp-d9d61.firebaseapp.com",
    projectId: "emailapp-d9d61",
    storageBucket: "emailapp-d9d61.appspot.com",
    messagingSenderId: "117453114865",
    appId: "1:117453114865:web:313d54b0507480dddfc850",
    measurementId: "G-W7ZP9L57GY"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };