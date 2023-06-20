import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Route} from 'constant/Route';
import {Overview} from 'screens';

const {Navigator, Screen} = createNativeStackNavigator();

export default function AppRoute() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name={Route.OVERVIEW} component={Overview} />
    </Navigator>
  );
}
