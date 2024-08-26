import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase.config";

export const doSignInWithEmailAndPassword = (email:string,password:string) => {
    return signInWithEmailAndPassword(auth,email,password);
};

export const doSignOut = () => {
    return auth.signOut();
};