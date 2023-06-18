import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Route} from 'constant/Route';
import {Login, Onboarding, SignUp, Welcome} from 'screens';

const {Navigator, Screen} = createNativeStackNavigator();

export default function AppRoute() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name={Route.ONBOARDING} component={Onboarding} />
      <Screen name={Route.WELCOME} component={Welcome} />
      <Screen name={Route.SIGN_UP} component={SignUp} />
      <Screen name={Route.LOGIN} component={Login} />
    </Navigator>
  );
}
