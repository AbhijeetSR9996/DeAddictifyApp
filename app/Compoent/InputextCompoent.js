import React, { useEffect, useState } from "react";
import {
    SafeAreaView, StyleSheet, Text, ImageBackground, TextInput, Animated, ScrollView,
    ActivityIndicator, TouchableOpacity, View, Image, Modal, Button
} from "react-native";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import AsyncStorage from "@react-native-async-storage/async-storage";
//import image from "../assets";
import { useNavigation } from '@react-navigation/native';
//import moment from "moment";

const InputextCompoent = () => {
    const navigation = useNavigation();
    const [Modalshow, setModalshow] = useState(true);
    const [Dayes, setDayes] = useState();
    const [image1, setimage1] = useState();
    const [image2, setimage2] = useState();

    const [showModal, setShowModal] = useState(false);

    const [loder, sertloder] = useState(true);
    const [Iddd, setIddd] = useState();
    const [UESID, SETUESID] = useState();
    const [lode, setlode] = useState(true);
    const [Nextloder, setNextloder] = useState(true);
    const value = new Animated.Value(0);
    useEffect(() => {
        const interval = setInterval(() => {
            Animated.sequence([
                Animated.timing(value, {
                    toValue: 1,
                    duration: 800,
                    useNativeDriver: false
                }),
                Animated.timing(value, {
                    toValue: 0,
                    duration: 800,
                    useNativeDriver: false
                })
            ]).start()

        }, 1200);
        return () => (interval);
    }, []);

    const translateX = value.interpolate({
        inputRange: [0, 1],
        outputRange: [100, 0],
    });
    const opacity = value

    useEffect(() => {
        Achievementday();
        Dayapi();
        Idimage();
    }, [Dayes, Iddd]);
    useEffect(() => {
        setTimeout(() => {
            Achievementday();
            Dayapi();
            Idimage();
            NextDAy();
        }, 1000);
    }, []);
    const Idimage = async () => {
        const jsonValue = await AsyncStorage.getItem("IdA",);
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
                user_id: jsonValue,
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
    const Dayapi = async () => {
        const jsonValue = await AsyncStorage.getItem("IdA",)
        console.log("GGGGG", jsonValue)
        let url = `http://demo4.progressiveaidata.in/api/user-day-show/${jsonValue}`
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };
        fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'same-origin',
            headers: headers,
        })
            .then(response => response.json())
            .then(response => {
                // console.log("day----->>>",response);
                // console.log("days_Show   ----->>>",response.days_show);
                setDayes(response.days_show);
                setlode(false)

                console.log("Dayes  day----->>>", Dayes);
            })
            .catch(error => {
                console.error('eRRORR >>>>r', error);
            });
    };
    const Achievementday = async () => {
        const jsonValue = await AsyncStorage.getItem("IdA",)
        console.log("GGGGG", jsonValue)// 
        //   let url = `http://demo4.progressiveaidata.in/api/user-achievement-get/${jsonValue}`
        let url = `http://demo4.progressiveaidata.in/api/user-achievement-get/${jsonValue}`

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
                console.log("current_achievement  >", response);
                sertloder(false)
                setimage1(response.last_achievement);
                setIddd(response.last_achievement);
                console.log("id>> image----->>>", Iddd);
                console.log("image image day----->>>", image1);
            })
            .catch(error => {
                console.error('eRRORR >>>>r', error);
            });
    };

    const NextDAy = async () => {
        const jsonValue = await AsyncStorage.getItem("IdA",)
        console.log("GGGGG", jsonValue)
        //   let url = `http://demo4.progressiveaidata.in/api/user-achievement-get/${jsonValue}`
        let url = `http://demo4.progressiveaidata.in/api/next-achievement-get/${jsonValue}`

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
                console.log("next_achievement  >", response);
                setNextloder(false)
                setimage2(response.last_achievement);
            })
            .catch(error => {
                console.error('eRRORR >>>>r', error);
            });
    };


    // const NoApi = async () => {
    //     const jsonValue = await AsyncStorage.getItem("IdA",)
    //      console.log("GGGGG",jsonValue)
    //      let url = `http://demo4.progressiveaidata.in/api/user-reset-status/${jsonValue}`
    //      var headers = {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json',
    //     };
    //       fetch(url, {
    //         method: 'Post',
    //         credentials: 'same-origin',
    //         mode: 'same-origin',
    //         headers: headers,
    //        })
    //         .then(response => response.json())
    //         .then(response => {
    //           console.log(" No ----->>>",response);
    //           })
    //         .catch(error => {
    //             console.error('eRRORR >>>>r', error);
    //         });
    //   };

    // const Showalert = async () => {
    //   const jsonValue = await AsyncStorage.getItem("IdA",)
    //    console.log("GGGGG",jsonValue)
    //   let url = `http://demo4.progressiveaidata.in/api/user-alert/${jsonValue}`
    //    var headers = {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json',
    //   };
    //   fetch(url, {
    //       method: 'POSt',
    //       credentials: 'same-origin',
    //       mode: 'same-origin',
    //       body: JSON.stringify({
    //          status:'Yes',
    //          get_status:Modalshow
    //     }),
    //       headers: headers,
    //   })
    //       .then(response => response.json())
    //       .then(response => {
    //         console.log("Show ----->>>",response);
    //         console.log("Show ----->>>",Modalshow);
    //         Achievementday();
    //         Idimage();
    //         if (response.status_code ==200){
    //           alert("Successful")
    //         setModalshow(false)
    //         // jsonValue
    //         }
    //         })
    //       .catch(error => {
    //           console.error('catch gdwaasjhgdhgdg error', error);
    //       });
    // };
    return (
        <View style={{ flex: 1 }}>
            {/* <View style={styles.TouchableOpacitystyle}>
                <Animated.View style={[styles.item,]} >
                    <Animated.View style={[styles.topItem,]}>
                        {lode ? (<ActivityIndicator size={25} color={"black"} />) :
                            (<Text style={{ fontSize: 18, color: "white", fontWeight: "500" }}>{Dayes} Day</Text>)
                        }
                    </Animated.View>
                </Animated.View>
            </View> */}
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
                            {loder ? (<ActivityIndicator fontWeight={500} size={30} color={"black"} />) : (<Image
                                style={{ width: moderateScale(100), height: moderateScale(100), }}
                                source={{ uri: image1 }}
                            />)}
                        </View>
                    </View>
                    <TouchableOpacity style={styles.contare1}
                        onPress={() => navigation.navigate('Reset')}>
                        {Nextloder ? (<ActivityIndicator fontWeight={500} size={30} color={"black"} />) : (
                            <Image
                                style={{ width: moderateScale(100), height: moderateScale(100), }}
                                source={{ uri: image2 }}
                            />
                        )}
                    </TouchableOpacity>
                </View>
            </View>



            {/* <View style={{height:moderateScale(180),width:'100%', top:scale(15), backgroundColor:"white",}}>
            <View style={{ height: moderateScale(50), width: "90%", marginLeft: scale(12),   }}>
                <Text style={{fontSize:scale(15),color:"black",fontWeight:"500"}}>Daliy checkin</Text>
                <Text style={{fontSize:scale(15),color:"black",fontWeight:"500"}}>Where you successfully yesterday</Text>
            </View>
            
            <View style={{ height: moderateScale(120),  top:scale(5),  width: "100%", justifyContent: "center", alignItems: "center", flexDirection: "row",  }}>
            {            Modalshow ? (         <View style={{ height: moderateScale(80),  backgroundColor: '#005676', flexDirection: 'row', width: '50%', justifyContent: 'space-evenly' }}>
{            Modalshow ? (        <TouchableOpacity    onPress={Showalert}>
                        <ImageBackground style={ {height:moderateScale(60),width:scale(55),  top:scale(8),   }} source={image.maincolur}>
                            <Image style={{ height: scale(33), width: scale(33),marginLeft:scale(11),top:scale(2) }}
                                source={image.success}
                            />
                            <Text style={{ color: "white", fontSize: scale(13),marginLeft:scale(15) }}>Yes</Text>
                        </ImageBackground>
                        </TouchableOpacity>):null}
                        {        Modalshow   ?(   <TouchableOpacity   //onPress={NoApi}
                        onPress={()=>{NoApi,setShowModal(!showModal)}}
                          >
      <ImageBackground style={ {height:moderateScale(60),width:scale(55),  top:scale(9),  marginLeft:scale(17) }} source={image.maincolur}>
                         <Image style={{ height: scale(33), width: scale(33),marginLeft:scale(11),top:scale(2) }}
                            source={image.close}
                        />
                        <Text style={{ color: "white", fontSize: scale(13),marginLeft:scale(18) }}>No</Text>
                </ImageBackground>
                    </TouchableOpacity>):null}
                 
                </View>):null}
             </View>



        </View> */}

            {/* -----------No Value MODAL-------------- */}

            {/* <Modal
          animationType={'slide'}
          transparent={true}
          visible={showModal}
          onRequestClose={() => {
            console.log('No value modal has been closed.');
          }}>
          <View style={{flex: 1,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    marginVertical: 290,
    marginHorizontal: 30,
    justifyContent:'center',
    borderRadius:10}}>
         <TouchableOpacity //onPress={() => { setShowModal(!showModal);}}
         onPress={() => navigation.navigate('Reset',setShowModal(!showModal))}>
                <Text style={{fontSize:30,color: 'red',marginBottom: 20, marginTop:-80,marginLeft:scale(250)}}>X</Text>
        </TouchableOpacity>
            <Text style={{color: 'black',fontSize:20,}}>You need to pay 100 USD...</Text>
          </View>
        </Modal>

         -----------x-------------- */}

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