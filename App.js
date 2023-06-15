/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import CustomNavigation from 'router';
import {PersistGate} from 'redux-persist/integration/react';

import {
  PaperProvider,
  MD3DarkTheme,
  MD3LightTheme,
  adaptNavigationTheme,
} from 'react-native-paper';
import {
  DefaultTheme as NavLightTheme,
  DarkTheme as NavDarkTheme,
} from '@react-navigation/native';
import {
  LightTheme as appLightTheme,
  DarkTheme as appDarkTheme,
} from 'config/Theme';

import {useColorScheme} from 'react-native';
import {persistor, store} from 'store/store';
import {Provider} from 'react-redux';

function App() {
  const colorScheme = useColorScheme();

  const {LightTheme, DarkTheme} = adaptNavigationTheme({
    reactNavigationLight: NavLightTheme,
    reactNavigationDark: NavDarkTheme,
  });

  const combineDarkTheme = {
    ...MD3DarkTheme,
    ...DarkTheme,
    roundness: 1,
    colors: {...MD3DarkTheme.colors, ...appDarkTheme.colors},
  };

  const combineLightTheme = {
    ...MD3LightTheme,
    ...LightTheme,
    roundness: 1,
    colors: {...MD3DarkTheme.colors, ...appLightTheme.colors},
  };

  const theme = colorScheme === 'dark' ? combineDarkTheme : combineLightTheme;
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={theme}>
          <CustomNavigation theme={theme} />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
