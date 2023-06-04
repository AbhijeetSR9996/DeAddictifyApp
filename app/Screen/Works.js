import * as React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import image from '../assets';
import { useNavigation } from '@react-navigation/native'
import Homecopment from '../Compoent/HomeCompoent';
const Works = ({ name, name1, back1, image3, imagee }) => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                <Homecopment back1={true} />
                <ImageBackground style={{ height: moderateScale(240), width: "100%", justifyContent: "center" }}
                    source={image.flowers} >
                    <View style={{ height: moderateScale(55), justifyContent: "center" }} >
                        <Text style={{ color: "#2DB3FF", fontSize: scale(20), textAlign: "center" }}>
                            How it works?
                        </Text>
                    </View>

                    <View style={{ height: moderateScale(60) }} >
                        <Image
                            source={image.layer}
                            style={{ height: moderateScale(60), width: "80%", justifyContent: "center", alignItems: "center", marginLeft: scale(30), flexDirection: "row" }}
                        />
                    </View>

                </ImageBackground>
                <View style={{ flex: 1, }} >
                    <View style={{
                        height: moderateScale(110), justifyContent: "center", alignItems: "center", backgroundColor: "#0097CE", flexDirection
                            : "row",
                        width: "90%", marginLeft: scale(18)
                    }} >
                        <View style={{
                            height: moderateScale(110), justifyContent: "center",
                            width: "20%",
                        }}
                        >
                            <View style={{
                                marginLeft: scale(20),
                                height: moderateScale(25), width: scale(25), backgroundColor: "#2DB3FF", alignItems: "center", justifyContent: "center"
                                , borderRadius: 20,
                            }}
                            >
                                <Text style={{ color: "white", fontSize: 16 }}>1</Text>
                            </View>


                        </View>
                        <View style={{
                            height: moderateScale(55),
                            width: "70%",
                            justifyContent: "center"
                        }}
                        >
                            <Text style={styles.textsyle}>
                                Sat a amount of money as your goal
                            </Text>
                        </View>
                    </View>
                    <View style={{
                        height: moderateScale(110), margin: 12, justifyContent: "center", alignItems: "center", backgroundColor: "#B1E372", flexDirection
                            : "row",
                        width: "90%", marginLeft: scale(18)
                    }} >
                        <View style={{
                            height: moderateScale(110), justifyContent: "center",
                            width: "20%",
                        }}
                        >
                            <View style={{
                                marginLeft: scale(20),
                                height: moderateScale(25), width: scale(25), backgroundColor: "#2DB3FF", alignItems: "center", justifyContent: "center"
                                , borderRadius: 20,
                            }}
                            >
                                <Text style={{ color: "white", fontSize: 16 }}>2</Text>
                            </View>


                        </View>
                        <View style={{
                            height: moderateScale(55),
                            width: "70%",
                            justifyContent: "center"
                        }}
                        >
                            <Text style={styles.textsyle}>
                                Thay to complite the curent strerk

                            </Text>
                        </View>
                    </View>
                    <View style={{
                        height: moderateScale(110), margin: 12, justifyContent: "center", alignItems: "center", backgroundColor: "#FFC0AC", flexDirection
                            : "row",
                        width: "90%", marginLeft: scale(18)
                    }} >
                        <View style={{
                            height: moderateScale(110),
                            width: "20%",
                            justifyContent: "center"
                        }}
                        >
                            <View style={{
                                marginLeft: scale(20),
                                height: moderateScale(25), width: scale(25), backgroundColor: "#2DB3FF", alignItems: "center", justifyContent: "center"
                                , borderRadius: 20,
                            }}
                            >
                                <Text style={{ color: "white", fontSize: 16 }}>3</Text>
                            </View>


                        </View>
                        <View style={{
                            height: moderateScale(55),
                            width: "70%",
                            justifyContent: "center"
                        }}
                        >
                            <Text style={styles.textsyle}>
                                Sat a amount of money as your goal
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{ height: moderateScale(100), width: "100%", flexDirection: "row", justifyContent: "space-evenly", backgroundColor: "#2DB3FF" }} >
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
                    <TouchableOpacity style={{
                        top: scale(18), height: moderateScale(55), width: "40%", borderRadius: 10, borderWidth: 1, borderColor: "#00598B",
                        justifyContent: "center", alignItems: "center"
                    }}>
                        <Text style={{ textAlign: "center", fontSize: scale(18) }}>
                            Let's go
                        </Text>
                    </TouchableOpacity>
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


export default Works;



















// import React, { useEffect, useState } from "react";
// const { width, height } = Dimensions.get('window');
// import { SafeAreaView, StyleSheet, TextInput, Dimensions, BackHandler, ScrollView, Button, TouchableOpacity, Text, View, Image, ActivityIndicator, KeyboardAvoidingView, Alert, } from "react-native";
// import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
// import DropDownPicker from "react-native-dropdown-picker";
// import Restisationcompoent from '../Compoent/Restisationcompoent';
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import Buttoncompoent from "../Compoent/Buttoncompoent";
// // import auth from '@react-native-firebase/auth';
// import { firebase } from "@react-native-firebase/database";
// import firestore from '@react-native-firebase/firestore';
// import { auth } from '../Compoent/firebaseConfig';
// import { useFocusEffect } from '@react-navigation/native';
// import ModalDropdown from 'react-native-modal-dropdown';
// import { Dropdown, } from 'react-native-element-dropdown';
// const Restistion = ({ navigation }) => {
//     const [Email, setEmail] = useState('');
//     const [Password, setpasswored] = useState("");
//     const [value, setValue] = React.useState('');
//     const [Age, setAge] = useState('');
//     const [Redemai, setRedemai] = useState(false);
//     const [Redpasswored, setRedpasswored] = useState(false);
//     const [Redcounty, setRedcounty] = useState(false);
//     const [openCountry, setopenCountry] = React.useState(false);
//     const [error, setError] = useState(null);
//     const [ErrAge, setErrAge] = useState(false);
//     const [Eroovalue, setEroovalue] = useState(false);
//     const [isFocus1, setIsFocus1] = useState(false);
//     const [isFocus2, setIsFocus2] = useState(false);
//     const [City, setCity] = useState(null);
//     const [CityList, setCityList] = useState([]);
//     const { width, height } = Dimensions.get('window');


//     const [isFocus3, setIsFocus3] = useState(false);
//     const [isFocus4, setIsFocus4] = useState(false);
//     const [City1, setCity2] = useState(null);
//     const [CityList1, setCityList1] = useState([]);
//     useEffect(() => {
//         setTimeout(() => {
//             fetch('http://demo4.progressiveaidata.in/api/get-country')
//                 .then((response) => response.json())
//                 .then((response) => {
//                     // console.log('response pin code api ----->>>>>', response)
//                     var states = (Object.keys(response).length);
//                     //   console.log('states  pin code api ----->>>>>', states)
//                     let CityArray = []
//                     for (var i = 0; i < 200; i++) {
//                         CityArray.push({
//                             value: response.user_day[i].country,
//                             label: response.user_day[i].country,
//                         })
//                     }
//                     console.log(' list----->>>>>', CityList)
//                     setCityList(CityArray);
//                 })
//                 .catch((error) => {
//                     console.error('catch api error', error);
//                 });
//         }, 1500);
//         // Allgetcounty()
//     }, [CityList]);



//     useEffect(() => {
//         setTimeout(() => {
//             fetch('http://demo4.progressiveaidata.in/api/get-addiction')
//                 .then((response) => response.json())
//                 .then((response) => {
//                     console.log('Get dreking ',response)
//                     let CityArray1 = [];
//                     for (var i = 0; i < 5; i++) {
//                         CityArray1.push({
//                             value1: response.category_data[i].category_name,
//                             labe2: response.category_data[i].category_name,
//                         })
//                     }
//                     setCityList1(response);
//                     console.log(' dreking ',CityList1)


//                 })
//                 .catch((error) => {
//                     console.error('catch api error', error);
//                 });
//         }, 1500);
//         // Allgetcounty()
//     }, [CityList1]);



//     useEffect(() => {
//         Allgetcounty();
//         Getemail5();
//         Getemail();
//         getItem();
//     }, [])
//     const Allgetcounty = () => {
//         fetch('http://demo4.progressiveaidata.in/api/get-country')
//             .then((response) => response.json())
//             .then((response) => {
//                 // console.log('response pin code api ----->>>>>', response);
//                 var states = Object.keys(response).length;
//                 // console.log('length pin code api ----->>>>>', states);

//                 let CityArray = [];
//                 for (var i = 0; i < states; i++) {
//                     CityArray.push({
//                         value: response.user_day[i].country,
//                         label: response.user_day[i].country,
//                     })
//                 }
//                 // console.log(' list----->>>>>', CityList);
//                 setCityList(CityArray);
//             })
//             .catch((error) => {
//                 console.error('catch api error', error);
//             });

//     }
//     useFocusEffect(
//         React.useCallback(() => {
//             Getemail5();
//             Getemail();
//             getItem()
//         }, [])
//     );

//     const Getemail5 = async (Idddd) => {
//         const All = JSON.stringify(Idddd)
//         try {
//             await AsyncStorage.setItem("IdA", All);
//             //    await AsyncStorage.setItem("vALUE", value)
//         } catch (e) {
//             // read error
//         }
//     }
//     const Getemail = async (Id1111) => {
//         const aaaa = JSON.stringify(Id1111)
//         await AsyncStorage.setItem("IKK", aaaa)
//     }
//     const getItem = async () => {
//         const jsonValue = await AsyncStorage.getItem("IdA",)
//         const Countyvaluw = await AsyncStorage.getItem("IKK",)
//         console.log("getvalue", getvalue)
//     }
//     const strongRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
//     const ALLLOGIN = () => {
//         if (!strongRegex.test(Email)) {
//             alert('Please fill this Email')
//             setRedemai(true)
//             return;
//         } else if (Password == "") {
//             setRedemai(false)
//             alert('Please fill Password')
//             setRedpasswored(true)
//             return;
//         }
//         else if (Age == "") {
//             setRedpasswored(false)
//             alert('Please fill this Age')
//             setErrAge(true)
//             return;
//         }
//         else if (City == null) {
//             setErrAge(false)
//             setRedpasswored(false)
//             setRedcounty(true)
//             alert('Please fill this County')
//             return;
//         }
//         else if (value == "") {
//             setRedcounty(false)
//             setEroovalue(true)
//             alert('Please fill this value')
//             return;
//         }
//         else {
//             setEroovalue(false)
//             RestionFunction()
//         }
//     }
//     const RestionFunction = () => {
//         let url = `http://demo4.progressiveaidata.in/api/user-register`
//         var headers = {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//         };
//         fetch(url, {
//             method: 'POST',
//             credentials: 'same-origin',
//             mode: 'same-origin',
//             body: JSON.stringify({
//                 email: Email,
//                 password: Password,
//                 country: City,
//                 age: Age,
//                 alcohol: value,
//             }),
//             headers: headers,
//         })
//             .then((Response) => Response.json())
//             .then((Response) => {
//                 console.log('RESPONSE <<<<<-------------->>>>', Response)
//                 console.log('RESPONS >>>id ', Response.id)
//                 var Id = (Response.id)
//                 var Id1111 = (Response.id)
//                 Getemail(Id1111);
//                 Getemail5(Id)
//                 if (Response.status_code == 200) {
//                     setRedemai(false)
//                     setErrAge(false)
//                     setRedpasswored(false)
//                     setRedcounty(false)
//                     console.log('RESPONSE Status-------------->>>>', Response)
//                     alert("You are Registered successfully")
//                     navigation.navigate("Pushtime")                    //
//                     // ;
//                 }
//                 else if (Response.status_code == 404) {
//                     alert("This Email Is Already Exist");
//                     console.log('RESPONSE Status-------------->>>>', Response)
//                 }
//                 // else {
//                 //     alert("Please Enter the value");
//                 //  }
//             })
//             .catch((error) => {
//                 console.error("ERROR FOUND" + error);
//             })
//     }
//     const [items, setItems] = React.useState([
//         { label: 'Alcoho', value: 'Alcoho' },
//         { label: 'Prnography', value: 'Prnography' },
//         { label: 'Shopping', value: 'Shopping' },
//     ]);
//     return (
//         <SafeAreaView style={{ flex: 1, backgroundColor: "#EFF0FF", }}>
//             <Restisationcompoent />
//             <ScrollView style={{ flex: 1, backgroundColor: "white", width: "90%", marginLeft: scale(17) }}>
//                 {/* <KeyboardAvoidingView> */}
//                 <View style={{ height: moderateScale(77), width: "98%", flexDirection: "row", alignItems: "center" }}>
//                     <View style={styles.rowinputtext}>
//                         <View style={{ height: moderateScale(50), borderWidth: 1, borderColor: Redemai ? "red" : "#EFF0FF", width: "85%", borderRadius: 10, justifyContent: "center", marginLeft: scale(25), }}>
//                             <TextInput
//                                 style={{ height: moderateScale(40), fontSize: scale(14), color: "black", top: scale(2), marginLeft: scale(5) }}
//                                 onChangeText={setEmail}
//                                 value={Email}
//                                 placeholder={"Email"}
//                                 placeholderTextColor={"black"}
//                             />
//                         </View>
//                     </View>
//                 </View>
//                 {/* </KeyboardAvoidingView> */}
//                 {/* <KeyboardAvoidingView> */}
//                 <View style={{ height: moderateScale(77), width: "98%", flexDirection: "row", alignItems: "center" }}>
//                     <View style={styles.rowinputtext}>
//                         <View style={{ height: moderateScale(50), borderWidth: 1, borderColor: Redpasswored ? "red" : "#EFF0FF", width: "85%", borderRadius: 10, justifyContent: "center", marginLeft: scale(25), }}>
//                             <TextInput
//                                 style={{ height: moderateScale(40), fontSize: scale(14), color: "black", top: scale(2), marginLeft: scale(5) }}
//                                 onChangeText={setpasswored}
//                                 value={Password}
//                                 placeholder={"Password"}
//                                 mode="outlined"
//                                 label="Password"
//                                 placeholderTextColor={"black"}
//                                 activeOutlineColor={"black"}
//                              />
//                         </View>
//                     </View>
//                 </View>
//                 {/* </KeyboardAvoidingView> */}
//                 <View style={{ borderColor: "#EFF0FF", borderRadius: 10, borderWidth: 1, height: moderateScale(50), marginLeft: scale(20), flexDirection: 'column', width: '85%', alignItems: 'center', justifyContent: 'center', }}>
//                     <Dropdown
//                         style={[styles.input, isFocus1 && { borderColor: 'red', color: "#EFF0FF" }]}
//                         placeholderStyle={styles.placeholderStyle}
//                         selectedTextStyle={styles.selectedTextStyle}
//                         inputSearchStyle={styles.inputSearchStyle}
//                         itemContainerStyle={{ borderColor: '#EFF0FF', color: "#EFF0FF" }}
//                         containerStyle={{ borderColor: 'black', color: "#EFF0FF" }}
//                         activeColor='#FDDDE0'
//                         dropdownPosition='bottom'
//                         selectedTextProps={{
//                             style: {
//                                 fontSize: scale(14),
//                                 color: 'black',
//                                 top: scale(8),
//                                 marginLeft: scale(5)
//                             },
//                         }}
//                         itemTextStyle={{
//                             color: "black"
//                         }}
//                         data={CityList}
//                         search
//                         maxHeight={250}
//                         labelField="label"
//                         valueField="value"
//                         placeholder={'Select Country'}
//                         searchPlaceholder="Search..."
//                         value={City}
//                         onFocus={() => setIsFocus1(true)}
//                         onBlur={() => setIsFocus1(false)}
//                         onChange={item => {
//                             setCity(item.value);
//                             console.log('map data on change City', item)
//                             setIsFocus2(false);
//                         }}
//                     />
//                 </View>
//                 {/* <KeyboardAvoidingView> */}
//                 <View style={{ height: moderateScale(77), width: "98%", flexDirection: "row", alignItems: "center" }}>
//                     <View style={styles.rowinputtext}>
//                         <View style={{ height: moderateScale(50), borderWidth: 1, borderColor: ErrAge ? "red" : "#EFF0FF", width: "85%", borderRadius: 10, justifyContent: "center", marginLeft: scale(25), }}>
//                             <TextInput
//                                 style={{ height: moderateScale(40), fontSize: scale(14), color: "black", top: scale(2), marginLeft: scale(5) }}
//                                 onChangeText={setAge}
//                                 value={Age}
//                                 placeholder={"Age"}
//                                 keyboardType="decimal-pad"
//                                 mode="outlined"
//                                 label="Age"
//                                 placeholderTextColor={"black"}
//                                 activeOutlineColor={"black"}
//                             // outlineColor={Ferr ? "red" : "black"}
//                             />
//                         </View>
//                     </View>
//                 </View>
//                 {/* </KeyboardAvoidingView> */}
//                 {/* <View style={{ marginTop: moderateScale(5), width: '100%', paddingHorizontal: scale(20) }}>
//                     <View style={{ zIndex: 1, }}>
//                         <DropDownPicker
//                             dropDownDirection="BOTTOM"
//                             open={openCountry}
//                             value={value}
//                             items={items}
//                             setOpen={setopenCountry}
//                             setValue={setValue}
//                             setItems={setItems}
//                             zIndex={1000}
//                             zIndexInverse={1000}
//                             itemTextStyle={{ backgroundColor: "red", zIndex: 3 }}
//                             containerStyle={{ position: 'relative', paddingTop: 10 }}
//                             labelStyle={{ color: "black", fontSize: scale(15) }}
//                             childrenContainerStyle={{
//                                 borderColor: "blue",
//                                 zIndex: 2,
//                                 height: 300,
//                             }}
//                             style={{
//                                 // backgroundColor: colors.white,
//                                 borderColor: Eroovalue ? "red" : "#EFF0FF",
//                                 zIndex: 2000,
//                                 borderWidth: 1,
//                                 position: 'relative',
//                                 height: moderateScale(50),
//                                 width: "95%",
//                                 marginLeft: scale(5),
//                             }}
//                             itemStyle={{ justifyContent: 'flex-start' }}
//                             dropDownStyle={{ zIndex: 1000, backgroundColor: '#fafafa', height: 100 }}
//                             dropDownContainerStyle={{
//                                 backgroundColor: 'white',
//                                 borderColor: "blue",
//                                 height: moderateScale(120),
//                                 width: "95%",
//                                 marginLeft: scale(5),
//                             }}
//                         />
//                     </View>
//                 </View> */}
//                 <View style={{ borderColor: "#EFF0FF", borderRadius: 10, borderWidth: 1, height: moderateScale(50), marginLeft: scale(20), flexDirection: 'column', width: '85%', alignItems: 'center', justifyContent: 'center', }}>
//                     <Dropdown
//                         style={[styles.input, isFocus3 && { borderColor: 'red', color: "#EFF0FF" }]}
//                         placeholderStyle={styles.placeholderStyle}
//                         selectedTextStyle={styles.selectedTextStyle}
//                         inputSearchStyle={styles.inputSearchStyle}
//                         itemContainerStyle={{ borderColor: '#EFF0FF', color: "#EFF0FF" }}
//                         containerStyle={{ borderColor: 'black', color: "#EFF0FF" }}
//                         activeColor='#FDDDE0'
//                         dropdownPosition='bottom'
//                         selectedTextProps={{
//                             style: {
//                                 fontSize: scale(14),
//                                 color: 'black',
//                                 top: scale(8),
//                                 marginLeft: scale(5)},
//                         }}
//                         itemTextStyle={{
//                             color: "black"
//                         }}
//                         data={CityList1}
//                         search
//                         maxHeight={250}
//                         labelField="label"
//                         valueField="value"
//                         placeholder={'type'}
//                         searchPlaceholder="Search..."
//                         value={City1}
//                         onFocus={() => setIsFocus3(true)}
//                         onBlur={() => setIsFocus3(false)}
//                         onChange={item => {
//                             setCity2(item.value1);
//                             console.log('category_name---> City', item)
//                             setIsFocus4(false)}}
//                     />
//                 </View>
//                 <Buttoncompoent title={"Register & Login"}
//                     // onPress={() => navigation.navigate("Restistom")}
//                     onPress={ALLLOGIN}
//                 />

//             </ScrollView>
//         </SafeAreaView >
//     );
// };

// const styles = StyleSheet.create({
//     inputview: {
//         height: moderateScale(600), padding: scale(8), width: "100%", flexDirection: "column",
//     },
//     Textinput: {
//         height: moderateScale(30), top: scale(17), width: "100%", justifyContent: "center",
//     },
//     textstyle: {
//         color: "grey", marginLeft: scale(8), fontSize: 18
//     },
//     rowinputtext: {
//         height: moderateScale(55), width: "100%", flexDirection: "row", alignItems: "center",
//     },

//     placeholderStyle: {
//         fontSize: 16,
//         color: "red"
//     },
//     selectedTextStyle: {
//         fontSize: 16,
//         color: "red"

//     },

//     inputSearchStyle: {
//         height: 45,
//         fontSize: 18,
//         width: '90%',
//         marginLeft: 16,
//         color: "green",
//         top: scale(8)

//     },
//     input: {
//         height: height * 0.06,
//         width: width * 0.8,
//         // borderWidth: scale(1.40),
//         padding: width * 0.03,
//         borderRadius: 5,
//         letterSpacing: 1,
//         fontSize: scale(16.5),
//         fontWeight: '400',
//         color: 'black',
//         marginBottom: scale(15)
//     },

// });

// export default Restistion;





// <KeyboardAvoidingView>
//                     <View style={{ height: moderateScale(77), width: "98%", flexDirection: "row", alignItems: "center" }}>
//                         <View style={{ height: 60, width: '90%', justifyContent: "center", marginLeft: scale(18) }}>
//                             <ModalDropdown
//                                 style={{ justifyContent: 'center', width: '100%', height: moderateScale(50), justifyContent: 'center', borderRadius: moderateScale(10), borderColor: '#EFF0FF', borderWidth: 1, justifyContent: 'center' }}
//                                 onSelect={(index, value) => setCounty(value)}
//                                 options={["INDIA", "02:30", "03:00", "03:30", "03:30",]}
//                                 defaultValue={'Select Country'}
//                                 dropdownTextStyle={{ fontSize: 16, color: 'black', width: scale(500), backgroundColor: "grey" }}/*Style here*/
//                                 textStyle={{ fontSize: 15, color: 'black', alignSelf: 'flex-start', marginLeft: 33, }}
//                                 dropdownStyle={{ width: scale(220), justifyContent: 'center', }}>
//                             </ModalDropdown>
//                         </View>
//                     </View>
//                 </KeyboardAvoidingView>

