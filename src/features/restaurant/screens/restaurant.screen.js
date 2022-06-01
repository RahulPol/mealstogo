import React, { useContext, useState } from 'react';
import { FlatList, Pressable, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native-paper';

import { RestaurantContext } from '../../../services/restaurants/restaurants.context';
import { FavoriteContext } from '../../../services/favorites/favorites.context';
import { Spacer } from '../../../components/spacer/spacer.component';
import { FavoritesBar } from '../../../components/favorites/favorites-bar.component';

import { FadeInView } from '../../../components/animations/fade.animation';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { Search } from './../components/search.component';
import {
  Loading,
  LoadingContainer,
  // RestaurantListContainer, // TODO: check why this is not working!
} from './restaurant.screen.styles';

export const RestaurantsScreen = ({ navigation }) => {
  const [isToggled, setIsToggled] = useState(false);

  const restaurantContext = useContext(RestaurantContext);
  const { restaurants, isLoading, error } = restaurantContext;

  const { favorites } = useContext(FavoriteContext);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <Search
        isFavoritesToggled={isToggled}
        onFavoritesToggled={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavoritesBar favorites={favorites} onNavigate={navigation.navigate} />
      )}
      <FlatList
        data={restaurants}
        renderItem={({ item }) => (
          // TODO: fix this warning, no key
          <>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('RestaurantDetail', { restaurant: item })
              }
            >
              <FadeInView>
                <RestaurantInfoCard restaurant={item} />
              </FadeInView>
            </TouchableOpacity>
            <Spacer variant="bottom.small" />
          </>
        )}
        keyExtractor={(items) => items.name}
        contentContainerStyle={{ padding: 16 }}
      />
      {/* <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer> */}
    </SafeArea>
  );
};
