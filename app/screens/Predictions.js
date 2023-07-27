import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import BarChartComponent from "../../components/BarChartComponent";

const Predictions = ({ navigation }) => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>C DATA</Text>
          <BarChartComponent data={data} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Predictions;
