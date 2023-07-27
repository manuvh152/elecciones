import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import BarChartComponent from "../../components/BarChartComponent";
import axios from "axios";

const Predictions = ({ navigation }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // URL de la API
    const apiUrl = "http://192.168.0.7:5000/api/v1/estado/2";

    // Hacemos la solicitud a la API
    axios
      .get(apiUrl)
      .then((response) => {
        const dataFromApi = response.data;
        // Formatear los datos para la gráfica
        const formattedData = formatChartData(dataFromApi);
        setChartData(formattedData);
      })
      .catch((error) => {
        console.error("Error al obtener los datos de la API:", error);
      });
  }, []);

  // Función para formatear los datos desde la API a un formato adecuado para la gráfica
  const formatChartData = (dataFromApi) => {
    const labels = [];
    const data = [];

    for (const partido in dataFromApi) {
      labels.push(partido);
      // Redondear a dos decimales
      const value = parseFloat(dataFromApi[partido]).toFixed(2);
      data.push(value);
    }

    return {
      labels: labels,
      datasets: [
        {
          data: data,
        },
      ],
    };
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>C DATA</Text>
          {chartData && <BarChartComponent data={chartData} />}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Predictions;
