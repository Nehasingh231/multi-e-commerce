// src/context/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

import { onAuthStateChanged } from "firebase/auth"; 

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser(null); // important: update context!
        console.log("Logged out");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };


  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsub();
  }, []);

  return (
    <AuthContext.Provider value={{ user, logout }}> 
      {children}
    </AuthContext.Provider>
  );
};