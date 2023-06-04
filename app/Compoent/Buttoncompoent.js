import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, ScrollView, Button, TouchableOpacity, View, Image } from "react-native";
import image from "../assets";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const Buttoncompoent = ({ onPress, title, disabled, backgroundColor, enabled, activeOpacity, tiltAngle }) => {
    // const { buttonStyle, textStyle } = styles;

    // const { onPress, title, backgroundColor, color1,buttonName, csCode } = props;
    return (
        <View style={styles.contare1}>
            <TouchableOpacity style={[styles.TouchableOpacitystyle, {
                enabled: { enabled }, activeOpacity: { activeOpacity }
                , tiltAngle: { tiltAngle }
            }]}
                onPress={onPress}

                disabled={disabled}>
                <Text style={styles.textstyle}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    TouchableOpacitystyle: {
        height: moderateScale(46),
        top: scale(18),
        borderRadius: scale(8),
        width: "95%",
        justifyContent: "center",
        flexDirection: "row", 
        alignItems: "center",
        backgroundColor: "#2DB3FF",
        borderBottomEndRadius: scale(70),
        //borderTopStartRadius: scale(55),
        borderTopStartRadius: scale(25),
        elevation:5
        // buttonStyle, backgroundColor: [csCode]
    },
    contare1: {
        height: moderateScale(120),
        width: "100%",
        //width: '110%', 
        justifyContent: "center",
        flexDirection: "row", 
        alignItems: "center",
    },
    textstyle: {
        fontSize: scale(15),
        textAlign: "center",
        color: "white",
        fontWeight: "500"

    },
});

export default Buttoncompoent;



