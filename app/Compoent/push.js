import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import messaging from '@react-native-firebase/messaging';
export const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
        console.log(' ---->>>>>>Authorization status:', authStatus);
        GetFCtOKEAN();
    }
}
const GetFCtOKEAN = async () => {
    let token = await messaging().getToken();
    console.log(" >>>>>>>>>old tokan", token)
}
export const NotifictionLiestner = () => {
    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log('Notification caused app to open from background state:',
            remoteMessage.notification,);
    });
    messaging()
        .getInitialNotification()
        .then(remoteMessage => {
            if (remoteMessage) {
                console.log('Notification caused app to open from quit state:',
                    remoteMessage.notification,);
            };
        });

}
  