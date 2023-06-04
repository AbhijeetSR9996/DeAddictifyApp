import * as React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import image from '../assets';
import { useNavigation } from '@react-navigation/native'
import Homecopment from '../Compoent/HomeCompoent';
const Findyou = ({ name, name1, back1, image3, imagee }) => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                <Homecopment back1={true} />
                <ImageBackground style={{ height: moderateScale(280), width: "100%", justifyContent: "center" }}
                    source={image.flowers} >
                    <View style={{ height: moderateScale(55), justifyContent: "center" }} >
                        <Text style={{ color: "#2DB3FF", fontSize: scale(20), textAlign: "center" }}>
                            Find your
                        </Text>
                        <Text style={{ color: "#2DB3FF", fontSize: scale(20), textAlign: "center" }}>
                            Happination for!

                        </Text>
                    </View>
                    <View style={{ height: moderateScale(60) }} >
                        <Image
                            source={image.layer}

                            style={{ height: moderateScale(60), width: "80%", justifyContent: "center", alignItems: "center", marginLeft: scale(30), flexDirection: "row" }}
                        />
                    </View>

                </ImageBackground>
                <View style={{ flex: 1, backgroundColor: "#A1C4F9" }} >
                    <View style={{ height: moderateScale(100), justifyContent: "center" }} >
                        <Text style={styles.textsyle}>
                            Lorem Ipsum is simply dummy text of the printing
                        </Text>
                        <Text style={styles.textsyle}>
                            and typesetting industry. Lorem Ipsum has been the
                        </Text>
                        <Text style={styles.textsyle}>
                            Lorem Ipsum is simply dummy text of the printing and
                        </Text>
                    </View>
                    <View style={{ height: moderateScale(140), justifyContent: "center" }} >
                        <Text style={styles.textsyle}>
                            Lorem Ipsum is simply dummy text of the printing
                        </Text>
                        <Text style={styles.textsyle}>
                            and typesetting industry. Lorem Ipsum has been the
                        </Text>
                        <Text style={styles.textsyle}>
                            Lorem Ipsum is simply dummy text of the printing and
                        </Text>
                    </View>
                    <View style={{ height: moderateScale(140), justifyContent: "center" }} >
                        <Text style={styles.textsyle}>
                            Lorem Ipsum is simply dummy text of the printing
                        </Text>
                        <Text style={styles.textsyle}>
                            and typesetting industry. Lorem Ipsum has been the
                        </Text>
                        <Text style={styles.textsyle}>
                            Lorem Ipsum is simply dummy text of the printing and
                        </Text>
                    </View>
                    <View style={{ height: moderateScale(150), width: "100%", flexDirection: "row", justifyContent: "space-evenly", backgroundColor: "#2DB3FF" }} >
                        {/* <View style={{ top: scale(18), height: moderateScale(55), width: "40%", borderRadius: 10, borderWidth: 1, borderColor: "#00598B", justifyContent: "center", alignItems: "center" }} >
                            <Text style={{ textAlign: "center", fontSize: scale(20) }}>
                                I' m in !
                            </Text>
                        </View> */}
                         <TouchableOpacity style={{ top: scale(18), height: moderateScale(55), width: "40%", borderRadius: 10, borderWidth: 1, borderColor: "#00598B", justifyContent: "center", alignItems: "center" }} >
                            <Text style={{ textAlign: "center", fontSize: scale(20) }}>
                                I' m in !
                            </Text>
                        </TouchableOpacity>

                        {/* <View style={{ top: scale(18), height: moderateScale(55), width: "40%", borderRadius: 10, borderWidth: 1, borderColor: "#00598B", justifyContent: "center", alignItems: "center" }} >
                            <Text style={{ textAlign: "center", fontSize: scale(18) }}>
                                May  be Latter
                            </Text>
                        </View> */}
                        <TouchableOpacity style={{ top: scale(18), height: moderateScale(55), width: "40%", borderRadius: 10, borderWidth: 1, borderColor: "#00598B", justifyContent: "center", alignItems: "center" }} >
                            <Text style={{ textAlign: "center", fontSize: scale(18) }}>
                                May  be Later
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>


    );
}

const styles = StyleSheet.create({


    textstyle: {
        fontSize: 18, fontWeight: "500", color: "black", marginLeft: scale(12)

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
    textsyle: {
        textAlign: "center", color: "black", fontWeight: "400", fontSize: scale(13)

    },
    contare1: {
        height: moderateScale(260),
        width: "90%",
        backgroundColor: "#0097CE",
        marginLeft: scale(15),
        borderRadius: scale(10),
        justifyContent: "center", flexDirection: "column", top: scale(8), alignItems: 'center'
    },

});


export default Findyou;
