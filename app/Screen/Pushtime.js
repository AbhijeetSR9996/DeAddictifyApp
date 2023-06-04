import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, ScrollView, Button, TouchableOpacity, View, Image, Platform, BackHandler, ImageBackground } from "react-native";
import image from "../assets";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
// import DateTimePickerModal from "react-native-modal-datetime-picker";
// import moment from "moment"
import Homecopment from "../Compoent/HomeCompoent";
import Buttoncompoent from "../Compoent/Buttoncompoent";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import DropDownPicker from "react-native-dropdown-picker";
// import ModalDropdown from 'react-native-modal-dropdown';
// import { ActivityIndicator } from "react-native-paper";
const Pushtime = ({ navigation,route }) => {
    const [Amount1, setAmount] = useState();
    const [value, setValue] = React.useState('');
    const [countdolare, setcountdolare] = useState();
    const [date, setDate] = useState(new Date());
    const [date1, setDate1] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [Show, setShow] = useState(false);
    const [text, settext] = useState('Empty');
    const [pickerMode, setPickerMode] = useState(null);
    const [Dob, setDob] = useState('Select Date ');
    const [pickerMode1, setPickerMode1] = useState(null);
    const [Dob1, setDob1] = useState('Select Date ');
    const [selectedDate, setSelectedDate] = useState();
    const [selectedDate1, setSelectedDate1] = useState();
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [loder, setloder] = useState(true)

    // const { Response } = route.params;
    // console.log("Id111 in pushtime", Response);

    const Timeset = () => {
        if (Amount1 == null) {
            alert('Please fill Amount')
        }
        else {
            //Realtime();
            navigation.navigate('MyTabs')
        }
    }


    useEffect(() => {
        indiacurency()
    }, []);
    const indiacurency = async () => {
        const jsonValue = await AsyncStorage.getItem("IdA",)
        console.log("GGGGG", jsonValue)
        let url = `https://demo4.progressiveaidata.in/api/currency-type/${jsonValue}`
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
                console.log(" Curencsyyyy>>>>>>>", response)
                setloder(false)
                setcountdolare(response.currency)
                console.log("countdolare", countdolare)

            })
            .catch(error => {
                console.error('eRRORR >>>>r', error);
            });
    };
    const Realtime = async () => {
        const jsonValue = await AsyncStorage.getItem("IdA",)
        console.log(">>>>>>>>", jsonValue)
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
                //id: response,
                //time: Dob1,
                amount: Amount1,
            }),
            headers: headers,
        })
            .then((response) => response.json())
            .then((response) => {
                console.log('RESPONSE <>>', response)
                if (response.status_code == 200) {
                    console.log('RESPONSE Status-------------->>>>', response)
                    // navigation.navigate('MyTabs', {
                    //     screen: 'Home',
                    //     params: {Response:Response.id},
                    //   });  
                    {
                          navigation.navigate('MyTabs', {
                            screen: 'Achievement',
                            params: {Response:Response.id},
                          }),
                          navigation.navigate('MyTabs', {
                            screen: 'Home',
                            params: {Response:Response.id},
                          });
                        } 
                }
                else if (response.status_code == 404) {
                    // alert("Please fill this Value");
                }
                // else {
                //     alert("Please Enter the value");
                //  }
            })
            .catch((error) => {
                console.error("ERROR FOUND" + error);
            })
    }


    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        setSelectedDate(date);
        hideDatePicker();
    };

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#EFF0FF", }}>
            <Homecopment />
            <ScrollView style={{ backgroundColor: "white", width: "90%", marginLeft: scale(17) }} showsVerticalScrollIndicator={false}>
                <View style={styles.contare1}>
                    <View style={{ height: moderateScale(70), width: "100%", alignItems: "center", justifyContent: "center", }}>
                        <Image
                            source={image.shpping}
                            style={{ height: moderateScale(57), width: moderateScale(57), }}
                        />
                    </View>
                    <View style={{ height: scale(50), width: '80%', alignItems: 'center', justifyContent: 'center', }}>
                        <Text style={{ textAlign: "center", fontSize: scale(16), color: "white", fontWeight: '600' }}>When would you like to quit Drinking?</Text>
                    </View>
                </View>
                <View style={{ height: moderateScale(100), padding: scale(8), width: "95%", flexDirection: "row", backgroundColor: "white", top: scale(15), marginLeft: scale(8), borderRadius: 10 }}>
                    {/* <View style={{ height: moderateScale(40), top: scale(4), borderRadius: scale(40), width: "14%", justifyContent: "center", alignItems: "center", backgroundColor: "#C7F0FF", }}>
                        <Image
                            source={image.Notif}
                            style={{ height: moderateScale(25), width: moderateScale(25), }}
                        />
                    </View> */}
                    {/* <View style={{ height: moderateScale(55), width: "45%", justifyContent: "center", alignItems: 'flex-start', flexDirection: 'column', paddingLeft: scale(5), marginRight: scale(6) }}>
                        <Text style={{ fontSize: scale(12), color: "black", fontWeight: '400' }}>Notification Lorem ipsum is simply</Text>
                    </View> */}

                    {/* <TouchableOpacity style={{ height: moderateScale(50), borderWidth: 1, borderRadius: 8, borderColor: "grey", width: "30%", alignItems: "center", backgroundColor: "#F0F0F0", }}
                        onPress={showDatePicker}
                    >
                        <Text style={{ marginStart: scale(-12), textAlign: "right", fontSize: scale(13), bottom: 1, fontWeight: "500", color: "black", top: scale(14) }}>    {`${selectedDate ? moment(selectedDate).format("LT") : "Select Time"}`}</Text>
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
                                    <TextInput
                                        style={{ fontSize: 25, color: "white" }}
                                        placeholder={"0.00"}
                                        maxLength={5}
                                        onChangeText={setAmount}
                                        placeholderTextColor={"white"}
                                        value={Amount1}
                                        keyboardType="decimal-pad"
                                    />
                                </View>
                            </View>
                            {/* <TouchableOpacity style={{ height: moderateScale(70), top: scale(5), width: "35%", alignItems: "center", backgroundColor: "#0081B0", justifyContent: "flex-start", borderRadius: scale(10), }}>
                                <View style={{ height: moderateScale(70), width: '100%', alignItems: "center", justifyContent: "flex-start", borderRadius: scale(10), top: 12, right: 12, borderWidth: 1, borderColor: '#0081B0' }}>
                                    {loder ? (<ActivityIndicator style={{ top: scale(12) }} size={25} color={"black"} />) : (<Text style={{ fontSize: 22, color: "white", fontWeight: '500', top: scale(12) }}>  {countdolare} or USD   </Text>)
                                    }
                                </View>
                            </TouchableOpacity> */}
                            <TouchableOpacity style={{ height: moderateScale(70), top: scale(5), width: "35%", alignItems: "center", backgroundColor: "#0081B0", justifyContent: "flex-start", borderRadius: scale(10), }} disabled>
                                <View style={{ height: moderateScale(70), width: '100%', alignItems: "center", justifyContent: "flex-start", borderRadius: scale(10), top: 12, right: 12, borderWidth: 1, borderColor: '#0081B0' }}>
                                    <Text style={{ fontSize: 25, fontWeight: '500', color: "white", top: scale(12) }}> 
                                     {/* {countdolare}   */}
                                    USD
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <Buttoncompoent title={'Let’s go'}
                             onPress={Timeset}
                        
                            // onPress={()=> navigation.navigate('MyTabs', {
                            //     screen: 'Home',
                            //     params:{Response},
                            //     //params: {responseid:Response.user_data.id}
                            //   })
                            // }
                        />
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

export default Pushtime;



