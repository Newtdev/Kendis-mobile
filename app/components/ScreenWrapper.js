import React from 'react';
import {SafeAreaView} from 'react-native';

export default function ScreenWrapper({children}) {
  return <SafeAreaView>{children}</SafeAreaView>;
}
