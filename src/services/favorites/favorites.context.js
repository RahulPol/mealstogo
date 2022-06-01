import React, { createContext, useState, useEffect, useContext } from 'react';
// TODO: fix this warning
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthenticationContext } from '../authentication/authentication.context';

export const FavoriteContext = createContext();

export const FavoriteContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const [favorites, setFavorites] = useState([]);

  const saveFavorites = async (value, uid) => {
    console.log(`uid in save: ${uid}`);
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favorites-${uid}`, jsonValue);
    } catch (e) {
      console.log('error storing', e);
    }
  };

  const loadFavorites = async (uid) => {
    console.log(`uid in load: ${uid}`);
    try {
      const value = await AsyncStorage.getItem(`@favorites-${uid}`);
      if (value !== null) {
        setFavorites(JSON.parse(value));
      }
    } catch (e) {
      console.log('error loading', e);
    }
  };

  const add = (restaurant) => {
    setFavorites([...favorites, restaurant]);
  };

  const remove = (restaurant) => {
    const newFavorites = favorites.filter(
      (f) => f.placeId !== restaurant.placeId
    );

    setFavorites(newFavorites);
  };

  useEffect(() => {
    if (user && user.uid) {
      loadFavorites(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user && user.uid && favorites.length) {
      saveFavorites(favorites, user.uid);
    }
  }, [favorites, user]);

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        addToFavorites: add,
        removeFromFavorites: remove,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
