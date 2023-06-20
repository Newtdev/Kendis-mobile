import {
  View,
  Text,
  Image,
  FlatList,
  useWindowDimensions,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ScreenWrapper from 'components/ScreenWrapper';
import Logo from 'assets/Logo.svg';
import {Dimension} from 'helpers';
import cardone from 'assets/cardOne.png';
import PercentageOff from 'assets/PercentageOff.svg';
import {IconButton, Surface, TextInput} from 'react-native-paper';
import Icon, {Icons} from 'components/Icons';
import {formatCurrency} from 'helpers/utils';

// import FastImage from 'react-native-fast-image';
const CardOne = ({itemWidth}) => (
  <View className="bg-primary h-full rounded-lg" style={{width: itemWidth}}>
    <ImageBackground
      source={cardone}
      className="h-full w-full flex flex-col items-center justify-center"
      resizeMode="cover">
      <Text className="text-start text-sm text-white font-bold">
        Special Deals
      </Text>
      <Text className="text-start my-2 text-xs text-white ml-14">
        Get free delivery on these {'\n'} amazing meals
      </Text>
      <TouchableOpacity className="rounded-lg py-1.5 px-3 bg-white">
        <Text className="text-start text-primary">Order now</Text>
      </TouchableOpacity>
    </ImageBackground>
  </View>
);
const data = [
  {id: 1, comp: <CardOne />},
  {id: 2, comp: <PercentageOff />},
];

const RenderCard = ({item}) => {
  const {width} = Dimension();

  const itemWidth = width / 1.3;
  return (
    <View className=" h-36 mx-2 rounded-lg" style={{width: itemWidth}}>
      {item.comp}
    </View>
  );
};

// MENU CARD
const MenuCard = ({item}) => {
  return (
    <View className="mx-2">
      <Image
        className="h-16 w-16 rounded-full mx-auto "
        source={{uri: item.strCategoryThumb}}
      />

      <Text className="text-center">{item.strCategory}</Text>
    </View>
  );
};
// PRODUCT LIST CARD
const PRODUCTLIST = ({item}) => {
  const {width} = Dimension();

  const itemWidth = width / 2.3;
  return (
    <Surface className="h-56 m-2 bg-white" style={{width: itemWidth}}>
      <View className="flex flex-row w-full justify-between    rounded-xl ">
        <View className="h-10 px-4 flex flex-row justify-center items-center rounded-tl-xl rounded-br-xl bg-darkBlue ">
          <Text className="text-white font-bold ">{formatCurrency(3000)}</Text>
        </View>
        <TouchableOpacity className="m-2">
          <Icon type={Icons.AntDesign} name="heart" />
        </TouchableOpacity>
      </View>
      <Image
        className="h-36 w-36 mx-auto rounded-full  "
        resizeMode="contain"
        source={{uri: item.strCategoryThumb}}
      />

      <Text className="text-center">{item.strCategory}</Text>
    </Surface>
  );
};

export default function Overview() {
  const [categories, setCategories] = useState([]);
  function fetchData() {
    // //www.themealdb.com/api/json/v1/1/random.php
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php?l=2')
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        setCategories(res?.categories);
        // console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <SafeAreaView>
      <View className="px-3 h-[99%] pb-96 ">
        <View className="w-full flex flex-row justify-between items-center ">
          <View className="">
            <View>
              <Image
                source={{
                  uri: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
                }}
                className=" h-12 w-12 rounded-full mb-1"
                resizeMode="cover"
              />
            </View>
            <Text className="text-base text-secondary">Hello TG!</Text>
            <View className="flex flex-row">
              <Text className=" text-secondary text-xl">
                {/* {name} */}
                Welcome to
              </Text>
              <Text className=" ml-2  font-bold text-xl text-primary">
                La Chef!
              </Text>
            </View>
          </View>
          <View>
            <Logo with={43} height={43} />
          </View>
        </View>
        <View className=" h-fit w-full mt-10">
          <FlatList
            data={data}
            renderItem={({item}) => <RenderCard item={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={({id}) => `${id}`}
          />
          <View className="mt-2">
            <TextInput
              mode="outlined"
              outlineStyle={{borderRadius: 6}}
              placeholder="Search"
              onChangeText={text => console.log(text)}
            />
          </View>
        </View>
        <View className="mt-6">
          <Text className="font-bold text-xl">Menu</Text>

          <View className="mt-3">
            <FlatList
              data={categories}
              renderItem={({item}) => <MenuCard item={item} />}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={({idCategory}) => `${idCategory}`}
            />
          </View>
        </View>
        <View className="mt-6 overflow-y-hidden">
          <Text className="font-bold text-xl">Popular</Text>
          <View className="mt-3 pb-40">
            <FlatList
              data={categories}
              renderItem={({item}) => <PRODUCTLIST item={item} />}
              showsVerticalScrollIndicator={false}
              keyExtractor={({idCategory}) => `${idCategory}`}
              numColumns={2}
              initialNumToRender={5}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
