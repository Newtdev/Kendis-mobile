import React, {useEffect, useRef} from 'react';

import Background from '../assets/Background.png';
import {
  Animated,
  FlatList,
  Image,
  ImageBackground,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import Svg, {Circle} from 'react-native-svg';

import SplashScreen from 'react-native-splash-screen';
import Onboarding1 from '../assets/Onboarding1.svg';
import Onboarding2 from '../assets/Onboarding2.svg';
import Onboarding3 from '../assets/Onboarding3.svg';

const onboardingData: {
  id: number;
  header: string;
  name: string;
  desc: string;
  image: any;
}[] = [
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
    <View className="h-screen" style={{width: dimension.width}}>
      <ImageBackground
        source={Background}
        resizeMode="cover"
        className="h-full">
        <View className="w-full h-full  flex flex-col justify-between px-4">
          <View className="h-full flex justify-between items-center">
            <View className=" mt-24">
              <Text className="text-2xl font-bold text-black">
                {items.header}
              </Text>
              <View className="w-12 py-0.5 mt-3 mx-auto bg-base" />
            </View>
            <View className="mb-4 w-full   h-[70%] flex flex-col items-center">
              <items.image width={261.62} height={300} />
              <View className="mt-10">
                <Text className="text-2xl text-center font-bold text-darkGray">
                  {items.name}
                </Text>
                <Text className="text-base text-darkGray text-center py-2">
                  {items.desc}
                </Text>
              </View>
              {/* <View className=" w-full h-24 flex justify-center items-center bg-green-900">
                <Svg height={80} width={80}>
                  <Circle
                    cx={40}
                    cy={40}
                    r={50}
                    stroke="lightblue"
                    strokeWidth="2"
                  />
                </Svg>
              </View> */}
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default function Onboarding() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View className="h-screen w-screen ">
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
      />
    </View>
  );
}
