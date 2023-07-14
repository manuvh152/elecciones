import React from "react";
import { View, Text, SafeAreaView } from "react-native";

const Predictions = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>C PREDICTIONS</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Predictions;