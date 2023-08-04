import React from "react";
import { View, Text, SafeAreaView, TextInput, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Login = ({ onLogin, onSignUp }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [hidePass, setHidePass] = React.useState(true);

  const handleLogin = async () => {
    try {
      const response = await fetch('https://whisperback-production.up.railway.app/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: username,
          password: password
        })
      });

      const data = await response.json();
      console.log(data);

      onLogin();
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const handleToSignUp = () => {
    onSignUp();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16, backgroundColor: "black" }}>
        <View style={{ flex: 1, margin: 6, marginTop: 16, alignItems: "center" }}>
          <Text style={{ color: "white", paddingBottom: 2, fontSize: 18 }}>USERNAME</Text>
          <TextInput
            value={username}
            onChangeText={text => setUsername(text)}
            placeholder="Type your Username"
            style={{ width: "100%", paddingVertical: 6, paddingHorizontal: 8, marginBottom: 10, borderRadius: 8, backgroundColor: "#333", fontSize: 16, color: "white" }}
          />
          <Text style={{ color: "white", paddingBottom: 2, fontSize: 18 }}>PASSWORD</Text>
          <View style={{ width: "100%", paddingVertical: 6, paddingHorizontal: 8, marginBottom: 10, borderRadius: 8, backgroundColor: "#333", flexDirection: "row", alignItems: "center" }}>
            <TextInput
              secureTextEntry={hidePass}
              autoCapitalize="none"
              autoCorrect={false}
              value={password}
              onChangeText={text => setPassword(text)}
              placeholder="Type your Password"
              style={{ flex: 1, fontSize: 16, color: "white" }}
            />
            <Pressable onPress={() => setHidePass(!hidePass)}>
              <FontAwesome name={hidePass ? 'eye-slash' : 'eye'} size={20} color="#FF1168" />
            </Pressable>
          </View>
        </View>
        <View style={{ flex: 1, margin: 6, marginTop: 16, alignItems: "center", justifyContent: "flex-end" }}>
          <Pressable onPress={() => handleLogin()} style={{ height: 45, width: 160, marginBottom: 10, flexDirection: "row", borderRadius: 8, alignItems: "center", justifyContent: "center", backgroundColor: "#FF1168" }}>
              <Text style={{ color: "white", paddingRight: 8, fontSize: 15, fontWeight: "bold" }}>Log In</Text>
            <FontAwesome name="sign-in" size={15} color="#ECECEC" />
          </Pressable>
          <Pressable onPress={() => alert('You pressed Forgot Password button.')}>
            <Text style={{ color: "white", paddingBottom: 2, fontSize: 14 }}>FORGOT PASSWORD?</Text>
          </Pressable>
          <Pressable onPress={() => handleToSignUp()}>
            <Text style={{ color: "#FF1168", paddingBottom: 2, fontSize: 14 }}>SIGN UP HERE!</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
