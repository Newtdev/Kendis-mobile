import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Onboarding} from '../screens';
import {Route} from 'constant/Route';

const {Navigator, Screen} = createNativeStackNavigator();

export default function AppRoute() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name={Route.ONBOARDING} component={Onboarding} />
      <Screen name={Route.LOGIN} component={Login} />
    </Navigator>
  );
}
