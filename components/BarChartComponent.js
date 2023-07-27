import React from "react";
import { View } from "react-native";
import { BarChart } from "react-native-chart-kit";

const BarChartComponent = ({ data }) => {
  return (
    <View>
      <BarChart
        data={data}
        width={300}
        height={220}
        yAxisLabel="$"
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
      />
    </View>
  );
};

export default BarChartComponent;
