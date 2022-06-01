import React, { useState, useContext, useEffect } from 'react';
import { Searchbar } from 'react-native-paper';

import { LocationContext } from '../../../services/location/location.context';
import { SearchContainer } from './search.style';

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);

  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        value={searchKeyword}
        icon="map"
        onChangeText={(text) => setSearchKeyword(text)}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
      />
    </SearchContainer>
  );
};
