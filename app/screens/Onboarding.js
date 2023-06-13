import React, {useEffect, useRef, useState} from 'react';

import Background from '../assets/Background.png';
import {
  Animated,
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import Svg, {Circle, G} from 'react-native-svg';
import Logo from '../assets/Logo.svg';
import SplashScreen from 'react-native-splash-screen';
import Onboarding1 from '../assets/Onboarding1.svg';
import Onboarding2 from '../assets/Onboarding2.svg';
import Onboarding3 from '../assets/Onboarding3.svg';
import {Button} from 'react-native-paper';
import {COLORS} from '../constant/Color';

const onboardingData = [
  {
    id: 1,
    header: "Welcome to Kendi's",
    name: "Food at it's best",
    desc: 'We offer the best kind of healthy meals to gave you that great satisfaction.',
    image: Onboarding1,
  },
  {
    id: 2,
    header: 'Track Your Meal',
    name: 'Live Tracking',
    desc: 'Real timetracking of your ordered meal immediately after placing order',
    image: Onboarding2,
  },
  {
    id: 3,
    header: 'Offers And Benefits',
    name: 'Exciting Offers',
    desc: 'We give mouth watering offers and discounts, check them out below',
    image: Onboarding3,
  },
];

const RenderOnboardingList = props => {
  const items = props.data.item;
  const dimension = useWindowDimensions();

  return (
    <View className="h-[70%]" style={{width: dimension.width}}>
      <ImageBackground
        source={Background}
        resizeMode="cover"
        className="h-full">
        <SafeAreaView>
          <View className="w-full h-full mt-6 flex flex-col justify-between px-4">
            <View className="h-full flex justify-between items-center">
              <View className="s">
                <Text className="text-2xl font-bold text-black">
                  {items.header}
                </Text>
                <View className="w-12 py-0.5 mt-3 mx-auto bg-primary" />
              </View>
              <View className="mb-4 w-full mt-6 flex flex-col items-center">
                <items.image width={200} height={280} />
                <View className="mt-10">
                  <Text className="text-2xl text-center font-bold text-darkGray">
                    {items.name}
                  </Text>
                  <Text className="text-base text-darkGray text-center py-2">
                    {items.desc}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default function Onboarding() {
  const slideRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef(null);
  const size = 64;
  const strokeWidth = 6;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  let circumference = radius * Math.PI * 2;
  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const percentage = (currentIndex + 1) * (100 / onboardingData.length);
  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0]?.index);
  }).current;

  const animation = toValue => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => animation(percentage), [percentage]);

  useEffect(() => {
    progressAnimation.addListener(value => {
      const strokeDashoffset =
        circumference - (circumference * value.value) / 100;
      if (progressRef?.current) {
        progressRef?.current?.setNativeProps({strokeDashoffset});
      }
    });

    return () => {
      progressAnimation.removeAllListeners();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  return (
    <View className="h-screen w-screen bg-white">
      <View>
        <FlatList
          data={onboardingData}
          pagingEnabled
          renderItem={data => <RenderOnboardingList data={data} />}
          horizontal
          bounces={false}
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          ref={slideRef}
          onViewableItemsChanged={viewableItemsChanged}
        />
      </View>

      <View className=" w-full h-[30%]  flex flex-col justify-evenly items-center">
        <Svg height={size} width={size} fill="#fff">
          <View className="flex justify-center items-center w-full  h-full">
            <Logo width={13} height={18} />
          </View>
          <G rotation="-180" origin={center}>
            <Circle
              cx={center}
              cy={center}
              r={radius}
              stroke={COLORS.lightGray}
              strokeWidth={strokeWidth}
            />
            <Circle
              ref={progressRef}
              cx={center}
              cy={center}
              r={radius}
              stroke={COLORS.primary}
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
            />
          </G>
        </Svg>
        <View className="w-full mb-3">
          {currentIndex !== 2 ? (
            <TouchableOpacity onPress={() => console.log('HI')}>
              <Text className="font-bold text-base text-primary text-center">
                Skip
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              className="w-4/5 max-w-[326px] self-center bg-primary  py-2 rounded"
              onPress={() => console.log('Hello')}>
              <Text className="font-bold text-base text-white text-center">
                Get started
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}
