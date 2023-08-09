import React from 'react';
import { SafeAreaView,
  View,
  StyleSheet,
  Image, ImageBackground,
  Text,
  Linking,
  Pressable,
  NativeModules } from 'react-native';

import "../global.css";

import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import { FontAwesome } from '@expo/vector-icons'

const CustomSidebarMenu = (props) => {
  const bgSide = '../assets/bgSide.jpg';
  const proileImage = '../assets/profile.png';

  return (
    <SafeAreaView style={{flex: 1}} className="bg-whiteapp">
      {/*Top Large Image */}
      <DrawerContentScrollView {...props}
      contentContainerStyle={{backgroundColor:'#171717'}}>
        <ImageBackground source={require(bgSide)}
          className="p-5">
          <Image source={require(proileImage)}
          className="h-20 w-20 rounded-full mb-3"/>
          <Text className="text-whiteapp text-lg font-bold">User</Text>
          <Text className="text-whiteapp text-base font-normal">email@gmail.com</Text>
        </ImageBackground>
        <View className="flex-1 bg-whiteapp pt-2">
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <Pressable onPress={() => NativeModules.DevSettings.reload()} className="h-[60px] flex flex-row items-center justify-center p-3 bg-pinkapp">
        <FontAwesome name="sign-out" size={15} color="#ECECEC"/>
        <Text className="text-whiteapp pl-2 text-[15px] font-bold">Log Out</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default CustomSidebarMenu;