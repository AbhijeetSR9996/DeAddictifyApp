import React, { useEffect, useRef, useState } from 'react';
import { View, SafeAreaView, BackHandler, Alert, Text, ScrollView, Animated, Easing, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Homecopment from '../../Compoent/HomeCompoent';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Daycompoent from '../../Compoent/Daycompoent'
import { useFocusEffect, StackActions } from '@react-navigation/native';
import image from '../../assets';
import { LottieView } from 'lottie-react-native';
import Settingcompent from '../../Compoent/Settingcompent';
const SetSettinscreenting = ({ navigation }) => {
    const profFunct = async () => {
        await AsyncStorage.removeItem('IdA')
        navigation.dispatch(StackActions.replace('Login'))
    }
    const AccountDelete = async () => {
        const jsonValue = await AsyncStorage.getItem("IdA",)
        console.log(">>>>>>", jsonValue)
        // let url = `http://demo4.progressiveaidata.in/api/user-get-data/${jsonValue}`
        let url = `http://demo4.progressiveaidata.in/api/user-delete/${jsonValue}`
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };
        fetch(url, {
            method: 'GET',
            credentials: 'same-origin',
            mode: 'same-origin',
            headers: headers,
        })
            .then(response => response.json())
            .then(response => {
                console.log("Delete Account ", response);
                // setValue(response.user_data.time);
                navigation.navigate('Login')
            })
            .catch(error => {
                console.error('catch gdwaasjhgdhgdg error', error);
            });
    };



    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
            <Homecopment back2={true} name={"Settings"} back1={true} />
            <ScrollView style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
                <View style={{ height: moderateScale(120), backgroundColor: "white", top: scale(17) }}>
                    <View style={styles.Maicontaer}>
                        <TouchableOpacity style={styles.logo}>
                            <Image style={{ height: moderateScale(23), width: 23, tintColor: "black" }} source={image.setting} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: moderateScale(60), width: "28%", justifyContent: "center", }}>
                            <Text style={styles.textstyle}> Setting
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.Maicontaer}>
                        <TouchableOpacity style={styles.logo}>
                            <Image style={{ height: moderateScale(25), width: 25, }} source={image.Notificatiion} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: moderateScale(40), width: "44%", justifyContent: "center", }}>
                            <Text style={styles.textstyle}>Notification Setting
                            </Text>
                        </TouchableOpacity>

                    </View>

                </View>
                <Settingcompent />
                <View style={{ height: moderateScale(179), margin: scale(12), backgroundColor: "white", top: scale(20) }}>
                    <View style={styles.Maicontaer}>
                        <TouchableOpacity style={styles.logo}>
                            <Image style={{ height: moderateScale(23), width: 23, tintColor: "black" }} source={image.PENCIL} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: moderateScale(60), width: "48%", justifyContent: "center", }}>
                            <Text style={styles.textstyle}>Developer Info, T&C
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.Maicontaer}>
                        <TouchableOpacity style={styles.logo}>
                            <Image style={{ height: moderateScale(25), width: 25, }} source={image.LOGOUT} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={profFunct}
                            style={{ height: moderateScale(40), width: "44%", justifyContent: "center", }}>
                            <Text style={styles.textstyle}>Logout

                            </Text>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.Maicontaer}>
                        <TouchableOpacity style={styles.logo}>
                            <Image style={{ height: moderateScale(25), width: 25, }} source={image.dEETER} />
                        </TouchableOpacity>
                        <TouchableOpacity

                            onPress={() => AccountDelete()}
                            style={{ height: moderateScale(40), width: "44%", justifyContent: "center", }}>
                            <Text style={styles.textstyle}>Delete Account
                            </Text>
                        </TouchableOpacity>

                    </View>

                </View>
                <ImageBackground
                    //style={{ height: moderateScale(160), width: "100%" }}
                    style={{ height: moderateScale(180), width: "100%" }}
                    source={{ uri: "https://i.pinimg.com/originals/75/d3/bd/75d3bd6c2855cea6bd12af66cc37719b.gif" }}

                >



                </ImageBackground>

            </ScrollView>
        </SafeAreaView>

    );
}
const styles = StyleSheet.create({
    TouchableOpacitystyle: {
        height: moderateScale(120),
        backgroundColor: "white",
        shadowColor: "white",
        justifyContent: "center"
    },
    contare1: {
        height: moderateScale(45), 
        width: "50%", 
        alignItems: "center", 
        flexDirection: "row",

    },
    textstyle: {
        fontSize: scale(16), 
        color: "black", 
        fontWeight: "600"
    },
    Maicontaer: {
        height: moderateScale(50), 
        flexDirection: "row", 
        width: "100%",
    },
    logo: {
        height: moderateScale(60), 
        width: "20%", 
        justifyContent: "center", 
        alignItems: "center"
    },
});
export default SetSettinscreenting;
