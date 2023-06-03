/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView, Text, View} from 'react-native';
import CustomNavigation from './app/router';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <View className="bg-yellow-900 h-screen w-screen">
        <Text>Hello</Text>
      </View>
      <CustomNavigation />
    </SafeAreaView>
  );
}

export default App;
