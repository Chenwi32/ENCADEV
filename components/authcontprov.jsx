import React, { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword,  onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase";
import Cookies from "js-cookie";


const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({ email: null, uid: null });
  const [loading, setLoading] = useState(true);
  const [rememberMe, setRememberMe] = useState(true);

  useEffect(() => {
    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          email: user.email,
          uid: user.uid,
        });
      } else {
        setUser({ email: null, uid: null });
      }
    });
    setLoading(false);

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    Cookies.set('rememberMe', rememberMe)
  }, [rememberMe])

    const signUp = (email, password) => {
      
      return createUserWithEmailAndPassword(auth, email, password);
      
    }
   ;


  const logIn = (email, password) => {
    
        return signInWithEmailAndPassword(auth, email, password);
   
      
    };

    const logOut = async () => {
      setUser({ email: null, uid: null });
      await signOut(auth);
    };



  return (
    <AuthContext.Provider value={{ user, signUp, logIn, logOut, rememberMe, setRememberMe }}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
