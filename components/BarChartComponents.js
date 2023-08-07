import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { BarChart } from "react-native-chart-kit";

const BarChartComponent = ({ data }) => {
  const screenWidth = (Dimensions.get("window").width * 0.8);
  const chartHeight = 240; // Altura de la gráfica

  return (
    <View style={[styles.container, { height: chartHeight }]}>
      <BarChart
        data={data}
        width={screenWidth}
        height={chartHeight}
        yAxisLabel="%"
        verticalLabelRotation={90}
        chartConfig={{
          barPercentage: 0.4,
          backgroundColor: "#37373775",
          backgroundGradientFrom: "#37373775",
          backgroundGradientTo: "#37373775",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#37373775"
          }
        }}
        style={styles.chart}
        xLabelsOffset={-20} // Ajustar el espaciado entre etiquetas y parte inferior de la gráfica
        // horizontalLabelRotation={-45} // Rotación del texto en grados (-45 grados en este caso)
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderRadius: 16,
    // borderWidth: 1,
    // borderColor: "gray",
    margin: -4,
    overflow: "hidden", // Para recortar cualquier contenido que se desborde
  },
  chart: {
    marginVertical: -4,
    marginHorizontal: "auto",
    borderRadius: 16,
    flexDirection: "row"
  },
});

export default BarChartComponent;