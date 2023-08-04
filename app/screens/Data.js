import React from "react";
import { View, Text, SafeAreaView, Dimensions } from "react-native";

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { ScrollView } from "react-native-web";

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

        <View style={{flex: 1, padding: 16}}>
          <Text>Votes last elections</Text>
          <BarChart
            data={{
              labels: ["January", "February", "March", "April", "May", "June"],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100
                  ]
                }
              ]
            }}
            width={(Dimensions.get("window").width) * 0.9} // from react-native
            height={220}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "#e26a00",
              backgroundGradientFrom: "#fb8c00",
              backgroundGradientTo: "#ffa726",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726"
              }
            }}
            bezier
            style={{
              marginVertical: 8,
              marginHorizontal: 8,
              borderRadius: 16,
              flexDirection: "row"
            }}
          />
        </View>
    </SafeAreaView>
  )
}

export default Data;