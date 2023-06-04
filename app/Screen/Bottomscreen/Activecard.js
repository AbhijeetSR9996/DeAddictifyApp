
import React, { useEffect, useRef, useState } from 'react';
import { View, SafeAreaView, BackHandler, Button, ImageBackground, Alert, Text, ScrollView, Animated, Easing, Image, TouchableOpacity, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Homecopment from '../../Compoent/HomeCompoent';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Daycompoent from '../../Compoent/Daycompoent'
import { useFocusEffect, StackActions } from '@react-navigation/native';
import image from '../../assets';
import { LottieView } from 'lottie-react-native';
import Dealiycheck from '../../Compoent/Dealiycheck';
import DropDownPicker from "react-native-dropdown-picker";
import ModalDropdown from 'react-native-modal-dropdown';
import { Avatar, Card, } from 'react-native-paper';
import { LoadEarlier } from 'react-native-gifted-chat';
const SetSettinscreenting = ({ navigation }) => {
    const [Grop1, setGrop1] = React.useState([]);
    const [GroupLoder, setGroupLoder] = useState(true)
    const [Type, setType] = useState();
    useEffect(() => {
        Goutype();
        Getemail5();
    }, [Grop1])
    useEffect(() => {
        setTimeout(() => {
            getMoviesFromApi();
        }, 1000);
    }, []);
    const Goutype = async () => {
        const jsonValue = await AsyncStorage.getItem("IdA",)
        let url = `http://demo4.progressiveaidata.in/api/user-get-data/${jsonValue}`
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
                console.log(">>>>", response);
                var Id1111 = (response.user_data.alcohol)
                Getemail5(Id1111)
                setType(response.user_data.alcohol);
                console.log("Type>>>>", Type)

            })
            .catch(error => {
                console.error('catch gdwaasjhgdhgdg error', error);
            });
    };
    const Getemail5 = async (Id1111) => {
        const All = JSON.stringify(Id1111)
        try {
            await AsyncStorage.setItem("TP", All)
            console.log(" Set It >>>>", All);

        } catch (e) {
            // read error
        }
    }
    const getMoviesFromApi = async () => {
        const Typesss = await AsyncStorage.getItem("TP",)
        console.log("TP--Get ", Typesss)
        // let url = `http://demo4.progressiveaidata.in/api/forum-group/${Typesss}`
        let url = `http://demo4.progressiveaidata.in/api/forum-group/Alcohol`

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
                console.log("   Group >>>>", response);
                setGrop1(response);
                console.log("--->>>>", Grop1);
                setGroupLoder(false)

            })
            .catch(error => {
                setGroupLoder(true)
                console.error('catch gdwaasjhgdhgdg error', error);
            });
    };
    const Useridname = ({ item }) => {
        return (
            <View style={{
                alignItems: "center", width: "90%", marginLeft: scale(18), marginTop: scale(15)
            }} >
                <View style={{
                    height: moderateScale(55),
                    width: "100%",
                    flexDirection: "row",
                }}
                >
                    <View style={{
                        marginLeft: scale(20),
                        height: moderateScale(40), width: scale(40), backgroundColor: "#FCCC52", alignItems: "center", justifyContent: "center"
                        , borderRadius: 28,

                    }}
                    >
                        <Image
                            style={{ height: moderateScale(40), width: scale(40), borderRadius: moderateScale(40) }}
                            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD5iROb1TgJ_rcl-6r-68v1yjtID052zxSkw&usqp=CAU' }}
                        />
                    </View>
                    <View style={{
                        height: moderateScale(40), width: "30%", alignItems: "center", justifyContent: "center"
                        ,

                    }}
                    >

                        <Text style={{ color: "black", fontSize: 15, }}>{item.group_name}</Text>
                    </View>

                </View>
            </View>

        )
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
            <Homecopment name={"Forum"} image3={image.forum} 
            onpresss={() => navigation.navigate("Works")} />
            <ScrollView style={{ flex: 1, backgroundColor: "#F5F5F5" }} showsVerticalScrollIndicator={false}>
                <Card>
                    <Card.Cover source={{ uri: "https://media2.giphy.com/media/f9zj4ybyAtzlhz8HA6/giphy.gif?cid=ecf05e47s00m8o30gmnku17e3z6pb5mckhc1xf85tocgw4l9&rid=giphy.gif&ct=g" }}
                    />
                </Card>
                <View style={{ alignItems: 'center', justifyContent: 'space-around', width: '100%', height: scale(190), top: 10 }}>
                    <View style={{ height: scale(30), width: '100%', backgroundColor: 'white', justifyContent: 'center', alignItems: 'flex-start', paddingLeft: scale(25) }}>
                        <Text style={{ fontSize: scale(13), fontWeight: '500', color: 'black' }}>
                            Go premium  Ads
                        </Text>
                    </View>
                    <View style={{ height: moderateScale(70), padding: scale(8), width: "90%", flexDirection: "row", backgroundColor: "#EFF0FF", borderRadius: 10, }}>
                        <View style={{ height: moderateScale(40), borderRadius: scale(10), top: scale(8), width: "13%", justifyContent: "center", alignItems: "center", backgroundColor: "#EFF0FF", marginRight: scale(10) }}>
                            <Image
                                source={image.Notif}
                                style={{ height: moderateScale(25), width: moderateScale(20), }} />
                        </View>
                        {/* <View style={{ height: moderateScale(55), width: "70%", justifyContent: "center", alignItems: 'flex-start', flexDirection: 'column', paddingLeft: scale(5), marginRight: scale(6), }}>
                            <Text style={{ fontSize: scale(12), color: "black", fontWeight: '500' }}>Achievement</Text>
                        </View> */}
                        <TouchableOpacity style={{ height: moderateScale(55), width: "70%", justifyContent: "center", alignItems: 'flex-start', flexDirection: 'column', paddingLeft: scale(5), marginRight: scale(6), }}
                          onPress={() => navigation.navigate("Activecard")}>
                            <Text style={{ fontSize: scale(12), color: "black", fontWeight: '500' }}>Achievement</Text>
                        </TouchableOpacity>
                        <View style={{ height: 55, width: '12%', justifyContent: "center", alignItems: 'center' }}>
                            <Image
                                source={image.rightArroy}
                                style={{ height: moderateScale(19), width: moderateScale(10), }}
                            />
                        </View>
                    </View>
                    <View style={{ height: moderateScale(70), padding: scale(8), width: "90%", flexDirection: "row", backgroundColor: "white", borderRadius: 10, }}>
                        <View style={{ height: moderateScale(40), borderRadius: scale(10), top: scale(8), width: "13%", justifyContent: "center", alignItems: "center", backgroundColor: "#C7F0FF", marginRight: scale(10) }}>
                            <Image
                                source={image.bottel}
                                style={{ height: moderateScale(25), width: moderateScale(25), }} />
                        </View>
                        {/* <View style={{ height: moderateScale(55), width: "70%", justifyContent: "center", alignItems: 'flex-start', flexDirection: 'column', paddingLeft: scale(5), marginRight: scale(6), }}>
                            <Text style={{ fontSize: scale(12), color: "black", fontWeight: '500' }}> Addiction- Type Forum</Text>
                        </View> */}
                        <TouchableOpacity style={{ height: moderateScale(55), width: "70%", justifyContent: "center", alignItems: 'flex-start', flexDirection: 'column', paddingLeft: scale(5), marginRight: scale(6), }}
                          onPress={() => navigation.navigate("Chatscreen")}>
                            <Text style={{ fontSize: scale(12), color: "black", fontWeight: '500' }}> Addiction- Type Forum</Text>
                        </TouchableOpacity>
                        <View style={{ height: 55, width: '12%', justifyContent: "center", alignItems: 'center' }}>
                            <Image
                                source={image.rightArroy}
                                style={{ height: moderateScale(19), width: moderateScale(10), }}
                            />
                        </View>
                    </View>
                </View>
                <ScrollView style={{ height: moderateScale(430), backgroundColor: "#A5E2FF", width: "94%", padding: scale(12), marginLeft: scale(11), top: scale(12) }}>
                    {GroupLoder ? (<ActivityIndicator size={30} color={"black"} style={{ top: scale(12), height: moderateScale(300) }} />) : (<FlatList
                        data={Grop1.user_image}
                        renderItem={Useridname}
                    />)}
                </ScrollView>
                <View style={{ height: moderateScale(80), width: "100%", flexDirection: "column", alignItems: 'center', justifyContent: 'center', marginBottom: scale(20), position: "relative" }}>
                    <View style={{ height: moderateScale(60), width: "90%", top: scale(10), flexDirection: "row", backgroundColor: "white", borderRadius: 10, alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Chatscreen")}
                            style={{ height: moderateScale(60), width: "43%", justifyContent: "center", alignItems: 'flex-start', flexDirection: 'column', paddingLeft: scale(20), }}>
                            <Text style={{ fontSize: scale(14), color: "black", fontWeight: '500' }}>Type </Text>
                        </TouchableOpacity>
                        <View style={{ height: 60, width: '55%', justifyContent: "space-around", alignItems: 'center', flexDirection: 'row' }}>
                            <TouchableOpacity style={{ height: 37, width: '18%', justifyContent: "center", alignItems: 'center', backgroundColor: '#0097CE', flexDirection: 'column', borderRadius: scale(5) }}>
                                <Image
                                    source={image.dolowd}
                                    style={{ height: moderateScale(27), width: moderateScale(27), }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ height: 37, width: '18%', justifyContent: "center", alignItems: 'center', backgroundColor: '#0097CE', flexDirection: 'column', borderRadius: scale(5) }}>
                                <Image
                                    source={image.menu}
                                    style={{ height: moderateScale(27), width: moderateScale(27), }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ height: 37, width: '18%', justifyContent: "center", alignItems: 'center', backgroundColor: '#0097CE', flexDirection: 'column', borderRadius: scale(5) }}>
                                <Image
                                    source={image.trophy}
                                    style={{ height: moderateScale(27), width: moderateScale(27), }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
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
    card: {
        flex: 1,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "#E8E8E8",
        justifyContent: "center",
        backgroundColor: "white"
    },
    text: {
        textAlign: "center",
        fontSize: 50,
        backgroundColor: "transparent"
    }

});
export default SetSettinscreenting;











{/* <View style={{ marginTop: moderateScale(5), width: '100%', paddingHorizontal: scale(20) }}>
                    <View style={{ zIndex: 1, }}>
                        <DropDownPicker
                            dropDownDirection="BOTTOM"
                            open={openCountry}
                            value={value}
                            items={items}
                            setOpen={setopenCountry}
                            setValue={setValue}
                            setItems={setItems}
                            zIndex={1000}
                            zIndexInverse={1000}
                            itemTextStyle={{ backgroundColor: "red", zIndex: 3 }}
                            containerStyle={{ position: 'relative', paddingTop: 10 }}
                            labelStyle={{ color: "black", fontSize: scale(15) }}
                            childrenContainerStyle={{
                                borderColor: "blue",
                                zIndex: 2,
                                height: 300,
                            }}
                            style={{
                                // backgroundColor: colors.white,
                                // borderColor: Eroovalue ? "red" : "#EFF0FF",
                                zIndex: 2000,
                                borderWidth: 1,
                                position: 'relative',
                                height: moderateScale(50),
                                width: "95%",
                                marginLeft: scale(5),
                            }}
                            itemStyle={{ justifyContent: 'flex-start' }}
                            dropDownStyle={{ zIndex: 1000, backgroundColor: '#fafafa', height: 100 }}
                            dropDownContainerStyle={{
                                backgroundColor: 'white',
                                borderColor: "blue",
                                height: moderateScale(120),
                                width: "95%",
                                marginLeft: scale(5),
                            }}
                        />
                    </View>
                </View> */}









