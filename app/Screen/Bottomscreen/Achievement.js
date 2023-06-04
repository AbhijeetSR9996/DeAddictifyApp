import React, { useEffect, useRef, useState } from 'react';
import { View, SafeAreaView, Text, ScrollView, Animated, Easing, Image, TouchableOpacity, StyleSheet, ImageBackground, ActivityIndicator } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Homecopment from '../../Compoent/HomeCompoent';
import Achievementcopment from '../../Compoent/Achievementcompoent';
//import InputextCompoent from '../../Compoent/InputextCompoent';
import Daycomponent from '../../Compoent/Daycomponent';
import image from '../../assets';
import { Avatar, Card, } from 'react-native-paper';
const Achievement = ({ navigation,route }) => {
    const [Daylest, setDaylest] = useState();
    const [loder, setloder] = useState();

    // const {Response} = route.params;
    // console.log('response from login to achievements', Response); 

    useEffect(() => {
        setTimeout(() => {
            fetch('http://demo4.progressiveaidata.in/api/get-max-day')
                .then((response) => response.json())
                .then((response) => {
                    setloder(false)
                    console.log('list----->>>>>', response)
                    setDaylest(response.max_data.days);
                })
                .catch((error) => {
                    console.error('catch api error', error);
                });
        }, 1500);
    }, [Daylest]);
    return (
        <SafeAreaView style={{ flex: 1, }}>
            <Homecopment back2={true} name={"Achievement"} image3={image.King} tincolur={"white"} />

            <ScrollView style={{ flex: 1, backgroundColor: "#F5F5F5" }} showsVerticalScrollIndicator={false}>
                {/* <View>
                <Text style={{ fontSize: 16, color: "black", marginLeft: scale(18),marginTop: scale(3)}}> Your Achievements</Text>
            </View> */}
                <Achievementcopment />
                <View style={{marginBottom: scale(27)}}>
                {/* <InputextCompoent /> */}
                <Daycomponent dataa={Response}
        />
                {/* <Daycomponent 
                dataid={myId}/> */}
                {/* <View>{<Text style={{color:'grey'}}>{Response} in Achievement</Text>}</View> */}
                </View>
                {/* <View style={{ height: moderateScale(120), padding: scale(12), flexDirection: "row", justifyContent: 'space-between' }}>
                    <TouchableOpacity style={{ height: moderateScale(90), borderWidth: 2, borderColor: "#0097CE", width: "48%", borderBottomEndRadius: scale(12), borderTopLeftRadius: scale(12), justifyContent: "center", }}>
                        <View style={{ height: moderateScale(80), borderWidth: 2, backgroundColor: "#0097CE", borderColor: "#0097CE", width: scale(120), borderBottomEndRadius: scale(12), borderTopLeftRadius: scale(12), justifyContent: "center", }}>
                            <Text style={{ fontSize: 16, color: "white", marginLeft: '5%' }}>"Add current Achievement Widget to Home Screen"</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: moderateScale(90), borderWidth: 2, borderColor: "#0097CE", width: "48%", borderBottomEndRadius: scale(12), borderTopLeftRadius: scale(12), justifyContent: "center", }}>
                        <View style={{ height: moderateScale(80), borderWidth: 2, backgroundColor: "#0097CE", borderColor: "#0097CE", width: scale(120), borderBottomEndRadius: scale(12), borderTopLeftRadius: scale(12), justifyContent: "center", }}>
                            <Text style={{ fontSize: 16, color: "white" }}> "Add Next Goal to</Text>
                            <Text style={{ fontSize: 16, color: "white", marginTop: '-2%', marginLeft: '2%'}}> Home Screen" </Text>
                            <Text style={{ fontSize: 16, color: "white" , marginTop: '-2%', marginLeft: '2%'}}> widget</Text>
                        </View>
                    </TouchableOpacity>
                </View> */}
                {/* <View>
                    <View style={{ height: moderateScale(110), width: "100%", alignItems: "center", flexDirection: "row", }}>
                        <View style={styles.contare1}>
                            <Image
                                style={{ width: moderateScale(100), height: moderateScale(100), bottom: scale(8), marginLeft: scale(30), }}
                                source={{ uri: "https://i.pinimg.com/originals/c1/1d/05/c11d05415f5ff082abf5155fa6d98e1f.gif" }}
                            />
                        </View>
                        <View style={styles.contare1}>
                            <Image
                                style={{ width: moderateScale(100), height: moderateScale(100), bottom: scale(8), marginLeft: scale(30), }}
                                source={{ uri: "https://cdn.dribbble.com/users/108183/screenshots/6014587/star_animation_dribbble.gif" }}
                            />
                        </View>
                    </View>
                </View> */}
                <View style={{ height: moderateScale(120), backgroundColor: "#A5E2FF", padding: scale(12), flexDirection: "column", }}>
                    <Text style={{ fontSize: 16, color: "black", marginLeft: scale(12) }}>Stats:</Text>
                    <Text style={{ fontSize: 16, color: "black", marginLeft: scale(12) }}>No of Resets :  5</Text>
                    {loder ? (<ActivityIndicator size={25} color={"black"} />) : (<Text style={{ fontSize: 16, color: "black", marginLeft: scale(12) }}>Max Streak :  {Daylest} days</Text>)
                    }
                </View>
                <Card style={{
                    height: moderateScale(200), //top: scale(30),
                    top: scale(15), width: "100%"
                }}>
                    <Card.Cover source={{ uri: "https://i.pinimg.com/originals/3b/6c/47/3b6c47a0b5ff7d232f5d9f9e5e28c24a.gif" }}
                    />
                </Card>

            </ScrollView>
        </SafeAreaView>

    );
}
const styles = StyleSheet.create({
    TouchableOpacitystyle: {
        height: moderateScale(120),
        shadowColor: "white",
        justifyContent: "center"
    },
    contare1: {
        height: moderateScale(45), width: "50%", alignItems: "center", flexDirection: "row",

    },
    textstyle: {
        fontSize: scale(15), color: "black"
    },
    logo: {
        width: 120,
        height: 120,
        resizeMode: 'contain'
    },
});
export default Achievement;
