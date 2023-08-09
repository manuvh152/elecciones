import React from "react";
import { Svg, G, Path, Mask } from "react-native-svg";
import { View, Text, SafeAreaView, TextInput, Pressable, ScrollView, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";

const Login = ({onLogin, onSignUp}) => {
    
    const logoapp = '../../assets/images/logo.png';

    const [hidePass, setHidePass] = React.useState(true);
    const [password, setPassword] = React.useState('');
    const [user, setUser] = React.useState('');

    const handleLogin = async () => {

        try {
            const response = await axios.post('https://whisperback-production.up.railway.app/login', {
                user: user,
                password: password
            });
    
          const data = await response.data
          if (data.msg != "Usuario no existentew") {
            console.log(data.findUser.email)
            console.log(data.findUser.user)

            onLogin()
          } else {
            console.log(data)
            alert('Incorrect Credentials!')
          }
    
        } catch (error) {
          console.log('Error logging in:', error)
        }
    };

    const handleToSignUp= () => {
        onSignUp();
    }

    return (
        <SafeAreaView className="flex-1 bg-blackapp">
            <ScrollView>
                <View className="flex-1 p-[16px]">
                    <View className="flex h-auto w-full p-[16px] mt-[70px] items-center justify-center">
                    <Text className="text-whiteapp pb-2 text-5xl mb-10">Log In</Text>
                    {/* <Image source={require(logoapp)}
                        className="h-[125px] w-[175px] bg-cover mt-4 drop-shadow-2xl"/> */}
                    <FontAwesome name="check-square" size={125} color="#FF1168"/>
                    </View>
                    <View className="flex p-[16px] mx-6 mt-2 items-start justify-center">
                        <Text className="text-whiteapp pb-2 text-lg">USERNAME</Text>
                        <TextInput value={user} onChangeText={setUser} placeholder="Type your Username" className="w-full h-auto pb-1 px-2 mb-4 rounded-xl bg-grayapp text-base"/>
                        <Text className="text-whiteapp pb-2 text-lg">PASSWORD</Text>
                        <View className="w-full h-auto pb-1 px-2 mb-4 rounded-xl bg-grayapp flex-row items-center">
                            <TextInput secureTextEntry={hidePass ? true : false} autoCapitalize="none" autoCorrect={false} value={password} placeholder="Type your Password" onChangeText={setPassword} className="w-[90%] h-auto text-base"
                            activeOutlineColor="#FF1168" mode="outlined" blurOnSubmit={false} selectionColor="#FF1168"/>
                            <Pressable onPress={() => setHidePass(!hidePass)}>
                                <FontAwesome name={hidePass ? 'eye-slash' : 'eye' } size={20} color='#FF1168'/>
                            </Pressable>
                        </View>
                    </View>
                    <View className="flex-1 p-[16px] mx-6 mt-2 items-center justify-end">
                        <Pressable onPress={() => handleLogin()} className="h-[45px] w-[160px] mb-4 flex flex-row rounded-xl items-center justify-center p-3 bg-pinkapp">
                            <Text className="text-whiteapp pr-2 text-[15px] font-bold">Log In</Text>
                            <FontAwesome name="sign-in" size={15} color='#ECECEC'/>
                        </Pressable>
                        {/* <Pressable onPress={() => alert('You pressed Forgot Password button.')}>
                            <Text className="text-whiteapp pb-2 text-sm">FORGOT PASSWORD?</Text>
                        </Pressable> */}
                        <Pressable onPress={() => handleToSignUp()}>
                            <Text className="text-pinkapp pb-2 text-sm">SIGN UP HERE!</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Login;