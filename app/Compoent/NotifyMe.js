import React, { useState, useEffect } from 'react';
import { View, Alert } from 'react-native';


const NotifyMe = () => {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date();
      const targetTime = new Date();
      targetTime.setHours(16);
      targetTime.setMinutes(4);
      targetTime.setSeconds(0);

      if (currentTime.getHours() === targetTime.getHours() &&
        currentTime.getMinutes() === targetTime.getMinutes() &&
        currentTime.getSeconds() === targetTime.getSeconds()) {
        setShowAlert(true);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <View>
      {showAlert && (
        Alert.alert(
          "Daily Checking:",
          "Were you successfull.",
          [{ text: "Yes", onPress: () => setShowAlert(false) }]
        )
      )}
    </View>
  );

};

export default NotifyMe;
