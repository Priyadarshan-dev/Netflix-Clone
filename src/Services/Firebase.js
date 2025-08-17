// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBNStvq9VVz741vEh2YPg4OB3CEMqX-jHU",
    authDomain: "netflix-clone-e6d9e.firebaseapp.com",
    projectId: "netflix-clone-e6d9e",
    storageBucket: "netflix-clone-e6d9e.firebasestorage.app",
    messagingSenderId: "342808860809",
    appId: "1:342808860809:web:6db7fbbca95a740ae34e58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export default app;