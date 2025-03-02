import { initializeApp } from 'firebase/app';
import { connectAuthEmulator, getAuth, GoogleAuthProvider, GithubAuthProvider  } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCjBG57ebtga5F_4b_dxRlLtQfUwnyWUpA",
    authDomain: "open-pet-rescue.firebaseapp.com",
    projectId: "open-pet-rescue",
    storageBucket: "open-pet-rescue.firebasestorage.app",
    messagingSenderId: "945201764670",
    appId: "1:945201764670:web:0e01b1fbad1c8b175a346f"
  };  

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

if (window.location.hostname === "localhost") {
    connectAuthEmulator(auth, "http://localhost:9099");
}

export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
