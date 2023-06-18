import {View, Text, StatusBar, Image} from 'react-native';
import React from 'react';
import ScreenWrapper from 'components/ScreenWrapper';
import AuthImage from 'assets/AuthImage.png';
import FullLogo from 'assets/fullLogo.svg';
import {Button} from 'react-native-paper';
import {COLORS} from 'constant/Color';
import {Route} from 'constant/Route';
import {useNavigation} from '@react-navigation/native';

export default function Welcome() {
  const navigation = useNavigation();
  return (
    <ScreenWrapper>
      <StatusBar />
      <View className="h-screen overflow-y-hidden">
        <View className="h-[50%]">
          <Image
            source={AuthImage}
            resizeMode="contain"
            resizeMethod="resize"
            className="h-[85%] w-[80%] ml-auto mt-auto"
          />
        </View>
        <View className="h-[50%]  py-6 mx-auto w-full flex flex-col items-center">
          <FullLogo width={180} />
          <View className="mt-4 text-lightGray px-10">
            <Text className="text-base text-center">
              Welcome to Kendi’s, please sign up now to enjoy the great
              experience or sign in if you already have an account.
            </Text>
          </View>
          <View className="w-full mt-10">
            <Button
              mode="contained"
              textColor="white"
              className="mx-auto outline outline-red-900"
              buttonColor={COLORS.primary}
              style={{width: '80%'}}
              onPress={() => navigation.navigate(Route.SIGN_UP)}>
              Sign Up
            </Button>
            <Button
              mode="outlined"
              onPress={() => navigation.navigate(Route.LOGIN)}
              textColor={COLORS.primary}
              className="mx-auto mt-4"
              style={{width: '80%'}}>
              Login
            </Button>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}
