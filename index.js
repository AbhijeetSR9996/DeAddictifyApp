import { AppRegistry } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import { View, Text, ImageBackground, Image, Platform } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import PushNotification from "react-native-push-notification";
// messaging().setBackgroundMessageHandler(async remoteMessage => {
//     // console.log('Message handled in the background!', remoteMessage);
// });
PushNotification.configure({
    onRegister: function (token) {
        console.log("TOKEN:", token);
    },
    onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);
        // notification.finish(PushNotificationIOS.FetchResult.NoData);
    },
    // onRegistrationError: function (err) {
    //     console.error(err.message, err);
    // },
    permissions: {
        alert: true,
        badge: true,
        sound: true,
    },

    popInitialNotification: true,
    requestPermissions: Platform.OS === 'ios',
});


AppRegistry.registerComponent(appName, () => App);
