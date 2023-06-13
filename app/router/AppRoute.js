import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Onboarding} from '../screens';
import {Route} from './Route';

const {Navigator, Screen} = createNativeStackNavigator();

export default function AppRoute() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name={Route.ONBOARDING} component={Onboarding} />
    </Navigator>
  );
}
