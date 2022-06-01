import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { List, Avatar } from 'react-native-paper';

import { Text } from '../../../components/typography/text.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space.sm};
`;
const AvatarContainer = styled.View`
  padding-top: ${(props) => props.theme.space.md}
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { logout, user } = useContext(AuthenticationContext);

  return (
    <SafeArea>
      <AvatarContainer>
        <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
        <Spacer variant="top.large" />
        <Text variant="label">{user.email}</Text>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title="Favorites"
          description="View your favorites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate('Favorites')}
        />
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={logout}
        />
      </List.Section>
    </SafeArea>
  );
};
