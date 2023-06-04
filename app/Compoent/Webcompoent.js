
import React, { useEffect, useRef, useState } from 'react';
import { View, SafeAreaView, BackHandler, ImageBackground, Alert, Text, ScrollView, Animated, Easing, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { scale, verticalScale, moderateScale, Linking } from 'react-native-size-matters';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, StackActions } from '@react-navigation/native';
import { LottieView } from 'lottie-react-native';
import { WebView } from 'react-native-webview';
import image from '../assets';
import { Avatar, Button, Card, } from 'react-native-paper';
const Webcompoent = ({ route, navigation }) => {
    const { itemId, otherParam } = route.params;
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <WebView
                source={{ uri:itemId}}
            />
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
export default Webcompoent;





















