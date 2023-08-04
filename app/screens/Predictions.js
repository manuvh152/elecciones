import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, Pressable, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";
import BarChartComponent from "../../components/BarChartComponents";

const Predictions = ({navigation}) => {

  const [selectedNumber, setSelectedNumber] = useState(2);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const apiUrl = `http://192.168.0.5:5000/api/v1/estado/${selectedNumber}`;

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
  }, [selectedNumber]);

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
    <SafeAreaView className="flex-1">
      <View className="flex p-[16px] bg-blackapp h-full w-full">
        <View className="flex m-[16px] items-center justify-start">
          <View className="flex flex-row flex-wrap gap-2 justify-around content-around h-auto w-full">
            <View className="w-32 h-32 rounded-full border-2 border-purpleapp flex items-center justify-center">
              <Text className="text-whiteapp text-3xl">45%</Text>
              <Text className="text-whiteapp">PARTY 1</Text>
            </View>
            <View className="w-32 h-32 rounded-full border-2 border-purpleapp flex items-center justify-center">
              <Text className="text-whiteapp text-3xl">28%</Text>
              <Text className="text-whiteapp">PARTY 2</Text>
            </View>
            <View className="w-32 h-32 rounded-full border-2 border-purpleapp flex items-center justify-center">
              <Text className="text-whiteapp text-3xl">21%</Text>
              <Text className="text-whiteapp">PARTY 3</Text>
            </View>
            <View className="w-32 h-32 rounded-full border-2 border-purpleapp flex items-center justify-center">
              <Text className="text-whiteapp text-3xl">6%</Text>
              <Text className="text-whiteapp">PARTY 4</Text>
            </View>
          </View>
          <Text className="text-whiteapp text-lg">ACCURACY: 200%</Text>
        </View>
        <View className="flex p-[16px] items-center justify-center w-full h-72">
          <Text className="text-whiteapp text-lg">CHART SHOWING CURRENT TREND</Text>
          <View className="flex h-full w-full bg-[#373737] rounded-lg border-2 border-pinkapp justify-center items-center">
            {chartData && <BarChartComponent data={chartData} />}
          </View>
          <Pressable className="mt-2" onPress={() => alert('You pressed Share option.')}>
            <FontAwesome name="share-alt" size={32} color="#ECECEC"/>
          </Pressable>
        </View>
        <View className="flex p-[16px] mt-2 items-center justify-start">
          <Text className="text-whiteapp mb-2 text-lg">USERNAME</Text>
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
            {/* Opciones del Picker */}
            </Picker>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  picker: {
    width: 200,
    height: 25,
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "gray",
  },
});

export default Predictions;