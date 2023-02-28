import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";;

const firebaseConfig = {
    apiKey: "AIzaSyABW4cbOlYou874Jw25c4RxB_L7HW_jp7c",
    authDomain: "had-app-be971.firebaseapp.com",
    projectId: "had-app-be971",
    storageBucket: "had-app-be971.appspot.com",
    messagingSenderId: "110322825658",
    appId: "1:110322825658:web:091458605b5e3eea774583",
    measurementId: "G-SYBRDBJH64"
  };

  const app = initializeApp(firebaseConfig);
  export const authentication = getAuth(app);
