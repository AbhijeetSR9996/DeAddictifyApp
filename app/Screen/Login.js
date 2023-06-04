import React, {useContext, useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  BackHandler,
  Text,
  ScrollView,
  Button,
  Alert,
  TouchableOpacity,
  View,
  Image,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import image from '../assets';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
//import Restisationcompoent from '../Compoent/Restisationcompoent';
//import AsyncStorage from "@react-native-async-storage/async-storage";
import Buttoncompoent from '../Compoent/Buttoncompoent';
import {
  requestUserPermission,
  NotifictionLiestner,
  GetFCtOKEAN,
} from '../Compoent/push';
import {useDispatch, useSelector} from 'react-redux';
import CheckBox from '@react-native-community/checkbox';

const Login = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [checked, setChecked] = React.useState(false);

  const [email1, setEmail1] = useState('');
  const [password1, setpasswored1] = useState('');
  const [error, setError] = useState(null);
  const [Redemai, setRedemai] = useState(false);
  const [Redpasswored, setRedpasswored] = useState(false);
  const [loding, setlodeing] = useState(true);
  const [loginData, setLoginData] = useState();


  const dispatch = useDispatch();
  const strongRegex = new RegExp(
    '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
  );


  useEffect(
    React.useCallback(() => {
      setTimeout(() => {
        requestUserPermission();
        // alert("mnkljnjnuj")
      }, 1400);
    }, []),
  );
  const ALLLOGIN = async () => {
    if (email1 == '') {
      alert('Please fill Email');
      setRedemai(true);
      return;
    } else if (!strongRegex.test(email1)) {
      alert('Please fill valid Email');
      setRedemai(true);
      return;
    } else if (password1 == '') {
      alert('Please fill password');
      setRedemai(true);
      return;
    } else if (password1.length < 6) {
      setRedemai(false);
      setRedpasswored(true);
      alert('Minimum 6 character is allowed try with different password');
      return;
    } else if (toggleCheckBox == '') {
      alert('Please agree');
      setChecked(false);
      return;
    } else {
      //LoginFunction();
      navigation.navigate('MyTabs');
      // let data = {
      //   email: email1,
      //   password: password1,
      // }
      // dispatch(() => RestistonActtion(data, Sp, dispatch))
    }
  };
  // const Sp = () => {
  //   alert('You are login successfully');
  //   navigation.navigate('MyTabs');
  // };
  const LoginFunction = () => {
    let url = `http://demo4.progressiveaidata.in/api/login-user`;
    var headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      mode: 'same-origin',
      body: JSON.stringify({
        email: email1,
        password: password1,
      }),
      headers: headers,
    })
      .then(Response => Response.json())
      .then(Response => {
        //setLoginData(Response);
        //console.log( 'tarunRESPONSE', Response.user_data);
        if (Response.status_code == 200) {
          // console.log('RESPONSE Status-------------->>>>', Response);
           console.log('RESPONSE ID-------------->>>>', Response.user_data.id);
          //setsettingId(Response)
          setlodeing(false);
          setRedemai(false);
          setRedpasswored(false);
          setChecked(false);
          alert('You are login successfully');
          //navigation.navigate("MyTabs")
          // {
          //   navigation.navigate('MyTabs', {
          //     screen: 'Achievement',
          //     params: {Response:Response.user_data.id},
          //   }),
          //     navigation.navigate('MyTabs', {
          //       screen: 'Home',
          //       params: {Response:Response.user_data.id},
          //     });
          // }
          //navigation.navigate("MyTabs",{responseid:Response.user_data.id})
          //navigation.navigate("MyTabs",{logindata:Response})
        } else if (Response.status_code == 404) {
          alert('Invalid email and password');
         
          // Pushtime
        }
        // else {
        //     alert("Please Enter the value");
        //  }
      })
      .catch(error => {
        //console.error('ERROR FOUND' + error);
      });
  };
  const Header = () => {
    return (
      <View style={{height: moderateScale(220)}}>
        <ImageBackground
          style={{
            height: moderateScale(200),
            width: '100%',
            justifyContent: 'center',
          }}
          source={image.login}>
          <View
            style={{
              height: moderateScale(120),
              width: '66%',
              alignItems: 'flex-end',
            }}>
            <ImageBackground
              style={{
                height: moderateScale(130),
                width: scale(120),
                alignItems: 'center',
              }}
              source={image.login2}></ImageBackground>
          </View>
        </ImageBackground>
      </View>
    );
  };
  return (
    <ScrollView
      style={{flex: 1, backgroundColor: '#EFF0FF'}}
      showsVerticalScrollIndicator={false}>
      <Header />
      <SafeAreaView
        style={{
          backgroundColor: 'white',
          width: '90%',
          marginLeft: scale(17),
          alignItems: 'center',
        }}>
        <View style={{backgroundColor: 'white', width: '90%'}}>
          <Text
            style={{
              fontSize: scale(16),
              color: 'black',
              fontWeight: '700',
              padding: scale(5),
            }}>
            Login
          </Text>
          <View
            style={{
              height: moderateScale(77),
              width: '113%',
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <View
              style={{
                height: moderateScale(55),
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
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
                  onChangeText={setEmail1}
                  value={email1}
                  placeholder={'  Email/User name'}
                  placeholderTextColor={'grey'}
                  //outlineColor={Ferr ? "red" : "black"}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              height: moderateScale(77),
              width: '113%',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: scale(-15),
              alignSelf: 'center',
            }}>
            <View
              style={{
                height: moderateScale(55),
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
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
                  onChangeText={setpasswored1}
                  value={password1}
                  placeholder={'  Password'}
                  placeholderTextColor={'grey'}
                  activeOutlineColor={'black'}
                />
              </View>
            </View>
          </View>

          <View
            style={{
              height: moderateScale(40),
              width: '100%',
              flexDirection: 'row',
              marginTop: scale(-15),
            }}>
            <View
              style={{
                height: moderateScale(40),
                width: '20%',
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: scale(0),
              }}>
              <CheckBox
                //disabled={false}
                value={toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
                tintColors={{true: '#2DB3FF', false: '#2DB3FF'}}
                // onCheckColor={"green"}
                // onFillColor={"red"}
                // onTintColor={ "green" }
              />
            </View>
            <View
              style={{
                height: moderateScale(38),
                width: '60%',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: scale(14),
                  color: 'black',
                  marginLeft: scale(-25),
                }}>
                Agree to by using app
              </Text>
            </View>
          </View>
          {/* {loding ? (<Buttoncompoent
            title={"Login "}
            onPress={ALLLOGIN}
          />) : (<ActivityIndicator size={30} color={"red"} />) } */}
          {/* <View style={{ marginTop: scale(5), marginBottom: scale(-60), backgroundColor:'lime'}}/> */}
          <Buttoncompoent
            title={'Login '}
            onPress={ALLLOGIN}
            //onPress={()=>navigation.navigate("MyTabs")}
          />
        </View>
        <View style={styles.contare1}>
          <TouchableOpacity style={styles.TouchableOpacitystyle1}>
            <Text
              style={[
                styles.textstyle,
                {color: 'black', top: scale(-10), fontSize: scale(13)},
              ]}>
              {'New to DeAddictify'}{' '}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacitystyle}
            onPress={() => navigation.navigate('Restistom')}>
            <Text style={[styles.textstyle, {color: 'white'}]}>
              {'Register'}{' '}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
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
    color: 'black',
    marginLeft: scale(8),
    fontSize: scale(15),
  },
  TouchableOpacitystyle: {
    height: moderateScale(46),
    top: scale(18),
    borderRadius: scale(8),
    width: '47%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2DB3FF',
    //borderBottomEndRadius: scale(70),
    //borderTopStartRadius: scale(55),
    borderBottomEndRadius: scale(70),
    borderTopStartRadius: scale(25),
    elevation: 5,
    // buttonStyle, backgroundColor: [csCode]
  },
  TouchableOpacitystyle1: {
    height: moderateScale(60),
    borderRadius: scale(8),
    width: '50%',
    borderBottomEndRadius: scale(45),
    justifyContent: 'flex-end',
    borderBottomLeftRadius: scale(45),
  },
  contare1: {
    height: moderateScale(120),
    width: '90%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginRight: scale(10),
    backgroundColor: 'transparent',
  },
  textstyle: {
    fontSize: scale(15),
    textAlign: 'center',
    fontWeight: '500',
  },
});

export default Login;

// <View style={{ height: moderateScale(40), width: "100%", flexDirection: "row", }}>
// <View style={{ height: moderateScale(40), width: "20%", flexDirection: "row", alignItems: "center", marginLeft: scale(30) }}>
//   <CheckBox
//     // disabled={false}
//     value={toggleCheckBox}
//     onValueChange={(newValue) => setToggleCheckBox(newValue)}
//     tintColors={{ true: '#2DB3FF' }}
//   // onCheckColor={"green"}
//   // onFillColor={"red"}
//   // onTintColor={ "green" }

//   />
// </View>
// <View style={{ height: moderateScale(38), width: "60%", flexDirection: "row", alignItems: "center" }}>
//   <Text style={{ fontSize: scale(14), color: "black", }}>
//     Agree to by using app
//   </Text>
// </View>
// </View>

// import React, { useState } from 'react';
// import { View, Text, Button, TouchableOpacity, TextInput } from 'react-native';
// import { onAuthStateChanged, signOut } from 'firebase/auth';
// import { auth } from '../Compoent/firebaseConfig';
// const LoggedIn = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const logout = async () => {
//     try {
//       await signOut(auth);
//     } catch (e) {
//       console.error(e);
//     }
//   };
//   const loginUser = async () => {
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//     } catch (error) {
//       if (error.code === 'auth/invalid-email' || error.code === 'auth/wrong-password') {
//         setError('Your email or password was incorrect');
//       } else if (error.code === 'auth/email-already-in-use') {
//         setError('An account with this email already exists');
//       } else {
//         setError('There was a problem with your request');
//       }
//     }
//   };
//   return (
//     <View style={{ flex: 1 }}>
//       <Text style={{ fontSize: 12, color: "red" }}>Login</Text>
//       {error && <Text style={{ fontSize: 12, color: "red" }}>{error}</Text>}
//       <TouchableOpacity onPress={() => setScreen('signup')}>
//         <Text style={{ fontSize: 12, color: "red" }}>Login</Text>
//       </TouchableOpacity>
//       <TextInput
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//         placeholder="Enter email address"
//         autoCapitalize="none"
//         placeholderTextColor="#aaa"
//        />
//       <TextInput
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//         placeholder="Enter password"
//         autoCapitalize="none"
//         placeholderTextColor="#aaa"
//        />
//       <TouchableOpacity onPress={() => setScreen('reset-password')}>
//         <Text style={{ fontSize: 12, color: "black" }}>Login</Text>
//       </TouchableOpacity>
//       <Button title="Login" onPress={loginUser} disabled={!email || !password} />
//     </View>

//   );
// }

// export default LoggedIn
//   //
