import React, { useEffect, useRef, useState, useCallback } from 'react';
import {
    View, SafeAreaView, Text, ScrollView, Animated, Easing, Image,
    TouchableOpacity, StyleSheet, ImageBackground, Modal, RefreshControl
} from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
//import { useFocusEffect, StackActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import image from '../assets';
import { ActivityIndicator } from 'react-native-paper';
//import Dealiycheck from './Dealiycheck';

const Inspirationcompent = (props) => {
    const { dataa } = props;
    const [Amount, setAmount] = useState();
    const [setcountdolare, setsetcountdolare] = useState()
    const [showModals, setShowModals] = useState(false);

    const navigation = useNavigation();

    const [loder, setloder] = useState(true)
    const [data, setData] = useState([])

    // const {amount3} = route.params;
    // console.log("amount from reset screen",amount3);

    // const {amount4} = route.params;
    // console.log("amount from modify screen",amount4);

    useEffect(() => {
        getMoviesFromApi();
        Restetdate();
        indiacurency();
    }, [{Amount}])

    useEffect(() => {
        const intervalId = setInterval(() => {
          const newData = [Math.random()];
          setData(newData);
        }, 2000); 
        return () => clearInterval(intervalId);
      }, []); 

    const indiacurency = async () => {
        const jsonValue = await AsyncStorage.getItem("IdA",)
        console.log("GGGGG", jsonValue)
        let url = `https://demo4.progressiveaidata.in/api/currency-type/${jsonValue}`
        // let url = `https://demo4.progressiveaidata.in/api/currency-type/101`

        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };
        fetch(url, {
            method: 'Get',
            credentials: 'same-origin',
            mode: 'same-origin',
            headers: headers,
        })
            .then(response => response.json())
            .then(response => {
                //console.log(" Curencsyyyy>>>>>>>", response);
                setloder(false)
                //setsetcountdolare(response.currency)
                //console.log("countdolare", countdolare)

            })
            .catch(error => {
                console.error('eRRORR >>>>r', error);
            });
    };
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
                console.log(">>>>", response.user_data.amount);
                setAmount(response.user_data.amount)

            })
            .catch(error => {
                console.error('catch get error', error);
            });
    };

    const Restetdate = async () => {
        const jsonValue = await AsyncStorage.getItem("IdA",)
        let url = `demo4.progressiveaidata.in/api/reset-data${jsonValue}`


        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };
        fetch(url, {
            //method: 'GET',
            method: 'PUSH',
            credentials: 'same-origin',
            mode: 'same-origin',
            headers: headers,
            id: jsonValue
            //id: dataid.myid
        })
            .then(response => response.json())
            .then(response => {
                console.log("Star", response);
                navigation.navigate('Reset', { Amount });
            })
            .catch(error => {
                //console.error('catch reset error', error);
            });
    };

    const Resetvalue = () => {
        setShowModals(!showModals);
        setAmount(0);
        //setAmount(null);
        // { !setAmount == 0 ? setAmount(0) : '' }
        navigation.navigate('Reset'
            , { //amount2: Amount,
                //id: dataa
            }
        );
    }

    const ResetNovalue = () => {
        setShowModals(!showModals);
    }


    return (
        <View>
            {/* <View><Text style={{color:'black'}}>{dataa} in INS</Text></View> */}
            <View style={styles.TouchableOpacitystyle}>
                <View style={{ height: moderateScale(55), width: "90%", marginLeft: scale(25), top: scale(8), }}>
                    {/* <Text style={[styles.textstyle, { fontSize: scale(14), bottom: scale(7) }]}>Inspiration jar : </Text> */}
                    <Text style={[styles.textstyle, { fontSize: scale(14), bottom: scale(7) }]}>Inspiration for: </Text>

                    <View style={{ height: moderateScale(55), width: "100%", marginLeft: scale(2), top: scale(8), flexDirection: "row", }}>

                        <Text style={[styles.textstyle, { fontSize: scale(13), bottom: scale(7) }]} >Current value : </Text>
                        {loder ? (<ActivityIndicator size={15} color={"black"} style={{ bottom: scale(20) }} />) :
                            //  (<Text style={[styles.textstyle, { fontSize: scale(13), bottom: scale(7) }]} >{Resetvalue==true?Amount:0} </Text>)
                            (<Text style={[styles.textstyle, { fontSize: scale(13), bottom: scale(7) }]} >
                                {Amount}
                                {/* {user_data.amount} */}
                            </Text>)
                            // (<Text style={[styles.textstyle, { fontSize: scale(13), bottom: scale(7) }]} > 10.00 USD </Text>)
                        }

                        {/* <Text style={[styles.textstyle, { fontSize: scale(20), bottom: scale(10),color:"black",fontWeight:"600" }]} > {setcountdolare} </Text> */}
                        {/* <Text style={[styles.textstyle, { fontSize: scale(13), bottom: scale(7), }]} > USD  </Text> */}

                    </View>
                </View>
                <View style={styles.contare1}>
                    <TouchableOpacity style={styles.TouchableOpacitystyle1}
                        onPress={() => navigation.navigate('Modifiy', { amount: Amount,id: dataa })}
                    >
                        <Text style={[styles.textstyle, { color: "white", fontSize: scale(15), fontFamily: 'Inter' }]}>{"Modify"} </Text>
                        <Image
                            style={{ height: 20, width: 20, tintColor: "white" }}
                            source={image.varening}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.TouchableOpacitystyle1}
                        //onPress={() => navigation.navigate('Reset',setShowModals(!showModals))}
                        //onPress={Resetvalue}
                        onPress={() => { setShowModals(!showModals); }}
                    >
                        <Text style={[styles.textstyle, { color: "white", fontSize: scale(15), fontFamily: 'Inter' }]}>{"Reset"} </Text>
                        <Image
                            style={{ height: 18, width: 18, tintColor: "white", top: scale(2) }}
                            source={image.round}
                        />
                    </TouchableOpacity>

                    {/* -----------Reset MODAL-------------- */}

                    <Modal
                        animationType={'slide'}
                        transparent={true}
                        visible={showModals}
                        onRequestClose={() => {
                            console.log('No value modal has been closed.');
                        }}>
                        <View style={{
                            flex: 1,
                            alignItems: 'center',
                            backgroundColor: '#f0f0f0',
                            marginVertical: 290,
                            marginHorizontal: 30,
                            justifyContent: 'center',
                            borderRadius: 10
                        }}>
                            <Text style={{ color: 'black', fontSize: 20, marginBottom: 20 }}>Do you really want to reset?</Text>
                            <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                                <TouchableOpacity onPress={() => Resetvalue()}
                                >
                                    <Text style={{ fontSize: 20, color: 'green', marginRight: 50 }} >Yes </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => ResetNovalue()}
                                //onPress={()=>Restetdate()}
                                //onPress={() => { setShowModals(!showModals); }}
                                >
                                    <Text style={{ fontSize: 20, color: 'red' }}> No</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>

                    {/* -----------x-------------- */}

                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    TouchableOpacitystyle: {
        height: moderateScale(160),
        backgroundColor: "#FFEBB7",
        top: scale(18),
        justifyContent: "center"
        // backgroundColor:"red"
        // top: 8
    },
    TouchableOpacitystyle1: {
        height: moderateScale(43),
        borderRadius: scale(8),
        width: "30%",
        justifyContent: "center",
        backgroundColor: "#0097CE",
        padding: scale(11),
        margin: scale(20),
        flexDirection: "row"

    },
    contare1: {
        height: moderateScale(60),
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        flexDirection: "row",


    },
    textstyle: {
        color: "black",
        fontWeight: "500",

    },
    logo: {
        width: 120,
        height: 120,
        resizeMode: 'contain'
    },

});
export default Inspirationcompent;