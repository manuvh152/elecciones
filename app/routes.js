import "react-native-gesture-handler";
import React from "react";
import { View, Text, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import "../global.css";

import CustomSidebarMenu from "../components/CustomSidebarMenu";
import Data from "./screens/Data";
import Predictions from "./screens/Predictions";

import { FontAwesome } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DataScreenStack() {
  return (
    <Stack.Navigator
      initialRouteName="DataNavigator"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="DataScreen" component={Data}/>
    </Stack.Navigator>
  )
}

function PredictionsScreenStack() {
  return (
    <Stack.Navigator
      initialRouteName="PredictionsNavigator"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="PredictionsScreen" component={Predictions}/>
    </Stack.Navigator>
  )
}

const Routes = () => {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        screenOptions={{
          headerTintColor:'#ECECEC',
          headerStyle: {backgroundColor:'#171717'},
          drawerActiveBackgroundColor: '#FF1168',
          drawerActiveTintColor: '#ECECEC',
          drawerInactiveTintColor:'#171717',
          drawerLabelStyle: {marginLeft: -25, fontSize:15}
        }}
        drawerContent={props => <CustomSidebarMenu {...props}  /> } >
        <Drawer.Screen
          name="Data"
          options={{drawerLabel: 'Data', title: 'Data',
          drawerIcon: ({color})=> (
            <FontAwesome name="bar-chart" size={22} color={color}/>
          )
        }}
          component={DataScreenStack}
          />
        <Drawer.Screen
          name="Predictions"
          options={{drawerLabel: 'Predictions', title: 'Predictions',
          drawerIcon: ({color})=> (
            <FontAwesome name="line-chart" size={22} color={color}/>
          )
        }}
          component={PredictionsScreenStack}
          />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default Routes;