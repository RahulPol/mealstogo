import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';

export const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space.md};
`;

// export const RestaurantList = styled(FlatList).attr({
//   contentContainerStyle: {
//     padding: 16,
//   },
// });

export const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;
