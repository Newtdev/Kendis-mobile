import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon, {Icons} from './Icons';

export default function ScreenWrapper({children, showBackBtn}) {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} className="px-3 h-[99%]">
        {showBackBtn ? (
          <TouchableOpacity
            className="my-4"
            onPress={() => navigation.goBack()}>
            <Icon name="keyboard-backspace" type={Icons.MaterialIcons} />
          </TouchableOpacity>
        ) : null}
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}
