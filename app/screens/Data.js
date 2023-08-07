import React from "react";
import { View, Text, SafeAreaView, Dimensions } from "react-native";
import { BarChart } from "react-native-chart-kit";

import BottomTable from "./BottomTable";

const Data = ({navigation}) => {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 p-[16px] bg-blackapp">
        <View className="flex-1 p-[16px] mt-6 items-start justify-center">
          <Text className="text-whiteapp pl-4 pb-2 text-lg">INE REGISTRATIONS (2023)</Text>
          <View className="flex h-full w-full bg-[#373737] rounded border-2 border-pinkapp justify-center items-center">
            <BarChart
              data={{
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                datasets: [
                  {
                    data: [
                      1.83,
                      0.67,
                      1.25,
                      2.10,
                      2.78,
                      2.79
                    ]
                  }
                ]
              }}
              width={(Dimensions.get("window").width) * 0.8} // from react-native
              height={200}
              yAxisLabel=""
              yAxisSuffix="M"
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                barPercentage: 0.5,
                backgroundColor: "#37373775",
                backgroundGradientFrom: "#37373775",
                backgroundGradientTo: "#37373775",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#37373775"
                }
              }}
              bezier
              style={{
                marginVertical: -4,
                marginHorizontal: "auto",
                borderRadius: 16,
                flexDirection: "row"
              }}
            />
          </View>
        </View>
        <View className="flex-1 p-[16px] mt-6 items-start justify-center">
          <Text className="text-whiteapp pl-4 pb-2 text-lg">FEDERAL ELECTIONS (88-18)</Text>
          <View className="flex h-full w-full bg-[#373737] rounded border-2 border-purpleapp justify-center items-center">
          <BarChart
            data={{
              labels: ["1988", "1994", "2000", "2006", "2012", "2018"],
              datasets: [
                {
                  data: [
                    19.80,
                    35.28,
                    37.60,
                    41.79,
                    50.14,
                    56.61
                  ]
                }
              ]
            }}
            width={(Dimensions.get("window").width) * 0.8} // from react-native
            height={200}
            yAxisLabel=""
            yAxisSuffix="M"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "#37373775",
              backgroundGradientFrom: "#37373775",
              backgroundGradientTo: "#37373775",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#37373775"
              }
            }}
            bezier
            style={{
              marginVertical: -4,
              marginHorizontal: "auto",
              borderRadius: 16,
              flexDirection: "row"
            }}
          />
          </View>
        </View>
        <BottomTable/>
      </View>
    </SafeAreaView>
  )
}

export default Data;