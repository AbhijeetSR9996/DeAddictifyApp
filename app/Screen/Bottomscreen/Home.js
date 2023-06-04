import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  SafeAreaView,
  BackHandler,
  Alert,
  Text,
  ScrollView,
  Animated,
  Easing,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextBase,
} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import Homecopment from '../../Compoent/HomeCompoent';
//import AsyncStorage from "@react-native-async-storage/async-storage";
import Daycompoent from '../../Compoent/Daycompoent';
import image from '../../assets';
//import { LottieView } from 'lottie-react-native';
//import Dealiycheck from '../../Compoent/Dealiycheck';
import Inspirationcompent from '../../Compoent/Inspirationcompent';
import PushNotification from 'react-native-push-notification';
//import PushNotificationIOS from '@react-native-community/push-notification-ios';
//import InputextCompoent from '../../Compoent/InputextCompoent';
//import Daycomponent from '../../Compoent/Daycomponent';
//import { useFocusEffect } from '@react-navigation/native';
//import NotifyMe from '../../Compoent/NotifyMe';

// PushNotification.configure({
//     requestPermissions: Platform.OS === 'ios',
//     onNotification: function (notification) {
//         console.log('NOTIFICATION:', notification);
//         notification.finish(PushNotificationIOS.FetchResult.NoData);
//     },
// });

PushNotification.createChannel(
  {
    channelId: 'DemoAppID',
    channelName: 'DemoApp',
  },
  created => console.log(`createChannel returned '${created}'`),
);

// const Setting = ({ navigation,route }) => {
const Home = ({navigation, route}) => {
  const [showAlert, setShowAlert] = useState(false);

  
    // const {Response} = route.params;
    // console.log('Responseabhi',Response);

    //  const {resp} = route.params;
    //  console.log(resp);


  // useEffect(() => {
  //     const intervalId = setInterval(() => {
  //         const currentTime = new Date();
  //         const targetTime = new Date();
  //         targetTime.setHours(17);
  //         targetTime.setMinutes(0);
  //         targetTime.setSeconds(0);

  //         if (currentTime.getHours() === targetTime.getHours() &&
  //             currentTime.getMinutes() === targetTime.getMinutes() &&
  //             currentTime.getSeconds() === targetTime.getSeconds()) {
  //             setShowAlert(true);
  //         }
  //     }, 1000);

  //     return () => clearInterval(intervalId);
  // }, []);

  const Idimage = async () => {
    const jsonValue = await AsyncStorage.getItem('IdA');
    console.log('>>>>>>>>', UESID);
    let url = `http://demo4.progressiveaidata.in/api/user-achievement`;
    var headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      mode: 'same-origin',
      body: JSON.stringify({
        //user_id: jsonValue,
        user_id: Response,
        achievement_id: Iddd,
      }),
      headers: headers,
    })
      .then(Response => Response.json())
      .then(Response => {
        console.log('  id RESPONSE <<<<<-------------->>>>', Response);
      })
      .catch(error => {
        console.error('ERROR FOUND' + error);
      });
  };

  const Showalert = async () => {
    const jsonValue = await AsyncStorage.getItem('IdA');
    console.log('GGGGG', jsonValue);
    let url = `http://demo4.progressiveaidata.in/api/user-alert/${Response}`;
    var headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      mode: 'same-origin',
      body: JSON.stringify({
        status: 'Yes',
        get_status: Modalshow,
      }),
      headers: headers,
    })
      .then(response => response.json())
      .then(response => {
        console.log('Show ----->>>', response);
        console.log('Show ----->>>', Modalshow);
        Achievementday();
        Idimage();
        if (response.status_code == 200) {
          Alert.alert('Successful');
          setModalshow(false);
          // jsonValue
        }
      })
      .catch(error => {
        console.error('catch gdwaasjhgdhgdg error', error);
      });
  };

  // useEffect(() => {
  //     setRepeatingNotification("every 30 seconds");
  //     setRepeatingNotification("once in two days");
  //     setRepeatingNotification("once a week");

  // }, [])
  // function setRepeatingNotification(interval) {
  //     PushNotification.cancelAllLocalNotifications()
  //     if (interval == "every 30 seconds") {
  //         PushNotification.localNotificationSchedule({
  //             title: "My notification title",
  //             message: "My notification message",
  //             date: new Date(Date.now() + 3600 * 1000), // first trigger in 30 secs
  //             channelId: 'DemoAppID',
  //             repeatType: 'day',
  //             repeatTime: 3600 * 1000,
  //             largeIconUrl: "https://upload.wikimedia.org/wikipedia/commons/3/37/No_drink_alcohol_520px.png",
  //             color: "blue",
  //         });
  //          Alert.alert("Successful!", "Your notification is coming in 30 seconds and will repeat itself every 30 seconds.")
  //     }
  //     else if (interval == "once in two days") {
  //         PushNotification.localNotificationSchedule({
  //             title: "My notification title",
  //             message: "My notification message",
  //             date: new Date(Date.now() + 120 * 1000), // first triggerāś in 10 secs
  //             channelId: 'DemoAppID',
  //             repeatType: 'day',
  //             repeatTime: 7,
  //             largeIconUrl: "https://upload.wikimedia.org/wikipedia/commons/3/37/No_drink_alcohol_520px.png",
  //             color: "blue", // repeats every 2 days
  //         });
  //          Alert.alert("Successful!", "Your notification is coming in 10 seconds and will repeat itself once in two days.")
  //     }
  //     else if (interval == "once a week") {
  //         PushNotification.localNotificationSchedule({
  //             title: "My notification title",
  //             message: "My notification message",
  //             date: new Date(Date.now() + 60 * 1000), // first trigger in 10 secs
  //             channelId: 'DemoAppID',
  //             repeatType: 'day',
  //             repeatTime: 1,
  //             largeIconUrl: "https://upload.wikimedia.org/wikipedia/commons/3/37/No_drink_alcohol_520px.png",
  //             color: "blue",
  //         });
  //         Alert.alert("Successful!", "Your notification is coming in 10 seconds and will repeat itself every week.")
  //     }
  // }
  return (
    <SafeAreaView style={{flex: 1}}>
      <Homecopment
        back2={true}
        name={'Home'}
        image3={image.setting}
        onpresss={() => navigation.navigate('Setting')}
      />
      <ScrollView
        style={{flex: 1, backgroundColor: '#F5F5F5'}}
        showsVerticalScrollIndicator={false}>
        <Daycompoent dataa={Response}/>
        
        {/* <View>{<Text style={{color: 'grey'}}>{Response} in Home</Text>}</View> */}
         {/* <View>{Response==Response?(<Text style={{color: 'grey'}}>{Response.user_data.id} from login</Text>):(<Text style={{color: 'grey'}}>{Response.id} from signup</Text>)}</View> */}
        {/* <Daycomponent /> */}
        {/* InputextCompoent is disabled in Layers but enabled in FirstProj */}
        {/* <InputextCompoent /> */}
        {/* <Dealiycheck /> */}
       <Inspirationcompent dataa={Response}/> 
       
        
        {/* <View>
                    {showAlert && (
                        Alert.alert(
                            "Daily Checking:",
                            "Were you successfull?",
                            [{ text: "Yes", onPress: () => { setShowAlert(false), Showalert } },
                            { text: "No", onPress: () => { setShowAlert(false), navigation.navigate('Reset') } },]
                        )
                    )}
                </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  TouchableOpacitystyle: {
    height: moderateScale(150),
    backgroundColor: 'white',
    // shadowColor: "white",
    justifyContent: 'center',
  },
  secondaryButton: {
    padding: 5,
    backgroundColor: '#ffc2c2',
    borderRadius: 5,
    margin: 10,
  },
  primaryButton: {
    padding: 5,
    backgroundColor: 'black',
    borderRadius: 5,
    // margin: 10,
    width: '100%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contare1: {
    height: moderateScale(25),
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textstyle: {
    fontSize: scale(13),
    color: 'black',
    fontWeight: '400',
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
});
// export default Setting;
export default Home;

// const [Time1, setime] = useState();
// useEffect(() => {
//     // setime("02:22")
//     setRepeatingNotification()
// });
// // var time = Time1;
// // var seconds = new Date('1970-01-01T' + time + 'Z').getTime() / 1000
// // console.log("Secound ---->>", seconds);
