import React, { useEffect, useState } from "react";
import {
    SafeAreaView, StyleSheet, Text, ImageBackground, TextInput, Animated,
    ScrollView, Button, ActivityIndicator, TouchableOpacity, View, Image, Modal
} from "react-native";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import AsyncStorage from "@react-native-async-storage/async-storage";
import image from "../assets";
import { useNavigation } from '@react-navigation/native';
//import moment from "moment";

const InputextCompoent = (props) => {
    const { dataa } = props;  
    const navigation = useNavigation();
    const [Modalshow, setModalshow] = useState(true);
    const [Dayes, setDayes] = useState();
    const [image1, setimage1] = useState();
    const [image2, setimage2] = useState();
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState([])
    const [loder, sertloder] = useState(true);
    const [Iddd, setIddd] = useState();
    const [UESID, SETUESID] = useState();
    const [lode, setlode] = useState(true);
    const [Nextloder, setNextloder] = useState(true);

    const [curimageURL, setCurImageURL] = useState(null);
    const [nextimageURL, setNextImageURL] = useState(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newData = [Math.random()];
            setData(newData);
        }, 2000);
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        Achievementday();
        Idimage();
    }, [Dayes, Iddd]);
    useEffect(() => {
        setTimeout(() => {
            Achievementday();
            Idimage();
            NextDAy();
        }, 1000);
    }, []);
    const Idimage = async () => {
        const jsonValue = await AsyncStorage.getItem("IdA");
        console.log(">>>>>>>>", UESID)
        let url = `http://demo4.progressiveaidata.in/api/user-achievement`
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };
        fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'same-origin',
            body: JSON.stringify({
                //user_id: jsonValue,
                user_id:dataa,
                achievement_id: Iddd,
            }),
            headers: headers,
        })
            .then((Response) => Response.json())
            .then((Response) => {
                console.log('  id RESPONSE <<<<<-------------->>>>', Response);
            })
            .catch((error) => {
                console.error("ERROR FOUND" + error);
            })
    }
    const Achievementday = async () => {
        const id = await AsyncStorage.getItem("IdA",)
        console.log("GGGGG", id)
         let url = `http://demo4.progressiveaidata.in/api/user-achievement-get/${dataa}`
        // let url = `http://demo4.progressiveaidata.in/api/user-achievement-get/210`

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
                sertloder(false)
                console.log("current_achievement  >", response);
                setimage1(response.last_achievement);
                setIddd(response.last_achievement);
                console.log("id>> image----->>>", Iddd);
                console.log("image image day----->>>", image1);
                setCurImageURL(data.curimageUrl);
            })
            .catch(error => {
                console.error('eRRORR >>>>r', error);
            });
    };

    const NextDAy = async () => {
        const jsonValue = await AsyncStorage.getItem("IdA",)
        console.log("GGGGG", jsonValue)
        let url = `http://demo4.progressiveaidata.in/api/next-achievement-get/${dataa}`
        // let url = `http://demo4.progressiveaidata.in/api/next-achievement-get/210`

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
                console.log("last_achievement  >", response);
                setimage2(response.last_achievement);
                setNextImageURL(data.nextimageURL);   
                setNextloder(false)
            })
            .catch(error => {
                console.error('eRRORR >>>>r', error);
            });
    };


    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: moderateScale(200), backgroundColor: "white", top: scale(10) }}>
                <Text style={{ fontSize: scale(16), color: "black", marginLeft: scale(12), fontWeight: "500", top: 8, }}>Your Goals</Text>
                <View style={{ height: moderateScale(40), width: "100%", alignItems: "center", flexDirection: "row", justifyContent: 'space-around' }}>
                    <View style={styles.contare1}>
                        <Text style={{ fontSize: scale(15), color: "black", fontWeight: "500" }}>Current Achievement </Text>
                    </View>
                    <View style={styles.contare1}>
                        <Text style={{ fontSize: scale(15), color: "black", fontWeight: "500" }}>Next goal</Text>
                    </View>
                </View>
                <View style={{ height: moderateScale(110), width: "90%", marginLeft: scale(15), alignItems: "center", flexDirection: "row" }}>
                    <View style={styles.contare1}>
                        <View style={styles.contare1}>
                            {/* {loder ? (<ActivityIndicator fontWeight={500} size={30} color={"black"} />) : (<Image
                                style={{ width: moderateScale(100), height: moderateScale(100), }}
                                source={{ uri: image1 }}
                            />)} */}
                              {/* { 
                                    loder  ?
                                             (<ActivityIndicator  fontWeight={500}    size={30}  color={"black"} />) :
                                    curimageURL ? 
                                             ( <Image
                                        style={{ width: moderateScale(100), height: moderateScale(100),   }}
                                        source={{ uri:image1}}
                                           />)
                                            :(
                                                <Text style={{color:'black'}}>NA</Text>
                                             )
                                    } */}
                                     { 
                                    loder  ?
                                            //  (<ActivityIndicator  fontWeight={500}    size={30}  color={"black"} />) :
                                            (<Image
                                                style={{ width: moderateScale(100), height: moderateScale(100), marginLeft: scale(18) }}
                                                source={{ uri: "https://i.gifer.com/origin/95/953ec82de95999c8353d19ef7bb56238_w200.gif" }}
                                            />) :
                                             ( <Image
                                        style={{ width: moderateScale(100), height: moderateScale(100),   }}
                                        source={{ uri:image1}}
                                           />)}
                        </View>
                    </View>
                    <View style={styles.contare1} //onPress={() => navigation.navigate('Reset')}
                    >
                        {/* {Nextloder ? (<ActivityIndicator fontWeight={500} size={30} color={"black"} />) : (
                            <Image
                                style={{ width: moderateScale(100), height: moderateScale(100), }}
                                source={{ uri: image2 }}
                            />)} */}
                        {/* { Nextloder  ?
                                            (<ActivityIndicator  fontWeight={500}    size={30}  color={"black"} />)  :
                              nextimageURL ?              
                                            ( <Image
                                        style={{ width: moderateScale(100), height: moderateScale(100),   }}
                                        source={{ uri:image2}}
                                          />)
                                          :(
                                            <Text style={{color:'black'}}>NA</Text>
                                           )
                                          }  */}
                                           { 
                                    Nextloder  ?
                                            //  (<ActivityIndicator  fontWeight={500}    size={30}  color={"black"} />) :
                                            (<Image
                                                style={{ width: moderateScale(100), height: moderateScale(100), marginLeft: scale(18) }}
                                                source={{ uri: "https://i.pinimg.com/originals/f7/0f/91/f70f914c082fde275a2386a33623ac91.gif" }}
                                            />) :
                                             ( <Image
                                        style={{ width: moderateScale(100), height: moderateScale(100),   }}
                                        source={{ uri:image2}}
                                           />)}   
                    </View>
                    {/* <Text style={{color:'black'}}>{dataa} in component</Text> */}
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    TouchableOpacitystyle: {
        height: moderateScale(300), width: "100%", flexDirection: "column", justifyContent: "flex-end",
    },
    contare1: {
        height: moderateScale(120),
        width: "100%", justifyContent: "center",
        flexDirection: "row", alignItems: "center"

    },
    textstyle: {
        fontSize: scale(16),
        textAlign: "center",
        // color: { color },
        fontWeight: "500",
        color: "black"

    },
    item: {
        position: 'relative',
        width: moderateScale(100),
        height: moderateScale(100), // this is the diameter of circle
        backgroundColor: "blue",

        borderWidth: 1,
        borderRadius: 55,
        bottom: scale(20),
        marginLeft: scale(120),

    },
    topItem: {
        width: '100%',
        height: moderateScale(120),
        //  position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#0097CE",
        width: moderateScale(120),
        borderRadius: scale(120),
        top: scale(12)
    },
    text: {
        color: '#fff',
    },
    TouchableOpacitystyle: {
        height: moderateScale(250),
        // backgroundColor:"white",
        top: scale(12), width: "100%", flexDirection: "column", justifyContent: "flex-end",
    },
    contare1: {
        height: moderateScale(120),
        width: "100%", justifyContent: "center",
        flexDirection: "row", alignItems: "center"

    },
    textstyle: {
        fontSize: 24,
        textAlign: "center",
        // color: { color },
        fontWeight: "500"

    },
    TouchableOpacitystyle: {
        height: moderateScale(125),
        backgroundColor: "#FFEBB7",
        top: scale(5),
        // backgroundColor:"red"
        // top: 8
    },
    TouchableOpacitystyle1: {
        height: moderateScale(43),
        borderRadius: scale(8),
        width: "30%",
        justifyContent: "center",
        backgroundColor: "#0097CE",
        padding: scale(11),
        margin: scale(20),
        flexDirection: "row"

    },
    contare1: {
        height: moderateScale(70),
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        flexDirection: "row",


    },
    textstyle: {
        color: "black",
        fontWeight: "500"
    },
    logo: {
        width: 120,
        height: 120,
        resizeMode: 'contain'
    },
    TouchableOpacitystyle: {
        height: moderateScale(150),
        backgroundColor: "#A5E2FF",
    },
    contare1: {
        height: moderateScale(70),
        justifyContent: "center",
        alignItems: "center",
        width: scale(60),


    },
    textstyle: {
        color: "black",
        fontWeight: "600"
    },
    logo: {
        width: 120,
        height: 120,
        resizeMode: 'contain'
    },
    TouchableOpacitystyle: {
        height: moderateScale(150),
        backgroundColor: "white",
        // shadowColor: "white",
        justifyContent: "center",

    },
    contare1: {
        height: moderateScale(25), width: "50%", alignItems: "center", justifyContent: "center",
    },
    textstyle: {
        fontSize: scale(13), color: "black", fontWeight: '400'
    },
    logo: {
        width: 120,
        height: 120,
        resizeMode: 'contain'
    },
});

export default InputextCompoent;
