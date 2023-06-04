import * as React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import image from '../assets';
import { useNavigation } from '@react-navigation/native'
import Add from './Add';

const Settingcompent = ({ name, name1, back1, image3, imagee }) => {
    const navigation = useNavigation();
    return (
        <View>
            <View style={{ height: moderateScale(330), top: scale(25), width: "83%", borderRadius: 10, backgroundColor: "white", marginLeft: scale(30), }}>
                <View style={{ height: moderateScale(55), width: "100%", marginLeft: scale(12), flexDirection: "row" }}>
                    <View style={{ height: moderateScale(50), width: "60%", flexDirection: "column", }}>
                        <Text style={styles.textstyle}> Go Premium & Unlok </Text>
                        
                        <Text style={styles.textstyle}>NeW  Feature</Text>
                    </View>
                    <View style={{ height: moderateScale(40), width: "30%", flexDirection: "row", justifyContent: "center" }}>
                        <Image
                            style={{ height: scale(100), width: scale(100) }}
                            source={{ uri: "https://sciencejmlp.files.wordpress.com/2020/11/blog-3.gif" }}
                        />
                        {/* <Add/> */}
                    </View>
                </View>
                <View style={{
                    height: moderateScale(100), alignItems: "center", width: "90%",
                    justifyContent: "center"
                }} >

                    <View style={{
                        height: moderateScale(55),
                        width: "100%",
                        flexDirection: "column",
                    }}
                    >
                        <Text style={ {marginLeft:scale(30),color:"black",fontWeight:"500",fontSize:scale(18)}}>Benefits</Text>

                        <View style={{
                            height: moderateScale(60),
                            width: "100%",
                            flexDirection: "row",
                            top:scale(6)
                        }}
                        >
                            <View style={[styles.countview, { backgroundColor: "skyblue", }]} >

                                <Text style={styles.count}>1</Text>
                            </View>
                            <View style={{
                                marginLeft: scale(20),
                                height: moderateScale(55), justifyContent: "center"
                                , top: scale(5),
                                width: "80%",

                            }} >
                                <Text style={{ color: "black", fontSize: 16, }}>"Change theme"</Text>
                            </View>
                        </View>
                        <View style={{
                            height: moderateScale(55),
                            width: "100%",
                            flexDirection: "row",
                        }}
                        >
                            <View style={[styles.countview, { backgroundColor: "pink", }]} >

                                <Text style={styles.count}>2</Text>
                            </View>
                            <View style={{
                                marginLeft: scale(20),
                                height: moderateScale(55), justifyContent: "center"
                                , top: scale(5),
                                width: "80%",

                            }} >
                                <Text style={{ color: "black", fontSize: 16, }}>"Change app icon"</Text>
                            </View>
                        </View>
                        <View style={{
                            height: moderateScale(55),
                            width: "100%",
                            flexDirection: "row",
                        }}
                        >
                            <View style={[styles.countview, { backgroundColor: "#439BFF", }]} >
                                <Text style={styles.count}>3</Text>
                            </View>
                            <View style={{
                                marginLeft: scale(20),
                                height: moderateScale(55), justifyContent: "center"
                                , top: scale(5),
                                width: "80%",

                            }} >
                                <Text style={{ color: "black", fontSize: 16, }}>"Select Multiple Addictions"</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({


    textstyle: {
        fontSize: 18, fontWeight: "500", color: "black", marginLeft: scale(11), top: scale(8)

    },
    TouchableOpacitystyle: {
        height: moderateScale(46),
        borderRadius: scale(8),
        width: "47%", justifyContent: "center",
        flexDirection: "row", alignItems: "center",
        backgroundColor: "#2DB3FF",
        // borderBottomEndRadius: scale(55),
        // borderTopStartRadius: scale(60),
        // buttonStyle, backgroundColor: [csCode]

    },
    TouchableOpacitystyle1: {
        height: moderateScale(46),
        top: scale(18),
        borderRadius: scale(8),
        width: "90%", justifyContent: "center",
        flexDirection: "column", alignItems: "center",
        backgroundColor: "#2DB3FF",
        borderBottomEndRadius: scale(70),
        borderTopStartRadius: scale(55),
        // buttonStyle, backgroundColor: [csCode]

    },
    contare1: {
        height: moderateScale(260),
        width: "90%",
        backgroundColor: "#0097CE",
        marginLeft: scale(15),
        borderRadius: scale(10),
        justifyContent: "center", flexDirection: "column", top: scale(8), alignItems: 'center'
    },
    count: {
        color: "black", fontSize: 16, bottom: 2, fontWeight: "500"
    },
    countview: {
        marginLeft: scale(20),
        height: moderateScale(30), width: scale(28), alignItems: "center", justifyContent: "center"
        , borderRadius: 28,
        margin: scale(12),
        top: scale(5),
    }

});


export default Settingcompent;
