import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, ScrollView, Button, TouchableOpacity, View, Image, Platform, BackHandler } from "react-native";
import image from "../assets";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { shadow } from "react-native-paper";
import moment from "moment";
import Homecopment from "../Compoent/HomeCompoent";
const Timecompoent = () => {
    // const { buttonStyle, textStyle } = styles;
    const [date, setDate] = useState(new Date());
    const [date1, setDate1] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [Show, setShow] = useState(false);
    const [text, settext] = useState('Empty');
    const [pickerMode, setPickerMode] = useState(null);
    const [Dob, setDob] = useState('Select Date ');
    const [pickerMode1, setPickerMode1] = useState(null);
    const [Dob1, setDob1] = useState('Select Date ');



    // Date 
    const showDatePicker = () => {
        setPickerMode("date");
    };
    const hidePicker = () => {
        setPickerMode(null);
    };
    const handleConfirm = (date) => {
        hidePicker();
        setDob(moment(date).format('L'))
    };


    //  Time
    const showDatePicker1 = () => {
        setPickerMode1("time");
    };
    const hidePicker1 = () => {
        setPickerMode1(null);
    };
    const handleConfirm1 = (date1) => {
        hidePicker();
        setDob1(moment(date1).format('L'))
    };
    const LoginFunction = () => {
        // let url = `http://vscard.progressiveaidata.in/api/login`   //API to render signup
        // let url = `https://tada.progressiveaidata.in/api/user-login`
        let url = `http://demo4.progressiveaidata.in/api/login-user`
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };
        fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'same-origin',
            body: JSON.stringify({
                // email: Email,
                // password: Password,
                // country: County,
                // age: Age,
                // alcohol: value
                // ,
                email: Dom,
                password: Dom1,
            }),
            headers: headers,
        })
            .then((Response) => Response.json())
            .then((Response) => {
                console.log('RESPONSE   LoginFunction <<<<<-------------->>>>', Response)
                if (Response.status_code == 200) {
                    console.log('RESPONSE Status-------------->>>>', Response)
                    alert("You are login successfully")
                    // navigation.navigate("Pushtime")                    // 
                    // ;
                }
                else if (Response.status_code == 404) {
                    alert("The email has already ");
                    console.log('RESPONSE Status-------------->>>>', Response)
                    // navigation.navigate('Home')
                    // Pushtime
                }
                // else {
                //     alert("Please Enter the value");
                //  }
            })
            .catch((error) => {
                console.error("ERROR FOUND" + error);
            })
    }
    return (
        <View>
            <View style={styles.contare1}>

                <View style={{ height: moderateScale(55), width: "100%", alignItems: "center", justifyContent: "center" }}>
                    <Image
                        source={image.shpping}
                        style={{ height: moderateScale(55), width: moderateScale(55), }}
                    />

                </View>
                <Text style={{ textAlign: "center", fontSize: scale(15), color: "white" }}>When would you like to quit Drinking?
                </Text>
                <View style={{ height: moderateScale(25), width: "100%", flexDirection: "row", justifyContent: "space-evenly", padding: scale(10) }}>
                    <View style={{ height: moderateScale(25), width: "40%", flexDirection: "row", justifyContent: "center", }}>

                        <Text style={{ textAlign: "center", fontSize: scale(15), color: "white" }}>Start date

                        </Text>
                    </View>

                    <View style={{ height: moderateScale(25), width: "40%", flexDirection: "row", justifyContent: "center", }}>
                        <Text style={{ textAlign: "center", fontSize: scale(15), color: "white" }}>End date
                        </Text>
                    </View>
                </View>
                <View style={{ height: moderateScale(80), width: "100%", flexDirection: "row", justifyContent: "space-evenly", padding: scale(8) }}>
                    <TouchableOpacity style={{ height: moderateScale(45), top: scale(5), width: "40%", alignItems: "center", backgroundColor: "#064F6A", justifyContent: "center", }}>
                        <TouchableOpacity
                            onPress={showDatePicker}
                            style={{ height: moderateScale(45), width: "10%", alignItems: "center", backgroundColor: "#064F6A", justifyContent: "center", }}>
                            <Image
                                source={image.calender}
                                style={{ height: moderateScale(35), width: moderateScale(35), }}
                            />
                        </TouchableOpacity>

                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={showDatePicker1}
                        style={{ height: moderateScale(45), top: scale(5), width: "40%", alignItems: "center", backgroundColor: "white", justifyContent: "center", }}>
                        <Image
                            source={image.calender}
                            style={{ height: moderateScale(35), width: moderateScale(35), }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ height: moderateScale(30), width: "100%", flexDirection: "row", justifyContent: "space-evenly", }}>
                    <View style={{ height: moderateScale(30), width: "40%", flexDirection: "row", justifyContent: "center", }}>
                        <Text style={{ textAlign: "center", fontSize: scale(15), color: "white" }}>{Dob}
                        </Text>
                    </View>
                    <View style={{ height: moderateScale(30), width: "40%", flexDirection: "row", justifyContent: "center", }}>
                        <Text style={{ textAlign: "center", fontSize: scale(15), color: "white" }}>{Dob1}
                        </Text>
                    </View>
                </View>
                <View>
                    <DateTimePickerModal
                        isVisible={pickerMode !== null}
                        mode={pickerMode}
                        onConfirm={handleConfirm}
                        onCancel={hidePicker}
                        display="default"
                    />
                </View>



            </View>
            <View style={{ height: moderateScale(100), padding: scale(8), width: "95%", flexDirection: "row", backgroundColor: "white", top: scale(15), marginLeft: scale(12), borderRadius: 10 }}>
                <View style={{ height: moderateScale(55), top: scale(2), borderRadius: scale(12), width: "20%", justifyContent: "center", alignItems: "center", backgroundColor: "#C7F0FF" }}>
                    <Image
                        source={image.Notif}
                        style={{ height: moderateScale(35), width: moderateScale(35), }}
                    />
                </View>
                <View style={{ height: moderateScale(55), width: "55%", justifyContent: "center" }}>
                    <Text style={{ textAlign: "center", fontSize: scale(14), color: "black" }}>notification Lorem Ipsum
                    </Text>
                    <Text style={{ textAlign: "center", fontSize: scale(15), color: "black" }}>simply
                    </Text>
                </View>
                <TouchableOpacity style={{ height: moderateScale(40), width: "22%", alignItems: "center", backgroundColor: "#F0F0F0", top: scale(10) }}
                // onPress={showDatePicker1}

                       >
                    <Image

                        source={{ uri: "https://www.transparentpng.com/thumb/time/bell-alarm-clock-time-blue-pictures-14.png" }}
                        style={{ height: moderateScale(40), width: moderateScale(40), }}
                    />
                    <Text style={{ textAlign: "center", fontSize: scale(15), color: "black" }}>
                        {Dob1}
                    </Text>
                </TouchableOpacity>
            </View>
            <View>

                <DateTimePickerModal
                    isVisible={pickerMode1 !== null}
                    mode={pickerMode1}
                    onConfirm={handleConfirm1}
                    onCancel={hidePicker1}
                    display="default"
                />
            </View>


        </View>

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
        contare1: {
            height: moderateScale(250),
            width: "90%",
            backgroundColor: "#0097CE",
            marginLeft: scale(15),
            borderRadius: scale(10),
            justifyContent: "flex-end", flexDirection: "column", top: scale(8)
        },
        textstyle: {
            fontSize: scale(15),
            textAlign: "center",
            color: "white",
            fontWeight: "500"

        },
});

export default Timecompoent;



