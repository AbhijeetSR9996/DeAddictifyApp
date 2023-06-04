import React, { useEffect, useState, useCallback } from "react";
import {
    SafeAreaView, StyleSheet, Text, TextInput, ScrollView, Button, TouchableOpacity, View, Image,
    Platform, BackHandler, ImageBackground, RefreshControl
} from "react-native";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
//import moment from "moment";
//import Buttoncompoent from "../../Compoent/Buttoncompoent";
import Homecopment from "../../Compoent/HomeCompoent";
import AsyncStorage from "@react-native-async-storage/async-storage";
import image from "../../assets";
//import { async } from "@firebase/util";
//import ModalDropdown from 'react-native-modal-dropdown';
//import DateTimePickerModal from "react-native-modal-datetime-picker";
import { ActivityIndicator } from "react-native-paper";
const Modifiy = ({ navigation, route }) => {
    const [date, setDate] = useState(new Date());
    const [value, setValue] = React.useState('');
    const [Amount1, setAmount] = useState();
    const [Dob2, setDob2] = useState('');
    const [countdolare, setcountdolare] = useState();
    const [Dob, setDob] = useState('Select Date ');
    const [pickerMode1, setPickerMode1] = useState(null);
    const [Dob1, setDob1] = useState('Select Time ');
    const [Getime, setGetime] = useState("");
    const [selectedDate, setSelectedDate] = useState({ Getime });
    const [selectedDate1, setSelectedDate1] = useState();
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [loder, setloder] = useState(true);
    const [loder1, setloder1] = useState(true)
    const [Loder11, setLoder11] = useState(true);

     const { amount } = route.params;
   // const {id} = route.params;
    // console.log("amount coming in modify screen", amount);
    // console.log("id coming in modify screen", id.myid);

    // useEffect(() => {
    //     setAmount(amount)
    //     indiacurency();
    //     getMoviesFromApi();
    //     console.log(">>>Time", Dob1)
    // }, [countdolare])
    useEffect(() => {
        setAmount(amount)
        indiacurency();
        getMoviesFromApi();
        //console.log(">>>Time", Dob1)
    }, [])
    const indiacurency = async () => {
        const jsonValue = await AsyncStorage.getItem("IdA",)
        console.log("GGGGG", jsonValue)
        let url = `https://demo4.progressiveaidata.in/api/currency-type/${id.myid}`
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };
        fetch(url, {
            method: 'Get',
            credentials: 'same-origin',
            mode: 'same-origin',
            headers: headers,
        })
            .then(response => response.json())
            .then(response => {
                console.log(" Curencsyyyy>>>>>>>", response);
                setloder(false)
                // setcountdolare(response.currency)
                // console.log("countdolare", countdolare)
            })
            .catch(error => {
                console.error('eRRORR >>>>r', error);
            });
    };
    // const hideDatePicker = () => {
    //     setDatePickerVisibility(false);
    // };

    // const handleConfirm = (date) => {
    //     setSelectedDate(date);
    //     hideDatePicker();
    // };
    const getMoviesFromApi = async () => {
        const jsonValue = await AsyncStorage.getItem("IdA",)
        console.log(">>>>>>", jsonValue)
        // let url = `http://demo4.progressiveaidata.in/api/user-get-data/${jsonValue}`
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
                console.log(">>>>", response);
                // setValue(response.user_data.time);
                setAmount(response.user_data.amount);
                //setGetime(response.user_data.time);
                setloder1(false)
                //console.log(">>>>", Time);

            })
            .catch(error => {
                console.error('catch gdwaasjhgdhgdg error', error);
            });
    };

      
    const Realtime = async () => {
        const jsonValue = await AsyncStorage.getItem("IdA",)
        let url = `http://demo4.progressiveaidata.in/api/start-end-date`
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };
        fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'same-origin',
            body: JSON.stringify({
                id: jsonValue,
                //id: id.myid,
                //time: selectedDate,
                amount: Amount1,
            }),
            headers: headers,
        })
            .then((Response) => Response.json())
            .then((Response) => {
                console.log('RESPONSE <>>', Response)
                if (Response.status_code == 200) {
                    console.log('RESPONSE Status-------------->>>>', Response);
                    setLoder11(false)
                    alert("You modified successfully")
                    navigation.navigate('MyTabs'
                        // navigation.navigate(//'Inspirationcompent'
                        // 'MyTabs'
                        //,{amount4:Amount1}                    
                    )

                }
                else if (Response.status_code == 404) {
                    //alert("Please fill this value");
                }
                // else {
                //     alert("Please Enter the value");
                //  }
            })
            .catch((error) => {
                console.error("ERROR FOUND" + error);
            })
    }


    // const showDatePicker = () => {
    //     setDatePickerVisibility(true);
    // };
    const Timeset = () => {
        if (Amount1 == null) {
            alert('Please fill this Amount')
        }
        else {
            //Realtime();
            navigation.navigate('MyTabs')
        }
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#EFF0FF", }}>
            <Homecopment back1={true} />
            <ScrollView style={{ backgroundColor: "white", width: "90%", marginLeft: scale(17) }} showsVerticalScrollIndicator={false}>
                <View style={styles.contare1}>
                    <View style={{ height: moderateScale(70), width: "100%", alignItems: "center", justifyContent: "center", }}>
                        <Image
                            source={image.shpping}
                            style={{ height: moderateScale(57), width: moderateScale(57), }}
                        />
                    </View>
                    <View style={{ height: scale(50), width: '80%', alignItems: 'center', justifyContent: 'center', }}>
                        <Text style={{ textAlign: "center", fontSize: scale(16), color: "white", fontWeight: '600' }}>  When would you like to quit Drinking?</Text>
                    </View>
                </View>
                <View style={{ height: moderateScale(100), padding: scale(8), width: "95%", flexDirection: "row", backgroundColor: "white", top: scale(15), marginLeft: scale(8), borderRadius: 10 }}>
                    {/* <View style={{ height: moderateScale(42), top: scale(4), borderRadius: scale(32), width: "14%", justifyContent: "center", alignItems: "center", backgroundColor: "#C7F0FF", }}>
                        <Image
                            source={image.Notif}
                            style={{ height: moderateScale(25), width: moderateScale(25), }}
                        />
                    </View> */}
                    {/* <View style={{ height: moderateScale(55), width: "55%", justifyContent: "center", alignItems: 'flex-start', flexDirection: 'column', paddingLeft: scale(5), marginRight: scale(6) }}>
                        <Text style={{ fontSize: scale(13), color: "black", fontWeight: '400' }}>Notification Lorem Ipsum is simply</Text>
                    </View>
                    <TouchableOpacity style={{ height: moderateScale(50), borderWidth: 1, borderRadius: 8, borderColor: "grey", width: "30%", alignItems: "center", backgroundColor: "#F0F0F0", }}
                        onPress={showDatePicker}
                    >
                        <Text style={{ marginStart: scale(-12), textAlign: "right", fontSize: scale(13), bottom: 1, fontWeight: "500", color: "black", top: scale(14) }}>   {`${selectedDate ? moment(selectedDate).format("LT") : "Select Time"}`}</Text>
                    </TouchableOpacity> */}
                </View>
                <View style={{ height: moderateScale(330), width: "100%", backgroundColor: "#C7F0FF" }}>
                    <ImageBackground
                        resizeMode="contain"
                        style={{
                            height: moderateScale(320), width: "100%", backgroundColor: "#C7F0FF",
                        }}
                        source={image.Flouber}
                    >
                        <View style={{ height: moderateScale(40), width: "100%", alignItems: "center", justifyContent: "center", backgroundColor: "#C7F0FF" }}>
                            <Text style={{ fontSize: scale(20), color: "black", fontWeight: "600" }}>How Much?  </Text>
                        </View>
                        <View style={{ height: moderateScale(120), width: "100%", flexDirection: "row", justifyContent: "space-evenly", padding: scale(8) }}>
                            <View style={{ height: moderateScale(70), top: scale(5), width: "35%", alignItems: "center", backgroundColor: "#0081B0", justifyContent: "flex-start", borderRadius: scale(10), }}>
                                <View style={{ height: moderateScale(70), width: '100%', alignItems: "center", justifyContent: "flex-start", borderRadius: scale(10), top: 12, right: 12, borderWidth: 1, borderColor: '#0081B0' }}>
                                    {!loder1 ? (<ActivityIndicator style={{
                                        top: scale(12)
                                    }} size={20} color={"black"} />) :
                                        (
                                            // <Text style={{ color: "white" }}> {Amount1}</Text>
                                            <TextInput
                                                style={{ fontSize: 25, bottom: scale(1), color: 'white' }}
                                                //placeholder={Amount1}
                                                maxLength={5}
                                                onChangeText={setAmount}
                                                placeholderTextColor={"white"}
                                                value={Amount1}
                                                keyboardType="decimal-pad"
                                            />)
                                    }
                                </View>
                            </View>
                            <TouchableOpacity style={{ height: moderateScale(70), top: scale(5), width: "35%", alignItems: "center", backgroundColor: "#0081B0", justifyContent: "flex-start", borderRadius: scale(10), }} disabled>
                                <View style={{ height: moderateScale(70), width: '100%', alignItems: "center", justifyContent: "flex-start", borderRadius: scale(10), top: 12, right: 12, borderWidth: 1, borderColor: '#0081B0' }}>
                                    <Text style={{ fontSize: 25, color: "white", fontWeight: '400', top: 8 }}>USD </Text>
                                    {/* {loder ? (<ActivityIndicator style={{
                                        top: scale(12)
                                    }} size={20} color={"black"} />) : (<Text style={{ fontSize: 25, color: "white", fontWeight: '400', top: 8 }}> USD </Text>)
                                    } */}
                                </View>
                            </TouchableOpacity>
                        </View>
                        {/* <Buttoncompoent title={'Let’s go'}
                            onPress={Timeset}
                        /> */}

                        {/* <View style={styles.contare1}> */}
                        <TouchableOpacity style={[styles.TouchableOpacitystyle, { marginLeft: scale(15) }]}
                            onPress={Timeset}
                        >
                            {Loder11 ? (<Text style={styles.textstyle}>{'Let’s go'}</Text>) : (<ActivityIndicator
                                size={25} color={"black"}
                            />
                            )}
                        </TouchableOpacity>
                        {/* <View><Text style={{color:'black'}}>{id.myid} in Modifiy</Text></View> */}
                        {/* </View> */}
                    </ImageBackground>
                </View>
                {/* <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="time"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                /> */}
            </ScrollView>
        </SafeAreaView >
    );
};
const styles = StyleSheet.create({
    TouchableOpacitystyle: {
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

    textstyle: {
        fontSize: scale(15),
        textAlign: "center",
        color: "white",
        fontWeight: "500"

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
    TouchableOpacitystyle: {
        height: moderateScale(46),
        top: scale(18),
        borderRadius: scale(8),
        width: "90%", justifyContent: "center",
        flexDirection: "row", alignItems: "center",
        backgroundColor: "#2DB3FF",
        borderBottomEndRadius: scale(70),
        borderTopStartRadius: scale(55),
        // buttonStyle, backgroundColor: [csCode]

    },
    contare1: {
        height: moderateScale(120),
        width: "100%", justifyContent: "center",
        flexDirection: "row", alignItems: "center"
    },
    textstyle: {
        fontSize: scale(15),
        textAlign: "center",
        color: "white",
        fontWeight: "500"

    },
    contare1: {
        height: moderateScale(260),
        width: "90%",
        backgroundColor: "#0097CE",
        marginLeft: scale(15),
        borderRadius: scale(10),
        justifyContent: "center", flexDirection: "column", top: scale(8), alignItems: 'center'
    },
    textstyle: {
        fontSize: scale(15),
        textAlign: "center",
        color: "white",
        fontWeight: "500"

    },
});

export default Modifiy;



