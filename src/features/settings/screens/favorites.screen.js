import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

import { FavoriteContext } from '../../../services/favorites/favorites.context';

import { SafeArea } from '../../../components/utility/safe-area.component';
import { Text } from '../../../components/typography/text.component';
import { Spacer } from '../../../components/spacer/spacer.component';

import { RestaurantList } from '../../restaurant/components/restaurants-list.style';
import { RestaurantInfoCard } from '../../restaurant/components/restaurant-info-card.component';

const NoFavoritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;
export const FavoritesScreen = ({ navigation }) => {
  const { favorites } = useContext(FavoriteContext);

  return favorites.length ? (
    <SafeArea>
      <RestaurantList
        data={favorites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('RestaurantDetail', {
                  restaurant: item,
                })
              }
            >
              <Spacer variant="bottom.large" />
              <RestaurantInfoCard restaurant={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <NoFavoritesArea>
      <Text center>No favorites yet</Text>
    </NoFavoritesArea>
  );
};
