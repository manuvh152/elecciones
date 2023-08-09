import React from "react";
import { View, Text } from "react-native";
// import { BarChart } from "react-native-chart-kit";

const PercentageTextComponent = ({ data, element }) => {
  return (
    <View className="w-32 h-32 mb-2 rounded-full border-4 border-purpleapp flex items-center justify-center mx-4">
        <Text className="text-whiteapp text-2xl">{data.data[element]}%</Text>
        <Text className="text-whiteapp text-center">{data.labels[element]}</Text>
    </View>
  );
};

export default PercentageTextComponent;