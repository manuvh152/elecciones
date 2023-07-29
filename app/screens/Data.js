import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { LineChart } from "react-native-svg-charts";

const Data = () => {
  const data = [20, 45, 28, 80, 99, 43];
  const labels = ["January", "February", "March", "April", "May", "June"];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <Text>Gráfico de Línea</Text>
        <LineChart
          style={{ height: 200 }}
          data={data}
          contentInset={{ top: 20, bottom: 20 }}
          svg={{ stroke: "rgb(134, 65, 244)" }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Data;
