import React, { useState } from "react";
import { initializeApp } from "@firebase/app";
import {
    browserLocalPersistence,
    createUserWithEmailAndPassword,
    getAuth,
    GithubAuthProvider,
    GoogleAuthProvider,
    setPersistence,
    signInWithEmailAndPassword,
    signInWithPopup,
    TwitterAuthProvider,
} from "firebase/auth";
import { addDoc, collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const AuthContext = React.createContext({
    app: null,
    isLoggedIn: false,
    user: null,
    signup: async () => { },
    login: async () => { },
    logout: async () => { },
});

const firebaseConfig = {
    apiKey: "AIzaSyANTrpnizBULjNaoI-b-Vrb-pHCd_a5IKw",
    authDomain: "dotslash-6-c5860.firebaseapp.com",
    projectId: "dotslash-6-c5860",
    storageBucket: "dotslash-6-c5860.appspot.com",
    messagingSenderId: "1049809652829",
    appId: "1:1049809652829:web:143566742f3537f5f951b4",
    measurementId: "G-DHZ895EKHK"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(app);

export const AuthContextProvider = (props) => {
    const [user, setUser] = useState(
        localStorage.getItem("user") === "undefined" ? null : JSON.parse(localStorage.getItem("user"))
    );
    const [isLoggedIn, setIsLoggedIn] = useState(user ? true : false);

    const login = async (method = "EMAIL", data) => {
        let provider = null;
        let result = null;
        let u = {};

        // use authentication method based on method parameter
        switch (method) {
            case "EMAIL":
                await setPersistence(auth, browserLocalPersistence);
                result = await signInWithEmailAndPassword(auth, data.email, data.password);
                break;
            case "GOOGLE":
                provider = new GoogleAuthProvider();
                result = await signInWithPopup(auth, provider);
                break;
            case "GITHUB":
                provider = new GithubAuthProvider();
                result = await signInWithPopup(auth, provider);
                break;
            case "TWITTER":
                provider = new TwitterAuthProvider();
                result = await signInWithPopup(auth, provider);
                break;
            default:
                break;
        }
        // user object stored in localStorage
        u = { displayName: result.user.displayName, email: result.user.email, uid: result.user.uid };
        try {
            console.log(result.user.uid);
            const usersRef = collection(db, "users"); // reference to users collection
            const q = query(usersRef, where("uid", "==", result.user.uid)); // create a query object
            const querySS = await getDocs(q); // get querySnapShot based on the query object

            if (querySS.empty) {
                // create user document if user does not exists
                const docRef = await addDoc(usersRef, u);
                console.log("Document created with reference", docRef.id);
            } else {
                // the user already exists, get users data
                console.log("User already exists");
                console.log(querySS.docs[0].data());
                u = querySS.docs[0].data();
            }
        } catch (err) {
            console.log(err);
            return;
        }
        setUser(u);
        setIsLoggedIn(true);
        localStorage.setItem("user", JSON.stringify(u));
        localStorage.setItem("isLoggedIn", true);

        
    };

    const signup = async (data) => {
        let u = null;
        await setPersistence(auth, browserLocalPersistence);
        try {
            console.log(data);
            let result = await createUserWithEmailAndPassword(auth, data.email, data.password); // create account for user
            const { displayName, email, uid } = result.user;
            let u = { displayName, email, uid };
            console.log(u);

            const usersRef = collection(db, "users"); // reference to 'users' collection
            // create user document if user does not exists
            const docRef = await addDoc(usersRef, u);
            console.log("Document created with reference", docRef.id);
        } catch (err) {
            console.log(err);
            return;
        }

        setUser(u);
        setIsLoggedIn(true);
        localStorage.setItem("user", JSON.stringify(u));
        localStorage.setItem("isLoggedIn", true);
    };

    const logout = () => {
        setUser(null);
        setIsLoggedIn(false);
        localStorage.removeItem("user");
        localStorage.setItem("isLoggedIn", false);
    };

    return (
        <AuthContext.Provider value={{ app, isLoggedIn, user, signup, login, logout }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
