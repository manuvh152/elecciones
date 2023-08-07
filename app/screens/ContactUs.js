import React from "react";
import { View, Text, SafeAreaView, TextInput, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";

const ContactUs = ({navigation}) => {
    const [name, onChangeName] = React.useState('');
    const [last, onChangeLast] = React.useState('');
    const [email, onChangeEmail] = React.useState('');
    const [message, onChangeMessage] = React.useState('');

    const sendMail = async () => {

        try {
            const response = await axios.post('https://whisperback-production.up.railway.app/mailer', {
                firstName: name,
                lastName: last,
                email: email,
                message: message
            });

            const data = await response.data
            console.log(data)

            alert('Info Sent Correctly!')
    
        } catch (error) {
          console.log('Error logging in:', error)
        }
    };

    return (
        <SafeAreaView className="flex-1">
        <View className="flex-1 px-8 bg-blackapp">
            <View className="flex w-auto h-auto p-6 mt-6 justify-center items-start bg-[#272727] rounded-lg">
                <Text className="text-whiteapp pb-2 text-base">Firs Name</Text>
                <TextInput value={name} onChangeText={onChangeName} className="w-full h-auto pb-1 px-2 mb-4 rounded-xl bg-whiteapp text-base"/>
                <Text className="text-whiteapp pb-2 text-base">Last Name</Text>
                <TextInput value={last} onChangeText={onChangeLast} className="w-full h-auto pb-1 px-2 mb-4 rounded-xl bg-whiteapp text-base"/>
                <Text className="text-whiteapp pb-2 text-base">Email Address</Text>
                <TextInput value={email} onChangeText={onChangeEmail} autoCapitalize="none" className="w-full h-auto pb-1 px-2 mb-4 rounded-xl bg-whiteapp text-base"/>
                <Text className="text-whiteapp pb-2 text-base">Message</Text>
                <TextInput value={message} onChangeText={onChangeMessage} multiline className="w-full h-32 pb-1 px-2 mb-4 rounded-xl bg-whiteapp text-base"/>
                <View className="flex justify-center items-center h-auto w-full">
                    <Pressable onPress={() => sendMail()} className="h-[45px] w-[160px] mt-4 flex flex-row rounded-xl items-center justify-center p-3 bg-pinkapp">
                        <Text className="text-whiteapp pr-2 text-[15px] font-bold">Contact</Text>
                        <FontAwesome name="id-card" size={15} color='#ECECEC'/>
                    </Pressable>
                </View>
            </View>
        </View>
        </SafeAreaView>
    )
}

export default ContactUs;