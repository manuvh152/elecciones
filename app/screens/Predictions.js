import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import BarChartComponent from "../../components/BarChartComponent";
import axios from "axios";

const Predictions = () => {
  const [selectedNumber, setSelectedNumber] = useState(2);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const apiUrl = `http://192.168.1.161:5000/api/v1/estado/${selectedNumber}`;

    axios
      .get(apiUrl)
      .then((response) => {
        const dataFromApi = response.data;
        const formattedData = formatChartData(dataFromApi);
        setChartData(formattedData);
      })
      .catch((error) => {
        console.error("Error al obtener los datos de la API:", error);
      });
  }, [selectedNumber]);

  const formatChartData = (dataFromApi) => {
    const labels = [];
    const data = [];

    for (const partido in dataFromApi) {
      labels.push(partido);
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
          <Text></Text>
          <Picker
            style={styles.picker}
            selectedValue={selectedNumber}
            onValueChange={(itemValue, itemIndex) => setSelectedNumber(itemValue)}
          >
            <Picker.Item label="Aguascalientes" value={1} />
            <Picker.Item label="Baja California" value={2} />
            <Picker.Item label="Baja California Sur" value={3} />
            <Picker.Item label="Campeche" value={4} />
            <Picker.Item label="Coahuila" value={5} />
            <Picker.Item label="Colima" value={6} />
            <Picker.Item label="Chiapas" value={7} />
            <Picker.Item label="Chihuahua" value={8} />
            <Picker.Item label="Distrito Federal" value={9} />
            <Picker.Item label="Durango" value={10} />
            <Picker.Item label="Guanajuato" value={11} />
            <Picker.Item label="Guerrero" value={12} />
            <Picker.Item label="Hidalgo" value={13} />
            <Picker.Item label="Jalisco" value={14} />
            <Picker.Item label="México" value={15} />
            <Picker.Item label="Michoacán" value={16} />
            <Picker.Item label="Morelos" value={17} />
            <Picker.Item label="Nayarit" value={18} />
            <Picker.Item label="Nuevo León" value={19} />
            <Picker.Item label="Oaxaca" value={20} />
            <Picker.Item label="Puebla" value={21} />
            <Picker.Item label="Querétaro" value={22} />
            <Picker.Item label="Quintana Roo" value={23} />
            <Picker.Item label="San Luis Potosí" value={24} />
            <Picker.Item label="Sinaloa" value={25} />
            <Picker.Item label="Sonora" value={26} />
            <Picker.Item label="Tabasco" value={27} />
            <Picker.Item label="Tamaulipas" value={28} />
            <Picker.Item label="Tlaxcala" value={29} />
            <Picker.Item label="Veracruz" value={30} />
            <Picker.Item label="Yucatán" value={31} />
            <Picker.Item label="Zacatecas " value={32} />
            {/* Agrega más opciones según sea necesario */}
          </Picker>
          {chartData && <BarChartComponent data={chartData} />}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  picker: {
    width: 200,
    height: 50,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
  },
});

export default Predictions;
