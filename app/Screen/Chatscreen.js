
    import React, { useEffect, useRef, useState, useCallback, useReducer } from 'react';
    import { View, SafeAreaView, Text, ScrollView, Animated, Easing, Image, TouchableOpacity, StyleSheet, ImageBackground,  KeyboardAvoidingView ,} from 'react-native';
    import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
    import AsyncStorage from '@react-native-async-storage/async-storage';
    import { GiftedChat, Bubble, Send, InputToolbar, } from 'react-native-gifted-chat'
    import { useNavigation, useRoute } from '@react-navigation/native';
    import firestore from '@react-native-firebase/firestore'
    import image from '../assets';
    import { TabRouter } from 'react-navigation';
    const Chatscreen = () => {
        const route = useRoute()
        const [messages, setMessages] = useState([]);
        const navigation = useNavigation();
        const [Addistion, setAddistion] = useState([])
        useEffect(() => {
            console.log("cdccccc----->>", messages)
            // getMoviesFromApi()
        }, [Addistion])
        const getMoviesFromApi = async () => {
            const jsonValue = await AsyncStorage.getItem("IdA",)
            console.log(">>>>>>", jsonValue)
            let url = `http://demo4.progressiveaidata.in/api/user-get-data/${jsonValue}`
            var headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            };
            fetch(url, {
                method: 'GET',
                credentials: 'same-origin',
                mode: 'same-origin',
                headers: headers,
            })
                .then(response => response.json())
                .then(response => {
                    console.log("Dateee", response);
                    setAddistion(response);
                    // console.log("Addistion>>>", Addistion)
                })
                .catch(error => {
                    console.error('catch gdwaasjhgdhgdg error', error);
                });
        };
        useEffect(() => {
            setMessages([
                {
                    _id: 1,
                    text: 'Hello developer',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD5iROb1TgJ_rcl-6r-68v1yjtID052zxSkw&usqp=CAU'
                    },
                },


            ])
        }, [])
        // const onSend = useCallback((messages = []) => {
        //     console.log("MessageArry",useCallback)
        //     setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
        // }, [])
        const onSend = Messs => {
            console.log("Messssss", Messs);
            // const msg =Messs[0];
            // const myMsg={...msg,

            //     Sendid:route.params.data.myid,
            //     receriverId:params.data.userid,

            // }
            setMessages(previousMessages => GiftedChat.append(previousMessages, Messs))
            // firestore()
            // .collection("Chat")
            // .doc(route.params.date.myid)
            // .collection("Msessage")
            // .add({
            //     ...myMsg,
            //     createdAt:new Date(),
            // })
        }

        const Rederiteam = (props) => {
            return (
                <Bubble {...props}
                    wrapperStyle={{
                        right: {
                            backgroundColor: "#0097CE"
                        }
                    }}
                    textStyle={{
                        right: {
                            color: "black",
                            fontSize: scale(14),
                            textAlign: "center"
                        }
                    }}
                />
            )
        }
        const rendesend = (props) => {
            return (
                <Send   {...props} containerStyle={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                    marginRight: 12,
                }}>
                    <View>

                        <Text style={{
                            fontSize: scale(16),
                            color: "blue", marginLeft: scale(5)
                        }}>Send</Text>
                    </View>
                </Send>
            )
        }
        const Hedercompoent = () => {
            return (
                <View style={{ height: moderateScale(60), width: "100%", }}>
                    <View style={{ height: moderateScale(55), width: "100%", flexDirection: "row", backgroundColor: "#01455E", }}>
                        <TouchableOpacity onPress={() => navigation.goBack('')}
                            style={{ height: moderateScale(50), width: "20%", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <Image
                                style={{ height: 45, width: 45 }}
                                source={image.newback}
                            />
                        </TouchableOpacity>
                        <View style={{ height: moderateScale(50), width: "42%", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ fontSize: 20, color: "white" }}>Forum</Text>
                        </View>
                        <TouchableOpacity
                            style={{ height: moderateScale(50), width: "50%", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <Image
                                style={{ height: 33, width: 33, tintColor: "white" }}
                                source={image.King}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
                <Hedercompoent />
                {/* <Text style={{ fontSize: 20, color: "red" }}>Nmae{Addistion.user_data}</Text> */}
                {/* <ScrollView> */}
                <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1, justifyContent: "flex-end",backgroundColor:"grey" }}
    >
      <View style={{ height: 350 }}>
                <GiftedChat
                    messages={messages}
                    onSend={messages => onSend(messages)}
                    placeholder={"Type"}
                    placeholderTextColor={"black"}
                    multiline={true}
                    isTyping={false}
                    inverted={true}
                    alwaysShowSend={true}
                    showUserAvatar={false}
                    // dateFormat ={}
                    isKeyboardInternallyHandled={true}
                    scrollToBottom
                    // renderAvatar={renderAvatar}
                    // text={textMessage}
                    // onInputTextChanged={(text) => onInputTextChanged(text)}
              
                    color="red"
                    user={{
                        // _id: route.params.data.myid
                        id: 1
                    }}
                    textInputStyle={{
                        // height: 130,
                        backgroundColor: "white",
                        borderRadius: moderateScale(20),
                        paddingHorizontal: moderateScale(12),
                        marginTop: moderateScale(6),
                        borderWidth: 0.8,
                        color: "black",
                        fontSize: 18,
                        paddingTop: moderateScale(8),
                        borderColor: "black",
                        // height:moderateScale(40)
                    }}
                    // messagesContainerStyle={{
                    //     // backgroundColor: "red" ? Colors.primary : Colors.white,
                    //     backgroundColor: "red"  
                    //   }}
                    renderUsernameOnMessage={false}
                     renderBubble={Rederiteam}
                    focusTextInput={false}
                    isLoadingEarlier={true}
                    renderSend={rendesend}
                    //  scrollToBottom
                    InputToolbar={props => {
                        return (
                            <InputToolbar
                                containerStyle={{
                                    backgroundColor: "black",
                                    height: -70
                                }}
                                {...props}

                            />
                        )
                    }}
                />
                {/* </ScrollView> */}
                </View>
    </KeyboardAvoidingView>
            </SafeAreaView>

        );
    }
    const styles = StyleSheet.create({
        TouchableOpacitystyle: {
            height: moderateScale(120),
            backgroundColor: "white",
            shadowColor: "white",
            justifyContent: "center",

        },
        contare1: {
            height: moderateScale(45), width: "50%", alignItems: "center", flexDirection: "row",

        },
        textstyle: {
            fontSize: scale(15), color: "black"
        },
        logo: {
            width: 120,
            height: 120,
            resizeMode: 'contain'
        },
    });
    export default Chatscreen;
 