import React from 'react';

import {Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const {Navigator, Screen} = createNativeStackNavigator();

const Home = () => <Text>Home Screen</Text>;

export default function AppRoute() {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}
