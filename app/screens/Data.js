import React from "react";
import { View, Text, SafeAreaView } from "react-native";

const Data = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>C DATA</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Data;