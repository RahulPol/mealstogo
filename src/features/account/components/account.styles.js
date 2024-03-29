import styled from 'styled-components/native';
import { TouchableOpacity, Image } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { colors } from '../../../infrastructure/theme/colors';

export const AccountBackground = styled.ImageBackground.attrs({
  source: require('../../../../assets/home_bg.jpeg'),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space.lg};
  margin-top: ${(props) => props.theme.space.lg};
`;

export const SocialContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space.md};
  padding-left: ${(props) => props.theme.space.lg};
  padding-right: ${(props) => props.theme.space.lg};
  margin-top: ${(props) => props.theme.space.xs};
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space.sm};
`;

export const AuthInput = styled(TextInput)`
  width: 300px;
`;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 30px;
  padding: ${(props) => props.theme.space.sm};
`;

export const GoogleIcon = styled(Image)`
  height: 24px;
  width: 24px;
`;

// export const GoogleButton = styled(Button)`
//   width: 300px;
//   border-radius: ${(props) => props.theme.space.sm};
// `;

export const GoogleButton = styled(Button).attrs()`
  width: 300px;
  padding: ${(props) => props.theme.space.sm};
`;
