import React, {useEffect, useState} from 'react';
const {width, height} = Dimensions.get('window');
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Dimensions,
  BackHandler,
  ScrollView,
  TouchableOpacity,
  Text,
  View,
  Image,
  ActivityIndicator,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
//import DropDownPicker from "react-native-dropdown-picker";
import Restisationcompoent from '../Compoent/Restisationcompoent';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import Buttoncompoent from "../Compoent/Buttoncompoent";
import {useFocusEffect} from '@react-navigation/native';
//import ModalDropdown from 'react-native-modal-dropdown';
import {Dropdown} from 'react-native-element-dropdown';
//import { List } from "react-native-paper";
import CheckBox from '@react-native-community/checkbox';

const Restistion = ({navigation}) => {
  const [Email, setEmail] = useState('');
  const [Password, setpasswored] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [checked, setChecked] = useState(false);

  const [value, setValue] = useState('');
  const [Age, setAge] = useState('');
  const [Redemai, setRedemai] = useState(false);
  const [Redpasswored, setRedpasswored] = useState(false);
  const [Redcounty, setRedcounty] = useState(false);
  const [openCountry, setopenCountry] = useState(false);
  const [ErrAge, setErrAge] = useState(false);
  const [Eroovalue, setEroovalue] = useState(false);
  const [isFocus1, setIsFocus1] = useState(false);
  const [isFocus2, setIsFocus2] = useState(false);
  const [City, setCity] = useState(null);
  const [CityList, setCityList] = useState([]);
  const [Loder11, setLoder11] = useState(true);
  const [CityList111, setCityList111] = useState([]);
  const [liset, setliset] = useState(null);
  const [isFocus1111, setIsFocus1111] = useState(false);
  const [isFocus2222, setIsFocus222] = useState(false);
  const [Loder1, setLoder1] = useState(true);
  const [Achievement, setAchievement] = useState([]);

  const [selVal, setSelVal] = useState('');
  const [selVals, setSelVals] = useState('');

  const addictionData = [
    {label: 'smoking', value: 'smoking'},
    {label: 'drinking', value: 'drinking'},
    {label: 'social media', value: 'social media'},
    {label: 'pornography', value: 'pornography'},
  ];

  const countryData = [
    {label: 'Australia', value: 'Australia'},
    {label: 'Bangladesh', value: 'Bangladesh'},
    {label: 'China', value: 'China'},
    {label: 'Denmark', value: 'Denmark'},
    {label: 'Equador', value: 'Equador'},
    {label: 'Finland', value: 'Finland'},
    {label: 'India', value: 'India'},
    {label: 'Oman', value: 'Oman'},
    {label: 'United Kingdom', value: 'United Kingdom'},
  ];

  //   useEffect(() => {
  //     setTimeout(() => {
  //       fetch('http://demo4.progressiveaidata.in/api/get-country')
  //         .then(response => response.json())
  //         .then(response => {
  //           //var states = (Object.keys(response).length);
  //           let CityArray = [];
  //           for (var i = 0; i < 200; i++) {
  //             CityArray.push({
  //               value: response.user_day[i].country,
  //               label: response.user_day[i].country,
  //             });
  //           }
  //           console.log('list----->>>>>', CityList);
  //           setCityList(CityArray);
  //         })
  //         .catch(error => {
  //           console.error('catch api error', error);
  //         });
  //     }, 1000);
  //   }, [CityList]);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       fetch('http://demo4.progressiveaidata.in/api/get-country')
  //         .then(response => response.json())
  //         .then(response => {
  //           let CityArray = [];
  //           for (var i = 0; i < 252; i++) {
  //             CityArray.push({
  //               value: response.user_day[i].country,
  //               label: response.user_day[i].country,
  //             });
  //           }
  //           console.log('list----->>>>>', CityList);
  //           setCityList(CityArray);
  //         })
  //         .catch(error => {
  //           console.error('catch api error', error);
  //         });
  //     }, 1500);
  //   }, [CityList]);
  //   useEffect(() => {
  //     Getemail5();
  //     Getemail();
  //   }, []);
  //   useFocusEffect(
  //     React.useCallback(() => {
  //       Getemail5();
  //       Getemail();
  //     }, []),
  //   );
  //   const Getemail5 = async Idddd => {
  //     const All = JSON.stringify(Idddd);
  //     try {
  //       await AsyncStorage.setItem('IdA', All);
  //       //    await AsyncStorage.setItem("vALUE", value)
  //     } catch (e) {
  //       // read error
  //     }
  //   };
  //   const Getemail = async Id1111 => {
  //     const aaaa = JSON.stringify(Id1111);
  //     await AsyncStorage.setItem('IKK', aaaa);
  //   };
  //   const strongRegex = new RegExp(
  //     '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
  //   );
  //   const ALLLOGIN = () => {
  //     if (Email == '') {
  //       alert('Please fill Email');
  //       setRedemai(true);
  //       return;
  //     } else if (!strongRegex.test(Email)) {
  //       alert('Please fill valid Email');
  //       setRedemai(true);
  //       return;
  //     } else if (Password == '') {
  //       alert('Please fill password');
  //       setRedemai(true);
  //       return;
  //     } else if (Password.length < 6) {
  //       setRedemai(false);
  //       alert('Minimum 6 character is allowed try with different password');
  //       setRedpasswored(true);
  //       return;
  //     } else if (Age == '') {
  //       setRedpasswored(false);
  //       alert('Please fill Age');
  //       setErrAge(true);
  //       return;
  //     } else if (liset == null) {
  //       setErrAge(false);
  //       setRedpasswored(false);
  //       setRedcounty(true);
  //       alert('Please select Addiction type');
  //       return;
  //     } else if (City == null) {
  //       setErrAge(false);
  //       setRedpasswored(false);
  //       setRedcounty(true);
  //       alert('Please select Country');
  //       return;
  //     }
  //     // else if (value == null) {
  //     //     setRedcounty(false)
  //     //     setEroovalue(true)
  //     //     alert('Please fill value')
  //     //     return;
  //     // }
  //     else if (toggleCheckBox == '') {
  //       alert('Please agree');
  //       setChecked(false);
  //       return;
  //     } else {
  //       setEroovalue(false);
  //       RestionFunction();
  
  //     }
  //   };
  //   const RestionFunction = () => {
  //     let url = `http://demo4.progressiveaidata.in/api/user-register`;
  //     var headers = {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     };
  //     fetch(url, {
  //       method: 'POST',
  //       credentials: 'same-origin',
  //       mode: 'same-origin',
  //       body: JSON.stringify({
  //         email: Email,
  //         password: Password,
  //         country: City,
  //         age: Age,
  //         alcohol: liset,
  //       }),
  //       headers: headers,
  //     })
  //       .then(Response => Response.json())
  //       .then(Response => {
  //         setLoder11(false);
  //         console.log('RESPONSE <<<<<-------------->>>>', Response);
  //         console.log('RESPONS >>>id ', Response.id);
  //         var Id = Response.id;
  //         var Id1111 = Response.id;
  //         Getemail(Id1111);
  //         Getemail5(Id);
  //         setChecked(false);
  //         if (Response.status_code == 200) {
  //           alert('You are Registered successfully');
  //           // navigation.navigate("Pushtime",{idofuser:Id})
  //           navigation.navigate('Pushtime', {Response});
  //         } else if (Response.status_code == 404) {
  //           alert('This Email Is Already Exist');
  //           console.log('RESPONSE Status-------------->>>>', Response);
  //         }
  //         // else {
  //         //     alert("Please Enter the value");
  //         //  }
  //       })
  //       .catch(error => {
  //         console.error('ERROR FOUND' + error);
  //       });
  //   };

  //   useEffect(() => {
  //     fetch('http://demo4.progressiveaidata.in/api/get-link')
  //       .then(response => response.json())
  //       .then(response => {
  //         // let states = Object.keys(response).length;
  //         let CityArray11 = [];
  //         var Getvalue = 0;
  //         for (let i = Getvalue; i < 5; i++) {
  //           CityArray11.push({
  //             value: response.link[i].category_name,
  //             label: response.link[i].category_name,
  //           });
  //         }
  //         console.log('Get show', CityArray11);
  //         setCityList111(CityArray11);
  //       })
  //       .catch(error => {
  //         console.error('catch api error', error);
  //       });
  //   }, [CityList111]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#EFF0FF'}}>
      <Restisationcompoent />
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: 'white',
          width: '90%',
          marginLeft: scale(17),
        }}
        showsVerticalScrollIndicator={false}>
        <KeyboardAvoidingView>
          <View
            style={{
              height: moderateScale(77),
              width: '98%',
              flexDirection: 'row',
              alignItems: 'center',
              top: scale(15),
            }}>
            <View style={styles.rowinputtext}>
              <View
                style={{
                  height: moderateScale(50),
                  borderWidth: 1,
                  borderColor: '#EFF0FF',
                  width: '85%',
                  borderRadius: 10,
                  justifyContent: 'center',
                  marginLeft: scale(25),
                }}>
                <TextInput
                  style={{
                    height: moderateScale(40),
                    fontSize: scale(14),
                    color: 'black',
                    top: scale(2),
                    marginLeft: scale(5),
                  }}
                  onChangeText={setEmail}
                  value={Email}
                  placeholder={'  Email'}
                  placeholderTextColor={'black'}
                />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
        <KeyboardAvoidingView>
          <View
            style={{
              height: moderateScale(77),
              width: '98%',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={styles.rowinputtext}>
              <View
                style={{
                  height: moderateScale(50),
                  borderWidth: 1,
                  borderColor: '#EFF0FF',
                  width: '85%',
                  borderRadius: 10,
                  justifyContent: 'center',
                  marginLeft: scale(25),
                }}>
                <TextInput
                  style={{
                    height: moderateScale(40),
                    fontSize: scale(14),
                    color: 'black',
                    top: scale(2),
                    marginLeft: scale(5),
                  }}
                  onChangeText={setpasswored}
                  value={Password}
                  placeholder={'  Password'}
                  mode="outlined"
                  label="Password"
                  placeholderTextColor={'black'}
                  activeOutlineColor={'black'}
                />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
        <KeyboardAvoidingView>
          <View
            style={{
              height: moderateScale(77),
              width: '98%',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: scale(-15),
            }}>
            <View style={styles.rowinputtext}>
              <View
                style={{
                  height: moderateScale(50),
                  borderWidth: 1,
                  borderColor: '#EFF0FF',
                  width: '85%',
                  borderRadius: 10,
                  justifyContent: 'center',
                  marginLeft: scale(25),
                }}>
                <TextInput
                  style={{
                    height: moderateScale(40),
                    fontSize: scale(14),
                    color: 'black',
                    top: scale(2),
                    marginLeft: scale(5),
                  }}
                  onChangeText={setAge}
                  value={Age}
                  placeholder={'  Age'}
                  keyboardType="decimal-pad"
                  mode="outlined"
                  label="Age"
                  placeholderTextColor={'black'}
                  activeOutlineColor={'black'}
                  maxLength={3}
                />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>

         
        <View
          style={{
            borderColor: '#EFF0FF',
            borderRadius: 10,
            borderWidth: 1,
            height: moderateScale(50),
            marginLeft: scale(25),
            flexDirection: 'column',
            width: '83.5%',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: scale(-2),
          }}>
          {/* <Dropdown
                        style={[styles.input, isFocus1111 && { borderColor: '#EFF0FF', color: "#EFF0FF" }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        itemContainerStyle={{ borderColor: '#EFF0FF', color: "#EFF0FF" }}
                        containerStyle={{ borderColor: 'transparent', color: "#EFF0FF", marginHorizontal: scale(9), borderRadius: 10}}
                        dropdownPosition='bottom'
                        selectedTextProps={{
                            style: {
                                fontSize: scale(14),
                                color: 'black',
                                top: scale(8),
                                marginLeft: scale(5)
                            },
                        }}
                        itemTextStyle={{
                            color: "black"
                        }}
                        data={CityList111}
                        search
                        maxHeight={250}
                        labelField="label"
                        valueField="value"
                        iconStyle={{marginTop:'6%', marginRight:'8%'}}
                        placeholder={'  Addiction type'}
                        searchPlaceholder="Search..."
                        value={liset}
                        onFocus={() => setIsFocus1111(true)}
                        onBlur={() => setIsFocus1111(false)}
                        onChange={item => {
                            setliset(item.value);
                            console.log('map data on change City', item);
                            setIsFocus2(false);
                        }}
                    /> */}

          <Dropdown
            style={[styles.input, {borderColor: '#EFF0FF', color: '#EFF0FF'}]}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            itemContainerStyle={{borderColor: '#EFF0FF', color: '#EFF0FF'}}
            itemTextStyle={{
              color: 'black',
              marginLeft: scale(8),
            }}
            data={addictionData}
            dropdownPosition="bottom"
            labelField="label"
            valueField="value"
            value={selVal}
            maxHeight={190}
            search
            searchPlaceholder="Search..."
            selectedTextProps={{
              style: {
                fontSize: scale(14),
                color: 'black',
                top: scale(8),
                marginLeft: scale(15),
              },
            }}
            placeholder={'  Addiction type'}
            iconStyle={{marginTop: '6%', marginRight: '8%'}}
            containerStyle={{
              borderColor: 'transparent',
              color: '#EFF0FF',
              marginHorizontal: scale(9),
              borderRadius: 10,
              marginTop: scale(0)
            }}
            onChange={item => {
              setSelVal(item.value);
            }}
          />
        </View>

        <View
          style={{
            borderColor: '#EFF0FF',
            borderRadius: 10,
            borderWidth: 1,
            height: moderateScale(50),
            marginLeft: scale(25),
            flexDirection: 'column',
            width: '83.5%',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: scale(12),
          }}>
          {/* <Dropdown
            style={[
              styles.input,
              isFocus1 && {borderColor: '#EFF0FF', color: '#EFF0FF'},
            ]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            itemContainerStyle={{borderColor: '#EFF0FF', color: '#EFF0FF'}}
            containerStyle={{
              borderColor: 'transparent',
              color: '#EFF0FF',
              marginHorizontal: scale(9),
              borderRadius: 10,
            }}
            dropdownPosition="bottom"
            selectedTextProps={{
              style: {
                fontSize: scale(14),
                color: 'black',
                top: scale(8),
                marginLeft: scale(5),
              },
            }}
            itemTextStyle={{
              color: 'black',
            }}
            data={CityList}
            search
            iconStyle={{marginTop: '6%', marginRight: '8%'}}
            maxHeight={200}
            labelField="label"
            valueField="value"
            placeholder={'  Select Country'}
            searchPlaceholder="Search..."
            value={City}
            onFocus={() => setIsFocus1(true)}
            onBlur={() => setIsFocus1(false)}
            onChange={item => {
              setCity(item.value);
              console.log('map data on change City', item);
              setIsFocus2(false);
            }}
          /> */}

<Dropdown
            style={[styles.input, {borderColor: '#EFF0FF', color: '#EFF0FF'}]}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            itemContainerStyle={{borderColor: '#EFF0FF', color: '#EFF0FF'}}
            itemTextStyle={{
              color: 'black',
              marginLeft: scale(8),
            }}
            data={countryData}
            dropdownPosition="bottom"
            labelField="label"
            valueField="value"
            value={selVals}
            maxHeight={120}
            search
            searchPlaceholder="Search..."
            selectedTextProps={{
              style: {
                fontSize: scale(14),
                color: 'black',
                top: scale(8),
                marginLeft: scale(15),
              },
            }}
            placeholder={'  Select Country'}
            iconStyle={{marginTop: '6%', marginRight: '8%'}}
            containerStyle={{
              borderColor: 'transparent',
              color: '#EFF0FF',
              marginHorizontal: scale(9),
              borderRadius: 10,
              marginTop: scale(0)
            }}
            onChange={item => {
              setSelVals(item.value);
            }}
          />

        </View>

        <View
          style={{
            height: moderateScale(55),
            width: '80%',
            flexDirection: 'row',
            top: scale(0),
            marginLeft: scale(-10),
          }}>
          <View
            style={{
              height: moderateScale(40),
              width: '20%',
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: scale(30),
            }}>
            <CheckBox
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
              tintColors={{true: '#2DB3FF', false: '#2DB3FF'}}
            />
          </View>
          <View
            style={{
              height: moderateScale(38),
              width: '60%',
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: scale(-17),
            }}>
            <Text style={{fontSize: scale(14), color: 'black'}}>
              Agree to by using app
            </Text>
          </View>
        </View>
        <View style={styles.contare1}>
          <TouchableOpacity
            style={[styles.TouchableOpacitystyle]}
            //onPress={ALLLOGIN}
            onPress={() => navigation.navigate('Pushtime')}>
            {Loder11 ? (
              <Text style={styles.textstyle}>{'Register & Login'}</Text>
            ) : (
              <ActivityIndicator size={30} color={'black'} />
            )}
            {/* <Text>Register & Login</Text> */}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputview: {
    height: moderateScale(600),
    padding: scale(8),
    width: '100%',
    flexDirection: 'column',
  },
  Textinput: {
    height: moderateScale(30),
    top: scale(17),
    width: '100%',
    justifyContent: 'center',
  },
  textstyle: {
    color: 'grey',
    marginLeft: scale(8),
    fontSize: 18,
  },
  rowinputtext: {
    height: moderateScale(55),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },

  placeholderStyle: {
    fontSize: 16,
    color: 'red',
    bottom: 2,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'red',
  },
  TouchableOpacitystyle: {
    height: moderateScale(46),
    top: scale(18),
    borderRadius: scale(8),
    width: '90%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2DB3FF',
    // borderBottomEndRadius: scale(70),
    // borderTopStartRadius: scale(55),
    borderBottomEndRadius: scale(70),
    //borderTopStartRadius: scale(55),
    borderTopStartRadius: scale(25),
    elevation: 5,
    // buttonStyle, backgroundColor: [csCode]
  },
  contare1: {
    height: moderateScale(120),
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textstyle: {
    fontSize: scale(15),
    textAlign: 'center',
    color: 'white',
    fontWeight: '500',
  },

  inputSearchStyle: {
    height: 45,
    fontSize: 18,
    width: '90%',
    //marginLeft: 16,
    marginLeft: 14,
    color: 'black',
    top: scale(8),
  },
  input: {
    height: height * 0.06,
    width: width * 0.8,
    // borderWidth: scale(1.40),
    padding: width * 0.03,
    borderRadius: 5,
    // letterSpacing: 1,
    fontSize: scale(16.5),
    fontWeight: '400',
    color: 'black',
    marginBottom: scale(15),
  },
});

export default Restistion;

// const Allgetcounty = () => {
//     fetch('http://demo4.progressiveaidata.in/api/get-link')
//         .then((response) => response.json())
//         .then((response) => {
//             console.log('response pin code api ----->>>>>', response);
//             var states = Object.keys(response).length;
//             console.log('length pin code api ----->>>>>', states);

//             let CityArray = [];
//             for (var i = 0; i < states; i++) {
//                 CityArray.push({
//                     value: response.user_day[i].country,
//                     label: response.user_day[i].country,
//                 })
//             }
//             console.log(' list----->>>>>', CityList);
//             setCityList(CityArray);
//         })
//         .catch((error) => {
//             console.error('catch api error', error);
//         });

// }
