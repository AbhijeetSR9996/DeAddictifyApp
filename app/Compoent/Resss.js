import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground,ActivityIndicator, Image, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
const { width, height } = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native';
import image from '../../assets';
import Homecopment from '../../Compoent/HomeCompoent';
import ModalDropdown from 'react-native-modal-dropdown';
import Chekchout from '../../Compoent/Chekchout';
import { Dropdown, } from 'react-native-element-dropdown';
const Resources = ({ imagee }) => {
    const [CityList, setCityList] = React.useState([]);
    const [liset, setliset] = React.useState(null);
    const [isFocus1, setIsFocus1] = useState(false);
    const [isFocus2, setIsFocus2] = useState(false);
    const navigation = useNavigation();
    const [Loder, setLoder] = useState(true)

    useEffect(() => {
        fetch('http://demo4.progressiveaidata.in/api/get-link')
            .then((response) => response.json())
            .then((response) => {
                // console.log('response pin code api ----->>>>>',response.link[0].category_name)
                let states = (Object.keys(response).length);
                let CityArray = []
                for (let i = 0; i < states; i++) {
                    CityArray.push({
                        value: link[0].category_name,
                        label: link[0].category_name,
                    })
                }
                console.log('Get show', CityArray)
                setCityList(CityArray);
                // setliset(liset)
            })
            .catch((error) => {
                console.error('catch api error', error);
            });
    }, [CityList]);



    const getMoviesFromApi = async () => {
        const jsonValue = await AsyncStorage.getItem("IdA",)
        console.log(">>>>>>", jsonValue)
        // let url = `http://demo4.progressiveaidata.in/api/user-get-data/${jsonValue}`
        let url = `http://demo4.progressiveaidata.in/api/get-resource-link/${liset}`

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
                setLoder(false)
                console.log('Web response ----->>>>>', response.link.url)
                setAchievement(response)
                console.log('<<<<<<<', Achievement)

            })
            .catch(error => {
                console.error('catch gdwaasjhgdhgdg error', error);
            });
    };
    const Rederiteam = ({ item }) => {
        return (
            <View style={{ height: moderateScale(90), padding: scale(5), backgroundColor: "white" }}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Webcompoent', {
                        itemId: item.url,
                    });
                }}
                    style={{ width: "96%", height: moderateScale(52), borderRadius: 12, backgroundColor: "#E8C4FF", justifyContent: "center", alignItems: "center", }}>
                    <Text style={{ fontSize: 20, color: "black" }}>{item.url}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1, }}>
            <Homecopment back2={true} name={"Resource"} image3={image.King} tincolur={"white"} onpresss={() => navigation.navigate("Findyou")} />
            <ScrollView style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
                <View style={{ height: moderateScale(140), top: scale(15), width: '98%', justifyContent: "center", backgroundColor: "white" }}>
                    <View style={{ height: moderateScale(20), width: '100%', justifyContent: "center", }}>
                        <Text style={{ color: "black", fontSize: 18, marginLeft: scale(15), fontWeight: "500" }}>Tailored Resources for</Text>
                    </View>
                    <View style={{ height: moderateScale(80), width: '100%', justifyContent: "center", }}>
                        <View style={{ borderColor: "#EFF0FF", height: moderateScale(50), borderWidth: 1, marginLeft: scale(13), flexDirection: 'column', width: '90%', alignItems: 'center', justifyContent: 'center', }}>
                            <Dropdown
                                style={[styles.input, isFocus1 && { borderColor: 'red', color: "#EFF0FF" }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                itemContainerStyle={{ borderColor: '#EFF0FF', color: "red" }}
                                containerStyle={{ borderColor: 'black', color: "red" }}
                                dropdownPosition='bottom'
                                selectedTextProps={{
                                    style: {
                                        fontSize: scale(14),
                                        color: 'black',
                                        top: scale(8),
                                        marginLeft: scale(5)
                                    },
                                }}
                                itemTextStyle={{
                                    color: "black"
                                }}
                                data={CityList}
                                search
                                maxHeight={250}
                                labelField="label"
                                valueField="value"
                                placeholder={'Addication type'}
                                searchPlaceholder="Search..."
                                value={liset}
                                onFocus={() => setIsFocus1(true)}
                                onBlur={() => setIsFocus1(false)}
                                onChange={item => {
                                    setliset(item.value);
                                    console.log('map data on change City',item)
                                    setIsFocus2(false);
                                }}
                            />
                            {/* <Text style={{ color: "black", fontSize: 17, textAlign: "center" }}> To Help</Text> */}
                        </View>
                    </View>
                </View>
                <Chekchout Getvalue={liset}     />


                {/* <ScrollView>
                {Loder ? (<ActivityIndicator style={{ top: scale(80) }} size={20} color={"black"} />) :
                    (<FlatList
                        data={Achievement.link}
                        renderItem={Rederiteam}
                    />)
                }
            </ScrollView> */}

            </ScrollView>
        </SafeAreaView>


    );
}
{/* <View style={{ height: moderateScale(110), width: "90%", marginLeft: scale(15), alignItems: "center", flexDirection: "row" }}>
                            
                                 <Image
                                    style={{ width: moderateScale(130), height: moderateScale(130), marginLeft: scale(15) }}
                                    source={{ uri: "https://i.pinimg.com/originals/75/d3/bd/75d3bd6c2855cea6bd12af66cc37719b.gif" }}
                                />
                         </View> */}

const styles = StyleSheet.create({


    textstyle: {
        fontSize: 18, fontWeight: "500", color: "black", marginLeft: scale(12)

    },
    TouchableOpacitystyle: {
        height: moderateScale(46),
        borderRadius: scale(8),
        width: "47%", justifyContent: "center",
        flexDirection: "row", alignItems: "center",
        backgroundColor: "#2DB3FF",
        // borderBottomEndRadius: scale(55),
        // borderTopStartRadius: scale(60),
        // buttonStyle, backgroundColor: [csCode]

    },
    textsyle: {
        textAlign: "center", color: "black", fontWeight: "400", fontSize: scale(13)

    },
    contare1: {
        height: moderateScale(260),
        width: "90%",
        backgroundColor: "#0097CE",
        marginLeft: scale(15),
        borderRadius: scale(10),
        justifyContent: "center", flexDirection: "column", top: scale(8), alignItems: 'center'
    },
    inputview: {
        height: moderateScale(600), padding: scale(8), width: "100%", flexDirection: "column",
    },
    Textinput: {
        height: moderateScale(30), top: scale(17), width: "100%", justifyContent: "center",
    },
    textstyle1: {
        color: "grey", marginLeft: scale(8), fontSize: 18
    },
    rowinputtext: {
        height: moderateScale(55), width: "100%", flexDirection: "row", alignItems: "center",
    },

    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
        // color: "red"

    },

    inputSearchStyle: {
        height: 45,
        fontSize: 18,
        width: '90%',
        marginLeft: 16,
        top: scale(8)

    },
    input: {
        height: height * 0.04,
        width: width * 0.8,
        // borderWidth: scale(1.40),
        // padding: width * 0.02,
        borderRadius: 5,
        letterSpacing: 1,
        fontSize: scale(16.5),
        fontWeight: '400',
        color: 'black',
        marginBottom: scale(12),
        // marginLeft:scale(20)
    },


});


export default Resources;
