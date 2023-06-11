import React from 'react';
import {SafeAreaView} from 'react-native';

export default function ScreenWrapper({children}: {children: React.ReactNode}) {
  return <SafeAreaView>{children}</SafeAreaView>;
}
