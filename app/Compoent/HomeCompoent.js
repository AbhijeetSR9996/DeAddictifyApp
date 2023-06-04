import * as React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import image from '../assets';
import { useNavigation } from '@react-navigation/native';
const Homecopment = ({ name, onpresss, back1, image3, tincolur }) => {
    const navigation = useNavigation();
    return (
        <View style={{ height: moderateScale(65), width: "100%", }}>
            <View style={{ height: moderateScale(65), width: "100%", }}>
                <ImageBackground style={{ height: moderateScale(140), flexDirection: "row", width: "100%", borderRadius: 20 }}
                    source={image.k}
                    >
                    {/* <TouchableOpacity style={{ height: moderateScale(65), width: "20%", justifyContent: "center", marginLeft: scale(12) }}
                        onPress={() => navigation.goBack('')}
 >
                        {back1 && <Image style={{ height: moderateScale(37), width: 37,marginLeft:scale(12) ,top:scale(3) }} source={image.newback}
                        //source={require('../assets/newback.png')} 
                        />
                        }
                    </TouchableOpacity> */}
                     <TouchableOpacity onPress={() => navigation.goBack('')}
                            style={{ height: moderateScale(70), width: "20%", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <Image
                                style={{ height: 45, width: 45 }}
                                source={image.newback}
                            />
                        </TouchableOpacity>
                    <View style={{ height: moderateScale(68), width: "30%", justifyContent: "center", }}>
                        <Text style={{ fontSize: scale(16), color: "white",fontWeight:"500" }}>{name}</Text>
                    </View>
                    <View style={{ height: moderateScale(65), width: "40%", justifyContent: "center", alignItems: "flex-end" }}>
                        <TouchableOpacity style={{ height: moderateScale(40), width: "25%", justifyContent: "center",}}
                        onPress={onpresss}
                        >
                            <Image style={{ height: moderateScale(30), width:29,tintColor:tincolur }} source={image3} 
                            />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>

        </View>

    );
}


export default Homecopment;
