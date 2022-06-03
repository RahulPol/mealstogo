import React, { createContext, useState, useEffect } from 'react';
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
  signOut,
} from 'firebase/auth';
import * as WebBrowser from 'expo-web-browser';
import { ResponseType } from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';

import { loginRequest, registerRequest } from './authentication.service';
import app from '../firebase/firebase.service';

WebBrowser.maybeCompleteAuthSession();

export const auth = getAuth(app);

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId:
      '746181946432-joig27ah7h710f8drl7ek5rv1tcvfto8.apps.googleusercontent.com',
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;

      const googleAuth = getAuth();
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(googleAuth, credential);
    }
  }, [response]);

  // TODO: fix this warning
  useEffect(() => {
    onAuthStateChanged(auth, (usr) => {
      if (usr) {
        setUser(usr);
      } else {
        setUser(null);
      }
    });
  }, []);

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

  const googleLogin = async () => {
    setIsLoading(true);
    try {
      promptAsync();
    } catch (e) {
      setError(e);
    }
    setIsLoading(false);
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
        googleLogin,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
