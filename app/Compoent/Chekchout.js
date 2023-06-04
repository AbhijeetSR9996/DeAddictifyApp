
import React, { useEffect, useRef, useState } from 'react';
import { View, SafeAreaView, BackHandler, ImageBackground, Alert, Text, ScrollView, Animated, Easing, Image, TouchableOpacity, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { scale, verticalScale, moderateScale, Linking } from 'react-native-size-matters';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, StackActions } from '@react-navigation/native';
import { LottieView } from 'lottie-react-native';
import { WebView } from 'react-native-webview';
import image from '../assets';
import { Avatar, Button, Card, } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
const SetSettinscreenting = (props) => {
    const navigation = useNavigation();
    const [Achievement, setAchievement] = useState([]);
    const [Loder, setLoder] = useState(true)
    useEffect(() => {
        getMoviesFromApi()
    }, [])
    // const   getMoviesFromApi = ssss.props;/
    const getMoviesFromApis = props;
    const getMoviesFromApi = async () => {
        const jsonValue = await AsyncStorage.getItem("IdA",)
        console.log(">>>>>>", jsonValue)
        // let url = `http://demo4.progressiveaidata.in/api/get-resource-link/${props.Getvalue}`
        let url = `http://demo4.progressiveaidata.in/api/get-resource-link/Smokeing1`
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
                setLoder(false)
                console.log('Web response ----->>>>>', response.link.url)
                setAchievement(response)
                console.log('<<<<<<<', Achievement)

            })
            .catch(error => {
                console.error('catch gdwaasjhgdhgdg error', error);
            });
    };
    let getvalueaa = props.Getvalue
    const Rederiteam = ({ item }) => {
        return (
            <View style={{ height: moderateScale(90), padding: scale(5), backgroundColor: "white" }}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Webcompoent', {
                        itemId: item.url,
                    });
                }}
                    style={{ width: "96%", height: moderateScale(52), borderRadius: 12, backgroundColor: "#E8C4FF", justifyContent: "center", alignItems: "center", }}>
                    <Text style={{ fontSize: 20, color: "black" }}>{item.url}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1, width: "100%", marginLeft: scale(12) }}>
            <ScrollView>
                {Loder ? (<ActivityIndicator style={{ justifyContent: "flex-end", height: moderateScale(120) }} size={35} color={"black"} />) :
                    (<FlatList
                        data={Achievement.link}
                        renderItem={Rederiteam}
                    />)
                }

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
        height: moderateScale(45), width: "50%", alignItems: "center", flexDirection: "row",

    },
    textstyle: {
        fontSize: scale(15), color: "black"
    },
    Maicontaer: {
        height: moderateScale(50), flexDirection: "row", width: "100%",
    },
    logo: {
        height: moderateScale(60), width: "20%", justifyContent: "center", alignItems: "center"
    },
});
export default SetSettinscreenting;





















