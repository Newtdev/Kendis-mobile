import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import FullLogo from 'assets/fullLogo.svg';
import mealImage from 'assets/mealImage.png';
import ScreenWrapper from './ScreenWrapper';
import {useNavigation} from '@react-navigation/native';

export default function AuthWrapper({
  name,
  desc,
  noAccount,
  linkName,
  link,
  children,
}) {
  const navigation = useNavigation();
  return (
    <ScreenWrapper showBackBtn={true}>
      <View className="w-full flex flex-row justify-between items-center ">
        <View>
          <View className="">
            <Text className="font-bold text-lg text-secondary mt-2">
              {name}
            </Text>
            <Text className="text-base text-secondary">{desc}</Text>
          </View>
        </View>
        <View>
          <Image
            source={mealImage}
            resizeMethod="auto"
            resizeMode="contain"
            className="object-contain"
          />
        </View>
      </View>
      {children}
      {/* // lskdlskdlkf */}

      <View className=" w-full flex-row flex items-center justify-center">
        <Text>{noAccount}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(link)}
          className="ml-1">
          <Text className="text-primary text-sm">{linkName}</Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
}
