import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyB0730TLAQPssqg2qxqLEQqwy0hfzXJbCc",

    authDomain: "restaurant-e4448.firebaseapp.com",
  
    projectId: "restaurant-e4448",
  
    storageBucket: "restaurant-e4448.appspot.com",
  
    messagingSenderId: "941021759187",
  
    appId: "1:941021759187:web:da7a5e1a6b93a8bca53626"
  

};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);