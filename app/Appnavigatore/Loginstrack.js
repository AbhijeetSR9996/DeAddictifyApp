import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Bottomn from '../Appnavigatore/Bottomnaviftion'
 import Login from '../Screen/Login';
 import auth from '@react-native-firebase/auth';
 import { StackActions } from 'react-navigation';

const Stack = createNativeStackNavigator();
function Loginstrack({navigation}) {

  // const [user, setuser] = useContext(Authcontext)
  const [user1, setuser1] = useState(true)

  // const onAuthStateChanged = () => {
  //   setuser(user)
  //   setuser1(true)
  //   if (user1) setuser1(true);

  // }
  // useEffect(() => {
  //   const Substsion = auth().onAuthStateChanged(onAuthStateChanged)
  //   return Substsion;
  // }, [])

  // if (user1) return null;

  // useEffect (()=>{
  //   setTimeout(() => {
  //        const Substsion = auth().onAuthStateChanged(user =>{
  //         const router =user !==null ? "Home":"login"

  //         navigation.dispatch(StackActions.replace(router))
  //        })
  //        Substsion

  //   }, 3000);
  // })
  return (
    <NavigationContainer  >
      <Stack.Navigator
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Bottomn" component={Bottomn} />
       </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Loginstrack;
