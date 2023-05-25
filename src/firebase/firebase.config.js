// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

/*
apiKey: "AIzaSyAXf9Bg0LAmMb0UiEm1LBSiD76UXrCXxzg",
  authDomain: "gnius-car.firebaseapp.com",
  projectId: "gnius-car",
  storageBucket: "gnius-car.appspot.com",
  messagingSenderId: "434658764547",
  appId: "1:434658764547:web:5037f568dc709f02cf2b36"

*/

/*

apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId
*/