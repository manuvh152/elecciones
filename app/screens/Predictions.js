import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import BarChartComponent from "../../components/BarChartComponent";
import axios from "axios";
import { FontAwesome } from "@expo/vector-icons";

const Predictions = ({ navigation }) => {
  const [selectedNumber, setSelectedNumber] = useState(2);
  const [chartData, setChartData] = useState(null);
  const [partyData, setPartyData] = useState(null);

  useEffect(() => {
    const apiUrl = `http://example-api.com/party_data/${selectedNumber}`;

    axios
      .get(apiUrl)
      .then((response) => {
        const partyDataFromApi = response.data;
        setPartyData(partyDataFromApi);
      })
      .catch((error) => {
        console.error("Error al obtener los datos de las partes de la API:", error);
      });
  }, [selectedNumber]);

  const formatChartData = (dataFromApi) => {
    // Función de formateo de datos del gráfico de barras
    // (esto ya estaba en el código original, puedes mantenerlo aquí)
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <View className="flex-1 p-[16px] bg-blackapp">
            <View className="flex-1 p-[16px] mt-4 items-center justify-start">
              <View className="flex flex-row flex-wrap justify-around content-around h-full w-full">
                <View className="w-32 h-32 rounded-full border-2 border-purpleapp flex items-center justify-center">
                  <Text className="text-whiteapp text-3xl">
                    {partyData?.party1_percentage ?? "Loading..."}
                  </Text>
                  <Text className="text-whiteapp">
                    {partyData?.party1_name ?? "Loading..."}
                  </Text>
                </View>
                <View className="w-32 h-32 rounded-full border-2 border-purpleapp flex items-center justify-center">
                  <Text className="text-whiteapp text-3xl">
                    {partyData?.party2_percentage ?? "Loading..."}
                  </Text>
                  <Text className="text-whiteapp">
                    {partyData?.party2_name ?? "Loading..."}
                  </Text>
                </View>
                <View className="w-32 h-32 rounded-full border-2 border-purpleapp flex items-center justify-center">
                  <Text className="text-whiteapp text-3xl">
                    {partyData?.party3_percentage ?? "Loading..."}
                  </Text>
                  <Text className="text-whiteapp">
                    {partyData?.party3_name ?? "Loading..."}
                  </Text>
                </View>
                <View className="w-32 h-32 rounded-full border-2 border-purpleapp flex items-center justify-center">
                  <Text className="text-whiteapp text-3xl">
                    {partyData?.party4_percentage ?? "Loading..."}
                  </Text>
                  <Text className="text-whiteapp">
                    {partyData?.party4_name ?? "Loading..."}
                  </Text>
                </View>
              </View>
              <Text className="text-whiteapp pb-4 text-lg">ACCURACY: 200%</Text>
            </View>
            <View className="flex-1 p-[16px] mt-4 items-center justify-start">
              <Text className="text-whiteapp mb-2 text-lg">CHART SHOWING CURRENT TREND</Text>
              <View className="flex h-[66%] w-full mb-2 bg-[#37373775] rounded border-2 border-pinkapp justify-center items-center">
                <Text className="text-pinkapp">Test</Text>
              </View>
              <Pressable onPress={() => alert('You pressed Share option.')}>
                <FontAwesome name="share-alt" size={32} color="#ECECEC"/>
              </Pressable>
            </View>
          </View>
        </View>
        {chartData && <BarChartComponent data={chartData} />}
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
