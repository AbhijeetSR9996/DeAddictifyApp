import PushNotification from "react-native-push-notification";
const showNotification = (titel, message) => {



    PushNotification.localNotification({
        id: 12,
        title: "wdwdd",
        message: "sdsdsd",
        color: "red",
        vibrate: true,
        vibration: 300,
        messageId: "google:message_id",
        channelId: '00001',
        date: new Date(Date.now() + 60 * 1000),
        vibration: 300,
        playSound: true,
        soundName: 'default',
        actions: '["Yes", "No"]'
    })
}
const HandleSchedulaeNotification = (titel, message) => {
    PushNotification.localNotification({
        title: 'ededfedffd',
        message: 'sdddd',
        date: new Date(Date.now() + 5 * 10000),
    })
}


const startFunction = async () => {
  
    PushNotification.createChannel(
    {
      channelId: "channel-id-1",
      channelName: "My channel",
      channelDescription: "A channel to categorise your notifications",
      playSound: false, 
      soundName: "default",
      importance: Importance.HIGH, 
      vibrate: true, 
    },
    (created) => console.log(`createChannel returned '${created}'`) 
    );
  
    LocalNotification();
  
  }
  


const handecancle = () => {
    PushNotification.cancelLocalNotification();
};




export { showNotification, HandleSchedulaeNotification, handecancle }