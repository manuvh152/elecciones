import "react-native-gesture-handler";
import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import "../global.css";

import Login from "./screens/Login";
import Routes from "./routes";
import SignUp from "./screens/SignUp";

const Stack = createNativeStackNavigator();

function LoginScreenStack() {
  return (
    <Stack.Navigator
      initialRouteName="LoginNavigator"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginScreen" component={Login}/>
    </Stack.Navigator>
  )
}

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const [toSignUp, setIsSigningUp] = React.useState(false);
    const [toLogIn, setIsLogIn] = React.useState(false);

    const handleLogin = () => {
      // Perform login logic here
      // For demonstration purposes, let's assume the login is successful
      setIsLoggedIn(true);
    };
    const handleToSignUp = () => {
        // Perform login logic here
        // For demonstration purposes, let's assume the login is successful
        setIsSigningUp(true);
    };

    const handleSignUp = () => {
        // Perform login logic here
        // For demonstration purposes, let's assume the login is successful
        setIsSigningUp(false);
    };
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isLoggedIn ? (
        // If logged in, navigate to the Routes component
            <Stack.Screen name="Routes" component={Routes} >
            {/* {() => <Routes toLogIn={handleLogout} />} */}
            </Stack.Screen>
        ) :  toSignUp ? (
            <Stack.Screen name="SignUp">
            {() => <SignUp toLogIn={handleSignUp} />}
          </Stack.Screen>
        ) : (
          // If not logged in, show the Login component
            <Stack.Screen name="Login"
                options={{
                drawerLabel: 'Login',
                title: 'Login',
            }}>
            {() => <Login onLogin={handleLogin} onSignUp={handleToSignUp} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;