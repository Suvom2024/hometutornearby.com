import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQcX_tum3iOa3DMEEBkGpcYU3HiP-T7fE",
    authDomain: "sign-in-data-home-town-t-472da.firebaseapp.com",
    projectId: "sign-in-data-home-town-t-472da",
    storageBucket: "sign-in-data-home-town-t-472da.appspot.com",
    messagingSenderId: "323917644109",
    appId: "1:323917644109:web:4eea335a255ef5638db704",
    measurementId: "G-LVTE49SRZ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
const database = getDatabase(app);

export { database, ref, set };

export default firebaseConfig;
