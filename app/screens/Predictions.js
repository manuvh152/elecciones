import React from "react";
import { View, Text, SafeAreaView, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Predictions = ({navigation}) => {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 p-[16px] bg-blackapp">
        <View className="flex-1 p-[16px] mt-4 items-center justify-start">
          <View className="flex flex-row flex-wrap justify-around content-around h-full w-full">
            <View className="w-32 h-32 rounded-full border-2 border-purpleapp flex items-center justify-center">
              <Text className="text-whiteapp text-3xl">45%</Text>
              <Text className="text-whiteapp">PARTY 1</Text>
            </View>
            <View className="w-32 h-32 rounded-full border-2 border-purpleapp flex items-center justify-center">
              <Text className="text-whiteapp text-3xl">28%</Text>
              <Text className="text-whiteapp">PARTY 2</Text>
            </View>
            <View className="w-32 h-32 rounded-full border-2 border-purpleapp flex items-center justify-center">
              <Text className="text-whiteapp text-3xl">21%</Text>
              <Text className="text-whiteapp">PARTY 3</Text>
            </View>
            <View className="w-32 h-32 rounded-full border-2 border-purpleapp flex items-center justify-center">
              <Text className="text-whiteapp text-3xl">6%</Text>
              <Text className="text-whiteapp">PARTY 4</Text>
            </View>
          </View>
          <Text className="text-whiteapp pb-4 text-lg">ACCURACY: 200%</Text>
        </View>
        <View className="flex-1 p-[16px] mt-4 items-center justify-start">
          <Text className="text-whiteapp mb-2 text-lg">CHART SHOWING CURRENT TREND</Text>
          <View className="flex h-[66%] w-full mb-2 bg-[#37373775] rounded border-2 border-pinkapp justify-center items-center">
            <Text className="text-pinkapp">Test</Text>
          </View>
          <Pressable onPress={() => alert('You pressed Share option.')}>
            <FontAwesome name="share-alt" size={32} color="#ECECEC"/>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Predictions;