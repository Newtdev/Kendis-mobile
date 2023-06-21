import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Route} from 'constant/Route';
import {Login, Onboarding, SignUp, Welcome} from 'screens';
import {useSelector} from 'react-redux';
import {showOnboarding} from 'features/authSlice';

const {Navigator, Screen} = createNativeStackNavigator();

function AuthRoute() {
  const boarding = useSelector(showOnboarding);

  return (
    <Navigator screenOptions={{headerShown: false}}>
      {!boarding ? (
        <Screen name={Route.ONBOARDING} component={Onboarding} />
      ) : (
        <Screen name={Route.WELCOME} component={Welcome} />
      )}

      <Screen name={Route.SIGN_UP} component={SignUp} />
      <Screen name={Route.LOGIN} component={Login} />
    </Navigator>
  );
}

export default AuthRoute;
