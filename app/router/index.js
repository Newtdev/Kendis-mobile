import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthRoute from './AuthRoute';
import AppRoute from './AppRoute';
import useAuthUser from 'hooks/useAuthUser';

export default function CustomNavigation({theme}) {
  const {user} = useAuthUser();
  return (
    <NavigationContainer theme={theme}>
      {user ? <AuthRoute /> : <AppRoute />}
    </NavigationContainer>
  );
}
