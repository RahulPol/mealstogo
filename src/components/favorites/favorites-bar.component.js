import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import { Spacer } from '../spacer/spacer.component';
import { CompactRestaurantInfo } from '../restaurant/compact-restaurant-info.component';
import { Text } from '../typography/text.component';

const FavoritesWrapper = styled.View`
  padding: 10px;
`;
export const FavoritesBar = ({ favorites, onNavigate }) => {
  if (!favorites.length) {
    return null;
  }
  return (
    <FavoritesWrapper>
      <Spacer variant="left.medium" />
      <Text variant="caption">Favorites</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <>
              <Spacer variant="left.medium" />
              <TouchableOpacity
                onPress={() =>
                  onNavigate('RestaurantDetail', {
                    restaurant,
                  })
                }
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </>
          );
        })}
      </ScrollView>
    </FavoritesWrapper>
  );
};
