import React from "react";
import { Svg, G, Path, Mask } from "react-native-svg";
import { View, Text, SafeAreaView, TextInput, Pressable, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";

const SignUp = ({toLogIn}) => {
    const [user, onChangeText] = React.useState('');
    const [email, onChangeEmail] = React.useState('');

    const [hidePass, setHidePass] = React.useState(true);
    const [password, setPassword] = React.useState('');

    const [hideRePass, setHideRePass] = React.useState(true);
    const [rePassword, setRePassword] = React.useState('');

    const noSignUp= () => {
        toLogIn();
    }
    
    const handleSignUp = async () => {
        if (password === rePassword){
            try {
                const response = await axios.post('https://whisperback-production.up.railway.app/register', {
                    user: user,
                    email: email,
                    password: password
              });
        
              const data = await response.data
              console.log(data);
              if (data.userCreated) {
                  toLogIn();
              } else {
                console.log(data)
              }
        
            } catch (error) {
              console.error('Error signing up:', error);
            }
        } else {
            alert('Passwords do not match!')
        }
        
      };

    return (
        <SafeAreaView className="flex-1 bg-blackapp">
            <ScrollView>
                <View className="flex-1 p-[16px]">
                    <View className="flex-1 h-auto w-full p-[16px] mt-[70px] items-center justify-center">
                    <Text className="text-whiteapp text-5xl mb-10">Sign Up</Text>
                    <FontAwesome name="check-square" size={125} color="#FF1168"/>
                    </View>
                    <View className="flex p-[16px] mx-6 mt-6 items-start justify-center">
                        <Text className="text-whiteapp pb-2 text-lg">USERNAME</Text>
                        <TextInput value={user} onChangeText={onChangeText} placeholder="Type your Username" className="w-full h-auto pb-1 px-2 mb-4 rounded-xl bg-grayapp text-base"/>
                        <Text className="text-whiteapp pb-2 text-lg">EMAIL</Text>
                        <TextInput value={email} onChangeText={onChangeEmail} autoCapitalize="none" placeholder="Type your Email" className="w-full h-auto pb-1 px-2 mb-4 rounded-xl bg-grayapp text-base"/>
                        <Text className="text-whiteapp pb-2 text-lg">PASSWORD</Text>
                        <View className="w-full h-auto pb-1 px-2 mb-4 rounded-xl bg-grayapp flex-row items-center">
                            <TextInput secureTextEntry={hidePass ? true : false} autoCapitalize="none" autoCorrect={false} value={password} placeholder="Type your Password" onChangeText={setPassword} className="w-[90%] h-auto text-base"
                            activeOutlineColor="#FF1168" mode="outlined" blurOnSubmit={false} selectionColor="#FF1168"/>
                            <Pressable onPress={() => setHidePass(!hidePass)}>
                                <FontAwesome name={hidePass ? 'eye-slash' : 'eye' } size={20} color='#FF1168'/>
                            </Pressable>
                        </View>
                        <Text className="text-whiteapp pb-2 text-lg">CONFIRM PASSWORD</Text>
                        <View className="w-full h-auto pb-1 px-2 mb-4 rounded-xl bg-grayapp flex-row items-center">
                            <TextInput secureTextEntry={hideRePass ? true : false} autoCapitalize="none" autoCorrect={false} value={rePassword} placeholder="Confirm your Password" onChangeText={setRePassword} className="w-[90%] h-auto text-base"
                            activeOutlineColor="#FF1168" mode="outlined" blurOnSubmit={false} selectionColor="#FF1168"/>
                            <Pressable onPress={() => setHideRePass(!hideRePass)}>
                                <FontAwesome name={hideRePass ? 'eye-slash' : 'eye' } size={20} color='#FF1168'/>
                            </Pressable>
                        </View>
                    </View>
                    <View className="flex-1 p-[16px] mx-6 items-center justify-end">
                        <Pressable onPress={() => handleSignUp()} className="h-[45px] w-[160px] mb-4 flex flex-row rounded-xl items-center justify-center p-3 bg-pinkapp">
                            <Text className="text-whiteapp pr-2 text-[15px] font-bold">Sign Up</Text>
                            <FontAwesome name="user" size={15} color='#ECECEC'/>
                        </Pressable>
                        <Pressable onPress={() => noSignUp()}>
                            <Text className="text-whiteapp pb-2 text-sm">ALREADY HAVE AN ACOUNT? <Text className="text-pinkapp pb-2 text-sm">LOG IN HERE!</Text></Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignUp;