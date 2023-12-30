
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js"
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"
  // https://firebase.google.com/docs/web/setup#available-libraries
  

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB-2eMy81I2VTRzF50q1rqOM0ytA8izgNA",
    authDomain: "fir-app-1cc2d.firebaseapp.com",
    projectId: "fir-app-1cc2d",
    storageBucket: "fir-app-1cc2d.appspot.com",
    messagingSenderId: "779588621882",
    appId: "1:779588621882:web:8634418602baec00824703"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth (app)
  export const db = getFirestore(app)
