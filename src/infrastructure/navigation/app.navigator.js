import React, { useContext } from 'react';
import { Text, Button } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import { AuthenticationContext } from '../../services/authentication/authentication.context';
import { SafeArea } from '../../components/utility/safe-area.component';
import { RestaurantNavigator } from './restaurant.navigator';
import { SettingsNavigator } from './settings.navigator';
import { MapScreen } from '../../features/map/screens/map.screen';

import { RestaurantContextProvider } from '../../services/restaurants/restaurants.context';
import { LocationContextProvider } from '../../services/location/location.context';
import { FavoriteContextProvider } from '../../services/favorites/favorites.context';

const SettingsScreen = () => {
  const { logout } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <Text>Settings!</Text>
      <Button title="Logout" onPress={() => logout()} />
    </SafeArea>
  );
};

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: 'md-restaurant',
  Map: 'md-map',
  Settings: 'md-settings',
};

// following is a good pattern
// const tabBarIcon =
//   (iconName) =>
//   ({ size, color }) =>
//     <Ionicons name={iconName} size={size} color={color} />;

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    // tabBarIcon: tabBarIcon(iconName),
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
  };
};

export const AppNavigator = () => {
  return (
    <FavoriteContextProvider>
      <LocationContextProvider>
        <RestaurantContextProvider>
          <Tab.Navigator screenOptions={createScreenOptions}>
            <Tab.Screen
              name="Restaurants"
              component={RestaurantNavigator}
              options={{ headerShown: false }}
            />
            <Tab.Screen
              name="Map"
              component={MapScreen}
              options={{ headerShown: false }}
            />
            <Tab.Screen
              name="Settings"
              component={SettingsNavigator}
              options={{ headerShown: false }}
            />
          </Tab.Navigator>
        </RestaurantContextProvider>
      </LocationContextProvider>
    </FavoriteContextProvider>
  );
};
