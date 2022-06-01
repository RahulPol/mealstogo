import React, { useState, useContext, useEffect } from 'react';
import { Searchbar } from 'react-native-paper';

import { LocationContext } from '../../../services/location/location.context';
import { SearchContainer } from './search.styles';

export const Search = ({ isFavoritesToggled, onFavoritesToggled }) => {
  const { keyword, search } = useContext(LocationContext);

  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        icon={isFavoritesToggled ? 'heart' : 'heart-outline'}
        onIconPress={onFavoritesToggled}
        value={searchKeyword}
        onChangeText={(text) => setSearchKeyword(text)}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
      />
    </SearchContainer>
  );
};
