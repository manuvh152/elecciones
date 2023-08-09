import React, { useEffect, useState, useRef } from "react";
import { View, Text, SafeAreaView, Pressable, StyleSheet, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import ViewShot, { captureRef } from "react-native-view-shot";
import { Share } from "react-native";
import axios from "axios";
import BarChartComponent from "../../components/BarChartComponents";
import PercentageTextComponent from "../../components/PercentageTextComponents";
import { data } from "autoprefixer";

const Predictions = ({navigation}) => {

  const [selectedNumber, setSelectedNumber] = useState(2);
  const [chartData, setChartData] = useState(null);
  const [percentageData, setPerData] = useState(null);

  useEffect(() => {
    // API Host
    const apiUrl = `https://ai-whisperapp.onrender.com/api/v1/estado/${selectedNumber}`;

    // Hacemos la solicitud a la API
    axios
      .get(apiUrl)
      .then((response) => {
        const dataFromApi = response.data;
        // Formatear los datos para la gráfica
        const formattedData = formatChartData(dataFromApi);
        setChartData(formattedData);

        const formattedPercentageData = formatPercentageData(dataFromApi);
        setPerData(formattedPercentageData);
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

  // Función para formatear los datos desde la API a un formato adecuado para la gráfica
  const formatPercentageData = (dataFromApi) => {
    const labels = [];
    const data = [];

    for (const partido in dataFromApi) {
      if (partido === "MOVIMIENTO_CIUDADANO"){
        labels.push("Movimiento Ciudadano");
      } else {
        labels.push(partido);
      }
      // Redondear a dos decimales
      const value = parseFloat(dataFromApi[partido]).toFixed(2);
      data.push(value);
    }

    // Sort the arrays based on the data values (in descending order)
    const sortedIndices = data.map((_, index) => index).sort((a, b) => data[b] - data[a]);
    const sortedLabels = sortedIndices.map((index) => labels[index]);
    const sortedData = sortedIndices.map((index) => data[index]);

    return {
      labels: sortedLabels,
      data: sortedData,
    };
  };

  let viewShotRef = useRef();

  const onSharePress = async () => {
    try {
      const uri = await captureRef(viewShotRef, {
        format: 'png',
        quality: 0.9,
      });
      console.log(uri)
      await Share.share({
        title: 'Predictions',
        message: 'Current trend',
        url: uri,
        
      });
    } catch (error) {
      console.log('Error capturing or sharing screenshot:', error);
    }
  }

  return (
    <SafeAreaView className="flex-1 bg-blackapp">
      <ScrollView>
      <ViewShot ref={viewShotRef} className="flex p-[16px] h-full w-full">
        <View className="flex items-center justify-center w-full h-auto">
          <Text className="text-whiteapp text-lg font-bold">CURRENT TREND</Text>
        </View>
        <View className="flex mt-[16px] items-center justify-start">
          <View className="flex flex-row flex-wrap gap-2 justify-around content-around h-auto w-full">
            {percentageData && <PercentageTextComponent data={percentageData} element={0}/>}
            {percentageData && <PercentageTextComponent data={percentageData} element={1}/>}
            {percentageData && <PercentageTextComponent data={percentageData} element={2}/>}
            {percentageData && <PercentageTextComponent data={percentageData} element={3}/>}
          </View>
          <Text className="text-whiteapp text-base">ACCURACY: 78%</Text>
        </View>
        <View className="flex mt-[-2] px-[16px] items-center justify-center w-full h-72">
          <View className="flex h-[250px] w-full bg-[#373737] rounded-lg border-2 border-pinkapp justify-center items-center">
            {chartData && <BarChartComponent data={chartData} />}
          </View>
        </View>
        <View className="flex p-[16px] my-[-24] items-center justify-start">
          <Text className="text-whiteapp mb-2 text-lg">SELECT STATE</Text>
          <Picker
            // className="w-[200px] h-[25px] bg-whiteapp rounded-md border-2 border-pinkapp text-pinkapp"
            style={styles.picker}
            width={200}
            height={50}
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
            <Pressable className="mt-16 h-auto w-[160px] flex flex-row rounded-xl items-center justify-center p-3 bg-pinkapp" onPress={onSharePress}>
              <Text className="text-whiteapp pr-2 text-[15px] font-bold">SHARE </Text>
              <FontAwesome name="share-alt" size={15} color="#ECECEC"/>
            </Pressable>
        </View>
      </ViewShot>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  picker: {
    width: 200,
    height: 50,
    backgroundColor: "#ECECEC",
    borderRadius: 10,
    // borderWidth: 1,
    // borderColor: "#FF1168",
    color: "#FF1168",
    overflow: 'hidden',
    justifyContent:"center",
    position: 'absolute',
    marginTop: 50

  },
});

export default Predictions;