import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword,
         signInWithEmailAndPassword,
         signOut,
         onAuthStateChanged,
         GoogleAuthProvider,
         signInWithPopup
       } from "firebase/auth"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { auth, firebaseConfig } from '../firebase';

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser ] = useState({})

  const signUp = (email, password) => createUserWithEmailAndPassword(auth, email, password);

  const logIn = (email, password) => signInWithEmailAndPassword(auth, email, password);

  const logOut = () => signOut(auth);


  const signInWithGoogle =  () => {
    const google = new GoogleAuthProvider();
    return signInWithPopup(auth, google)
  };

  const getUserId = () => firebase.auth().currentUser.uid;

  const connection = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app();
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    })
    return () => {
      unsubscribe();
    }
  }, []);


  return (
    <userAuthContext.Provider value={{user, signUp, logIn, logOut, signInWithGoogle, getUserId, connection }}>{children}</userAuthContext.Provider>
  )
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
