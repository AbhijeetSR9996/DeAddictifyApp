import React, { useEffect, useRef, useState } from 'react';
import { View, FlatList, SafeAreaView, Text, ScrollView, Animated, Easing, Image, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
//import image from '../assets';
const Achievementcopment = ({ navigation }) => {
    const [Achievement, setAchievement] = useState([]);
    const [loder, setloder] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            fetch('http://demo4.progressiveaidata.in/api/get-achievement')
                .then((response) => response.json())
                .then((response) => {
                    setloder(false)
                    console.log('response achievement_data api ----->>>>>', response.achievement_data.days)
                    setAchievement(response)
                    console.log(' list----->>>>>', Achievement)
                })
                .catch((error) => {
                    console.error('catch api error', error);
                });
        }, 1500);
        // Allgetcounty()
    }, [Achievement]);

    const Rederiteam = ({ item }) => {
        return (
            <View style={{ height: moderateScale(120), padding: scale(10), marginLeft: scale(12), }}>
                {/* <View style={{height: moderateScale(36),}}><Text> Your Achievements</Text></View> */}
                <View style={{ width: "100%", height: moderateScale(82), borderRadius: 12, backgroundColor: "#0097CE", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                    <Image
                        style={{ width: moderateScale(70), height: moderateScale(70), }}
                        source={{ uri: item.image }} />
                </View>
                <View style={{ width: "100%", height: moderateScale(66), flexDirection: "row" }}>
                    <Text style={styles.textstyle}> Day {item.days}</Text>
                </View>
            </View>
        )
    }
    return (
        <ScrollView style={{ flex: 1, }} showsHorizontalScrollIndicator={false}>
            <View style={{ height: moderateScale(130), width: "100%", flexDirection: "row" }} >
                {loder ? (<ActivityIndicator style={{ marginLeft: scale(150) }} size={40} color={'black'} />) : (<FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={Achievement.achievement_data}
                    renderItem={Rederiteam}
                //keyExtractor={(item) => item.id}
                //style={{backgroundColor:'blue'}}
                />)}
            </View>
        </ScrollView>
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
        fontSize: scale(14), color: "black",
        top: scale(6), marginLeft: scale(12)
    },
    logo: {
        width: scale(60), height: moderateScale(50),
    },
});
export default Achievementcopment;