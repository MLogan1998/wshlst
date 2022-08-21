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

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logOut = () => {
    localStorage.removeItem('f_token');
    signOut(auth);
  }

  const signInWithGoogle =  () => {
    const google = new GoogleAuthProvider();
    return signInWithPopup(auth, google)
  };

  const getUserId = () => firebase.auth().currentUser.uid;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if(auth.currentUser){localStorage.setItem('f_token', auth.currentUser.uid);}
    })
    return () => {
      unsubscribe();
    }
  }, []);


  return (
    <userAuthContext.Provider value={{user, signUp, logIn, logOut, signInWithGoogle, getUserId, }}>{children}</userAuthContext.Provider>
  )
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
