import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, ImageBackground, Image, Button, TextInput, FlatList } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import image from '../assets';
import { useFocusEffect } from '@react-navigation/native';
//import AsyncStorage from "@react-native-async-storage/async-storage";
// import { StackActions } from 'react-navigation';
// import Login from './Login';
// import Home from '../Appnavigatore/Bottomnaviftion';
// import auth from '@react-native-firebase/auth';
// import { RestistonActtion } from '.././Redux/Actions/RestistonActtion'
// import { useDispatch, useSelector } from 'react-redux';
// import {
//     startFunction, handecancle, showNotification
// } from '../Compoent/PushNotification';
// import { useTransitionProgress } from 'react-native-screens';
// import PushNotification from "react-native-push-notification";
const Splash = ({ navigation }) => {
    //const [name, setname] = useState('')
    const [name1, setname1] = useState('')
    //const [date, setdate] = useState([])
    useFocusEffect(
        React.useCallback(() => {
            setTimeout(() => {
                navigation.navigate('Login')
                //Alllogin()
            }, 800)
        },)
    );
    // const Alllogin = async () => {
    //     const IdUser = await AsyncStorage.getItem('IdA')
    //     console.log(">>>Idd", IdUser)
    //     if (IdUser == null) {
    //         navigation.navigate('Login')
    //     } else {
    //         navigation.navigate("MyTabs")
    //     }
    // }
    // useEffect (()=>{
    //     setTimeout(() => {
    //          const Substsion = auth().onAuthStateChanged(user =>{
    //           const router =user !==null ? <Home/>:<Login/>
    //           navigation.dispatch(StackActions.replace(router))
    //          })
    //          Substsion
    //     }, 3000);
    //     return()=>{};
    //   })
    // const Tokanaaa = async () => {
    //     const Getiteammm = await AsyncStorage.getItem('Token');
    //     console.log("getItem Tokan ---->>", Getiteammm)
    //     if (!Getiteammm == null) {
    //         navigation.navigate("HomeScreen")
    //     }
    //     else {
    //         navigation.navigate("Bottomn")
    //     }
    // }



    return (
        // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
        <View style={{ flex: 1, flexDirection: "column", backgroundColor:"black" ,alignItems: 'center', justifyContent: 'center', }}>
             
            <View style={{  height: moderateScale(300), width: '100%',justifyContent:"space-evenly",flexDirection:"column",   alignItems:"center", }}>

                    <Image
                        style={{ height: moderateScale(220), width: moderateScale(220), justifyContent:"space-evenly" }}
                        source={image.login2} 
                        />
                    <View style={{ height: 55, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: scale(25), color: 'white',}}>
                             DeAddictify
                        </Text>
                    </View>
                    <Text style={{ fontSize: 20, color: "red", height: 66, width: "100%", }}>
                        {name1}
                    </Text>

             </View>
        </View>
    );
}


export default Splash;










// const pushNotif = async () => {
//     const jsonValue = await AsyncStorage.getItem("IdA",)
//     console.log("Id>>>>", jsonValue)

//     PushNotification.createChannel(
//         {
//             channelId: "specialid",
//             channelName: "Special messasge",
//             channelDescription: "Notification for special message",
//             importance: 1,
//             vibrate: true,
//         },
//         (created) => console.log(`createChannel returned '${created}'`)
//     );
//     PushNotification.localNotification({
//         id: 12,
//         channelId: 'specialid',
//         title: 'hello',
//         message: 'test message',
//         date: new Date(Date.now() + 60 * 1000), // in 60 secs
//         allowWhileIdle: false,
//         invokeApp: true,
//         repeatTime: 1,
//         subtitle: "My Notification Subtitle",
//         largeIconUrl: "https://cdn-icons-png.flaticon.com/512/3621/3621435.png",
//         color: "blue",
//         vibrate: true,
//         groupSummary: false,
//         ignoreInForeground: false,
//         // userInfo: { screen: 'Home' },

//     })
// }

