import React, { useState } from 'react';
//import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import Bottomn from '../Appnavigatore/Bottomnaviftion'
import MyTabs from './Bottomnaviftion';
// import HomeScreen from '../Screen/Homescreen';
import Splash from '../Screen/Splash';
import Restistom from '../Screen/Restiston';
import Login from '../Screen/Login';
//import auth from '@react-native-firebase/auth'
//import { StackActions } from 'react-navigation';
import Pushtime from '../Screen/Pushtime';
import Modifiy from '../Screen/Bottomscreen/Modifiy';
import Reset from '../Screen/Bottomscreen/Reset';
import Setting from '../Screen/Bottomscreen/Settinscreen';
import Works from '../Screen/Works';
import Findyou from '../Screen/Findyou';
import Achievement from '../Screen/Bottomscreen/Achievement';
import Chatscreen from '../Screen/Chatscreen';
import Resources from '../Screen/Bottomscreen/Resources';
import Webcompoent from '../Compoent/Webcompoent';
import Activecard from '../Screen/Bottomscreen/Activecard';
//import Timecompoernt from '../Compoent/Timecompoent';
import Inspirationcompent from '../Compoent/Inspirationcompent';
import Demo from "../Screen/Demo";

const Stack = createNativeStackNavigator();
const Navigation = ({ navigation }) => {
  const [user1, setuser1] = useState(true)
  return (
    <NavigationContainer  >
      <Stack.Navigator
        screenOptions={{ headerShown: false }}>

       
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Restistom" component={Restistom} />
        <Stack.Screen name="Login" component={Login} initialParams={{responseid:Response.user_data}}/>
        <Stack.Screen name="MyTabs" component={MyTabs} />
        <Stack.Screen name="Resources" component={Resources} />
        <Stack.Screen name="Pushtime" component={Pushtime} />
        <Stack.Screen name="Chatscreen" component={Chatscreen} />
        <Stack.Screen name="Reset" component={Reset} />
        <Stack.Screen name="Activecard" component={Activecard} />
        <Stack.Screen name="Achievement" component={Achievement} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="Webcompoent" component={Webcompoent} />
        <Stack.Screen name="Works" component={Works} />
        <Stack.Screen name="Findyou" component={Findyou} />
        <Stack.Screen name="Modifiy" component={Modifiy} />
        <Stack.Screen name="Inspirationcompent" component={Inspirationcompent} />
        <Stack.Screen name="Demo" component={Demo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;
