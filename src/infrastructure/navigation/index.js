import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppNavigator } from './app.navigator';
import { AccountNavigator } from './account.navigator';

import { AuthenticationContext } from '../../services/authentication/authentication.context';

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  console.log(`isAuthenticated: ${isAuthenticated}`);

  // the navigation wrapper is more extensible
  // as here, you can go with the app navigation or auth navigation
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
