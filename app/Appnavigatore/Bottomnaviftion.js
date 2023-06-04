import * as React from 'react';
import { Text, View, Image } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Viewcard from '../Screen/Bottomscreen/Activecard';
import Home from '../Screen/Bottomscreen/Home';
//import Activecard from '../Screen/Bottomscreen/Achievement';
import Achievement from '../Screen/Bottomscreen/Achievement';
import image from '../assets';
import { scale } from 'react-native-size-matters';
import Resources from '../Screen/Bottomscreen/Resources';
 const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarStyle: { height: 65, backgroundColor: "white" },

            }}
            tabBarOptions={{
                activeTintColor: 'black',
                tabBarActiveTintColor: '#e91e63',
            }}
        >


            <Tab.Screen name="Home" component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <Image
                            source={image.Home}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                top: scale(5),
                                tintColor: focused ? "#2DB3FF" : "black"

                            }}
                        />
                    ),
                    tabBarLabel: ' ',
                }} />

            <Tab.Screen name="Achievement" component={Achievement}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={image.Achievement}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                top: scale(5),
                                tintColor: focused ? "#2DB3FF" : "black"
                            }}
                        />
                    ),
                    tabBarLabel: ' ',
                }} />
            <Tab.Screen name="Viewcard" component={Viewcard}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={image.bottom}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                top: scale(5),
                                tintColor: focused ? "#2DB3FF" : "black"
                            }}
                        />
                    ),
                    tabBarLabel: ' ',

                }}

            />
            <Tab.Screen name="Resources" component={Resources}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={image.King}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                top: scale(5),
                                tintColor: focused ? "#2DB3FF" : "black"

                            }}
                        />
                    ),
                    tabBarLabel: ' ',
                }}
            />
        </Tab.Navigator>
    );
}

export default MyTabs