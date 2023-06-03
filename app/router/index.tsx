import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthRoute from './AuthRoute';
import AppRoute from './AppRoute';

export default function CustomNavigation() {
  let a = 'auth';
  return (
    <NavigationContainer>
      {a === 'auth' ? <AuthRoute /> : <AppRoute />}
    </NavigationContainer>
  );
}