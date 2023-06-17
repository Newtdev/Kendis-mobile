import React from 'react';
import {Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Route} from 'constant/Route';
import {Login} from 'screens';

const {Navigator, Screen} = createNativeStackNavigator();

function AuthRoute() {
  return (
    <Navigator>
      <Screen name={Route.LOGIN} component={Login} />
    </Navigator>
  );
}

export default AuthRoute;
