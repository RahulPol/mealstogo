import React, { useState, useContext } from 'react';
import { ActivityIndicator, Colors } from 'react-native-paper';

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  GoogleButton,
  SocialContainer,
} from '../components/account.styles';
import { Text } from '../../../components/typography/text.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { googleLogin, login, isLoading, error } = useContext(
    AuthenticationContext
  );
  return (
    <AccountBackground>
      <AccountCover />
      <Text variant="appTitle"> MealsToGo</Text>
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <Spacer variant="top.large" />
        <AuthInput
          label="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          secure
          onChangeText={(p) => setPassword(p)}
        />

        {error && (
          <>
            <Spacer variant="top.large" />
            <Text variant="error">{error.code}</Text>
          </>
        )}
        <Spacer variant="top.large" />
        {!isLoading ? (
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => login(email, password)}
          >
            Login
          </AuthButton>
        ) : (
          <ActivityIndicator animating color={Colors.blue300} />
        )}
      </AccountContainer>
      <SocialContainer>
        <GoogleButton
          icon="google"
          mode="contained"
          onPress={() => googleLogin()}
        >
          Sign in with Google
        </GoogleButton>
      </SocialContainer>
      <Spacer variant="top.large" />
      <AuthButton mode="contained" onPress={() => navigation.goBack()}>
        Back
      </AuthButton>
    </AccountBackground>
  );
};
