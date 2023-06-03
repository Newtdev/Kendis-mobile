import React from 'react';
import {Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const {Navigator, Screen} = createNativeStackNavigator();

const SignedIn = () => (
  <View className="bg-red-900 h-screen w-screen">
    <Text>Sign In</Text>
  </View>
);
function AuthRoute() {
  return (
    <Navigator>
      <Screen name="Home" component={SignedIn} />
    </Navigator>
  );
}

export default AuthRoute;
