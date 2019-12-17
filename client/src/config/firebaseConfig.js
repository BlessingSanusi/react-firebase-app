import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'



 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBeEVzxFxBZ9QK3ESCzOqG6GDk6rkEq2o0",
    authDomain: "project-management-app-64fbb.firebaseapp.com",
    databaseURL: "https://project-management-app-64fbb.firebaseio.com",
    projectId: "project-management-app-64fbb",
    storageBucket: "project-management-app-64fbb.appspot.com",
    messagingSenderId: "190887272138",
    appId: "1:190887272138:web:969ba3b33d783d560dde33",
    measurementId: "G-V3FEGBQY2P"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.firestore().settings({ timestampsInSnapshots: true})

  export default firebase;