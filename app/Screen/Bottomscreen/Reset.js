import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, ScrollView, Button, 
    TouchableOpacity, View, Image, Platform, BackHandler, ImageBackground } from "react-native";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import DateTimePickerModal from "react-native-modal-datetime-picker";
// import { shadow } from "react-native-paper";
import moment from "moment";
import Homecopment from "../../Compoent/HomeCompoent";
import Buttoncompoent from "../../Compoent/Buttoncompoent";
import AsyncStorage from "@react-native-async-storage/async-storage";
//import DropDownPicker from "react-native-dropdown-picker";
//import ModalDropdown from 'react-native-modal-dropdown';
import image from "../../assets";
const Reset = ({ navigation,route }) => {
    const [open, setOpen] = useState(false);
    const [value1, setValue1] = useState(null)
    const [date, setDate] = useState(new Date());
    const [date1, setDate1] = useState(new Date())
    const [date2, setDate2] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState();
    const [selectedDate1, setSelectedDate1] = useState();
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const [mode, setMode] = useState('date');
    const [Show, setShow] = useState(false);
    const [text, settext] = useState('Empty');
    const [pickerMode, setPickerMode] = useState(null);
    const [Dob, setDob] = useState();
    const [pickerMode1, setPickerMode1] = useState(null);
    const [pickerMode2, setPickerMode2] = useState(null);
    const [Dob1, setDob1] = useState(' ');
    const [Amount1, setAmount] = useState();
    const [Dob2, setDob2] = useState(' ');
    const [County, setCounty] = useState();
    const [countdolare, setcountdolare] = useState();


    const [value, setValue] = React.useState('');
    const [openCountry, setopenCountry] = React.useState(false);
    const [items, setItems] = React.useState([
        { label: '1 hour', value: '1 hour' },
        { label: '5 minute', value: '5 minute' },
        { label: 'Shopping', value: 'Shopping' },
    ]);
    const [Getime, setGetime] = useState("");
    const Getemail = async () => {
        await AsyncStorage.setItem("Am", Amount1)
    }

    // const {amount2} = route.params;
    // console.log("amount from home screen",amount2);
    // const { id } = route.params;
    // console.log("amount coming in reset screen", amount2);
    // console.log("id coming in reset screen", id.myid);

    useEffect(() => {
        indiacurency()
        setAmount(Amount1)
    }, [])
    const Timeset = () => {
        if (Amount1 == null || Amount1 == 0) {
            alert('Please fill Amount')
        }
        else {
            //Realtime();
            navigation.navigate('MyTabs')
        }
    }


    const hidePicker1 = () => {
        setPickerMode1(null);
    };
    const handleConfirm1 = (date1) => {
        hidePicker();
        setDob1(moment(date1).format('L'))
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        setSelectedDate(date);
        hideDatePicker();
    };

    const indiacurency = async () => {
        const jsonValue = await AsyncStorage.getItem("IdA",)
        console.log("GGGGG", jsonValue)
        let url = `https://demo4.progressiveaidata.in/api/currency-type/${jsonValue}`
        // let url = `https://demo4.progressiveaidata.in/api/currency-type/101`

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
                    console.log('RESPONSE Status-------------->>>>', Response)
                    alert("You reset successfully")
                    //navigation.navigate('MyTabs',{amount3:Amount1}))
                    navigation.navigate('MyTabs')
        }
                else if (Response.status_code == 404) {
                    alert("Please fill this Value");
                }
            })
            .catch((error) => {
                console.error("ERROR FOUND" + error);
            })
    }
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
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
                        <Text style={{ textAlign: "center", fontSize: scale(16), color: "white", fontWeight: '600' }}>When would you like to quit Drinking?</Text>
                    </View>
                    {/* <View style={{ height: moderateScale(80), width: "100%", flexDirection: "row", justifyContent: "space-evenly", padding: scale(8), alignItems: 'center' }}>
                        <View style={{ height: moderateScale(45), top: scale(5), width: "45%", alignItems: "center", backgroundColor: "white", justifyContent: "flex-start", flexDirection: "row", borderRadius: scale(10) }}>
                            <TouchableOpacity
                                style={{ height: moderateScale(45), width: "27%", alignItems: "center", justifyContent: "center", }}>
                                <Image
                                    source={image.calender}
                                    style={{ height: moderateScale(25), width: moderateScale(25), }}
                                />
                            </TouchableOpacity>
                            <View style={{ alignItems: 'center', justifyContent: 'center', width: '72%', height: moderateScale(45), }}>
                                <Text style={{ fontSize: scale(12), fontWeight: '300', color: 'black' }}>
                                    hello
                                </Text>
                            </View>
                        </View>
                    </View> */}


                </View>
                <View style={{ height: moderateScale(100), padding: scale(8), width: "95%", flexDirection: "row", backgroundColor: "white", top: scale(15), marginLeft: scale(8), borderRadius: 10 }}>
                    {/* <View style={{ height: moderateScale(45), top: scale(4), borderRadius: scale(32), width: "15%", justifyContent: "center", alignItems: "center", backgroundColor: "#C7F0FF", }}>
                        <Image
                            source={image.Notif}
                            style={{ height: moderateScale(25), width: moderateScale(25), }}
                        />
                    </View>
                    <View style={{ height: moderateScale(55), width: "55%", justifyContent: "center", alignItems: 'flex-start', flexDirection: 'column', paddingLeft: scale(5), marginRight: scale(6) }}>
                        <Text style={{ fontSize: scale(12), color: "black", fontWeight: '400' }}>notification Lorem Ipsum is simply</Text>
                    </View>
                    <TouchableOpacity style={{ height: moderateScale(50), borderWidth:1,borderRadius:8, borderColor:"grey", width: "30%", alignItems: "center", backgroundColor: "#F0F0F0", }}
                         onPress={showDatePicker}
                    >
                        <Text style={{ marginStart:scale(-12), textAlign: "right", fontSize: scale(13), bottom:1, fontWeight:"500",   color: "black"  , top: scale(14) }}>   {Getime}{`${selectedDate ? moment(selectedDate).format("LT") : "Select Time"}`}</Text>
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
                                        style={{ fontSize: 25, color:"white" }}
                                        placeholder={"0"}
                                        //placeholder={Amount1}
                                        maxLength={5}
                                        onChangeText={setAmount}
                                        placeholderTextColor={"white"}
                                        value={Amount1}
                                        keyboardType="decimal-pad"
                                    />
                                </View>
                            </View>
                            <TouchableOpacity style={{ height: moderateScale(70), top: scale(5), width: "35%", alignItems: "center", backgroundColor: "#0081B0", justifyContent: "flex-start", borderRadius: scale(10), }} disabled>
                                <View style={{ height: moderateScale(70), width: '100%', alignItems: "center", justifyContent: "flex-start", borderRadius: scale(10), top: 12, right: 12, borderWidth: 1, borderColor: '#0081B0' }}>
                                    <Text style={{ fontSize: 25, color: "white", fontWeight: '500', top: 8 }}> USD </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <Buttoncompoent title={'Let’s go'}
                            onPress={Timeset}
                        />
                    </ImageBackground>
                </View>
                <View>
                    {/* <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="time"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    /> */}
                </View>
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

export default Reset;



