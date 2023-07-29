import React from "react";
import { View, Text, SafeAreaView } from "react-native";

import BottomTable from "./BottomTable";

const Data = ({navigation}) => {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 p-[16px] bg-blackapp">
        <View className="flex-1 p-[16px] mt-6 items-start justify-center">
          <Text className="text-whiteapp pl-4 pb-2 text-lg">INE</Text>
          <View className="flex h-full w-full bg-[#37373775] rounded border-2 border-pinkapp justify-center items-center">
            <Text className="text-pinkapp">Test</Text>
          </View>
        </View>
        <View className="flex-1 p-[16px] mt-6 items-start justify-center">
          <Text className="text-whiteapp pl-4 pb-2 text-lg">VOTES LAST ELECTIONS</Text>
          <View className="flex h-full w-full bg-[#37373775] rounded border-2 border-purpleapp justify-center items-center">
            <Text className="text-purpleapp">Test</Text>
          </View>
        </View>
        <BottomTable/>
      </View>
    </SafeAreaView>
  )
}

export default Data;