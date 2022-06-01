import React, { createContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

import { loginRequest, registerRequest } from './authentication.service';
import app from '../firebase/firebase.service';

export const auth = getAuth(app);

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // TODO: fix this warning
  useEffect(() => {
    onAuthStateChanged(auth, (usr) => {
      if (usr) {
        setUser(usr);
      } else {
        setUser(null);
      }
    });
  }, [user]);

  const login = (email, password) => {
    setIsLoading(true);
    loginRequest(auth, email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e);
      });
  };

  const register = (email, password, repeatedPassword) => {
    if (password !== repeatedPassword) {
      setError({ code: 'auth/passwordDoesntMatch' });
      return;
    }
    setIsLoading(true);
    registerRequest(auth, email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e);
      });
  };

  const logout = () => {
    setUser(null);
    signOut(auth);
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
