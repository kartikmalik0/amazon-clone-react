// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7yprrdKxn3GYMnOjVwYdmr7Lugx0012U",
    authDomain: "clone-5e20a.firebaseapp.com",
    projectId: "clone-5e20a",
    storageBucket: "clone-5e20a.appspot.com",
    messagingSenderId: "4327166707",
    appId: "1:4327166707:web:aaa1e2e633b3ef1f659d86"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig;