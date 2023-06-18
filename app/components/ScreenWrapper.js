import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

export default function ScreenWrapper({children}) {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} className="px-2">
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}
