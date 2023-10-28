import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBvI6aYjy7P05FKKCwe3vbXyIYrT_MhfFE",
    authDomain: "shop-app-auth-cc9eb.firebaseapp.com",
    projectId: "shop-app-auth-cc9eb",
    storageBucket: "shop-app-auth-cc9eb.appspot.com",
    messagingSenderId: "20733301134",
    appId: "1:20733301134:web:a56c275aba151c713fd4df"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);



