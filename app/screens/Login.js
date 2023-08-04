import React from "react";
import { Svg, G, Path, Mask } from "react-native-svg";
import { View, Text, SafeAreaView, TextInput, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Login = ({onLogin, onSignUp}) => {
    const [user, onChangeText] = React.useState('');
    const [hidePass, setHidePass] = React.useState(true);
    const [password, setPassword] = React.useState('');

    const handleLogin= () => {
        onLogin();
    }

    // const handleLogin = async () => {
    //     try {
    //       const response = await fetch('https://whisperback-production.up.railway.app/login', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //           user: user,
    //           password: password
    //         })
    //       });
    
    //       const data = await response.json();
    //       console.log(data);
    
    //       onLogin();
    //     } catch (error) {
    //       console.error('Error logging in:', error);
    //     }
    //   };

    const handleToSignUp= () => {
        onSignUp();
    }

    return (
        <SafeAreaView className="flex-1">
        <View className="flex-1 p-[16px] bg-blackapp">
            <View className="flex h-80 w-full p-[16px] items-center justify-center">
            <Text className="text-whiteapp pb-2 text-5xl">APP NAME</Text>
            <Svg xmlns="http://www.w3.org/2000/svg" width="118" height="125" fill="none" viewBox="0 0 118 125">
                <Mask id="a" width="46" height="81" x="45" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance">
                    <Path fill="#fff" d="M45.82 60.626 71.414 33.18l17.282 19.757L63.1 80.382 45.82 60.626Zm6.356-27.7 8.276 9.462 30.01-32.178L82.186.75l-30.01 32.178Z"/>
                </Mask>
                <G mask="url(#a)">
                    <Path fill="#FF1168" stroke="#FF1168" strokeLinejoin="bevel" strokeWidth="2.653" d="M53.602 60.764 71.29 41.798 80.914 52.8 63.226 71.766l-9.624-11.002Z"/>
                </G>
                <Path stroke="#FF1168" strokeLinejoin="bevel" strokeWidth="2.646" d="M83.76 94.995H7.332v28.66h76.426v-28.66Z"/>
                <Path stroke="#FF1168" strokeLinejoin="bevel" strokeWidth="2.646" d="M88.301 92.716c4.65-2.461 13.84-7.636 18.401-10.223 4.56-2.588 4.488-2.588 4.524 2.099.036 4.686.18 14.058.253 18.889.072 4.831.072 5.121-4.56 7.78-4.632 2.66-13.895 7.69-18.437 10.404-4.541 2.714-4.36 3.112-4.415-1.773-.054-4.885-.344-15.053-.434-20.011-.09-4.958.018-4.704 4.668-7.165Z"/>
                <Path stroke="#FF1168" strokeLinejoin="bevel" strokeWidth="2.646" d="M85.062 80.665H2.122v13.896h82.94V80.665Z"/>
                <Path stroke="#FF1168" strokeLinejoin="bevel" strokeWidth="2.646" d="m85.28 81.534-.326 13.353 31.157-18.13-.977-13.679-29.855 18.456Zm-83.926-.79 31.599-17.883h82.072l-28.66 17.804-85.011.08Zm33.77-10.067 49.504.435"/>
            </Svg>
            </View>
            <View className="flex p-[16px] mx-6 mt-6 items-start justify-center">
                <Text className="text-whiteapp pb-2 text-lg">USERNAME</Text>
                <TextInput value={user} onChange={onChangeText} placeholder="Type your Username" className="w-full h-auto pb-1 px-2 mb-4 rounded-xl bg-grayapp text-base"/>
                <Text className="text-whiteapp pb-2 text-lg">PASSWORD</Text>
                <View className="w-full h-auto pb-1 px-2 mb-4 rounded-xl bg-grayapp flex-row items-center">
                    <TextInput secureTextEntry={hidePass ? true : false} autoCapitalize="none" autoCorrect={false} value={password} placeholder="Type your Password" onChangeText={text => setPassword(text)} className="w-[90%] h-auto text-base"
                    activeOutlineColor="#FF1168" mode="outlined" blurOnSubmit={false} selectionColor="#FF1168"/>
                    <Pressable onPress={() => setHidePass(!hidePass)}>
                        <FontAwesome name={hidePass ? 'eye-slash' : 'eye' } size={20} color='#FF1168'/>
                    </Pressable>
                </View>
            </View>
            <View className="flex-1 p-[16px] mx-6 mt-6 items-center justify-end">
                <Pressable onPress={() => handleLogin()} className="h-[45px] w-[160px] mb-4 flex flex-row rounded-xl items-center justify-center p-3 bg-pinkapp">
                    <Text className="text-whiteapp pr-2 text-[15px] font-bold">Log In</Text>
                    <FontAwesome name="sign-in" size={15} color='#ECECEC'/>
                </Pressable>
                <Pressable onPress={() => alert('You pressed Forgot Password button.')}>
                    <Text className="text-whiteapp pb-2 text-sm">FORGOT PASSWORD?</Text>
                </Pressable>
                <Pressable onPress={() => handleToSignUp()}>
                    <Text className="text-pinkapp pb-2 text-sm">SIGN UP HERE!</Text>
                </Pressable>
            </View>
        </View>
        </SafeAreaView>
    )
}

export default Login;