import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { BarChart } from "react-native-chart-kit";

const BarChartComponent = ({ data }) => {
  const screenWidth = Dimensions.get("window").width;
  const chartHeight = 220; // Altura de la gráfica

  return (
    <View style={[styles.container, { height: chartHeight }]}>
      <BarChart
        data={data}
        width={screenWidth - 16}
        height={chartHeight}
        yAxisLabel="%"
        chartConfig={{
          backgroundColor: "purple",
          backgroundGradientFrom: "indigo",
          backgroundGradientTo: "blue",
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 0.5,
          },
        }}
        style={styles.chart}
        xLabelsOffset={-10} // Ajustar el espaciado entre etiquetas y parte inferior de la gráfica
        horizontalLabelRotation={-45} // Rotación del texto en grados (-45 grados en este caso)
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "gray",
    margin: 8,
    overflow: "hidden", // Para recortar cualquier contenido que se desborde
  },
  chart: {
    marginVertical: 8,
  },
});

export default BarChartComponent;