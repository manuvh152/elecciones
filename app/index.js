import "react-native-gesture-handler";
import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CustomSidebarMenu from "../components/CustomSidebarMenu";
import Data from "./screens/Data";
import Predictions from "./screens/Predictions";

import { COLORS } from "../constants/theme";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DataScreenStack() {
  return (
    <Stack.Navigator
      initialRouteName="Data"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Data" component={Data}/>
    </Stack.Navigator>
  )
}

function PredictionsScreenStack() {
  return (
    <Stack.Navigator
      initialRouteName="Predictions"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Predictions" component={Predictions}/>
    </Stack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator 
        screenOptions={{
          activeTintColor: COLORS.primary,
          itemStyle: {marginVertical: 5}
        }}
        drawerContent={props => <CustomSidebarMenu {...props} /> } >
        <Drawer.Screen
          name="Data"
          options={{drawerLabel: 'Data', title: 'Data'}}
          component={DataScreenStack}
          />
        <Drawer.Screen
          name="Predictions"
          options={{drawerLabel: 'Predictions', title: 'Predictions'}}
          component={PredictionsScreenStack}
          />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App;