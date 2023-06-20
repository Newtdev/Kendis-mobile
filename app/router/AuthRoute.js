import React from 'react';
import {Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Route} from 'constant/Route';
import {Login, Onboarding, SignUp, Welcome} from 'screens';

const {Navigator, Screen} = createNativeStackNavigator();

function AuthRoute() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name={Route.ONBOARDING} component={Onboarding} />
      <Screen name={Route.WELCOME} component={Welcome} />
      <Screen name={Route.SIGN_UP} component={SignUp} />
      {/* <Screen name={Route.LOGIN} component={Login} /> */}
      <Screen name={Route.LOGIN} component={Login} />
    </Navigator>
  );
}

export default AuthRoute;
