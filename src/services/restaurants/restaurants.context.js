import React, { useContext, useState, useEffect, createContext } from 'react';

import {
  restaurantsRequest,
  restaurantsTransform,
} from './restaurants.service';
import { LocationContext } from '../location/location.context';

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { location } = useContext(LocationContext);

  useEffect(() => {
    const retrieveRestaurants = () => {
      setIsLoading(true);
      setRestaurants([]);
      setTimeout(async () => {
        try {
          const result = restaurantsTransform(
            await restaurantsRequest(`${location.lat},${location.lng}`)
          );
          setRestaurants(result);
        } catch (e) {
          setError(e);
        }
        setIsLoading(false);
      }, 3000);
    };

    retrieveRestaurants();
  }, [location]);

  return (
    <RestaurantContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantContext.Provider>
  );
};
