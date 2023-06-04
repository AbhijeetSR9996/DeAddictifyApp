import * as React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import image from '../assets';
import { useNavigation } from '@react-navigation/native';

const Restisationcompoent = ({ name, name1, back1, back2, }) => {
    const navigation = useNavigation();

    return (
        <View style={{ height: moderateScale(230), backgroundColor: "#EFF0FF", width: "100%", flexDirection: "row", }}>

            <View style={{ height: moderateScale(110), width: "40%", justifyContent: "center", }}>

                <TouchableOpacity style={{ height: moderateScale(28), backgroundColor: "#EFF0FF", borderRadius: scale(19), marginLeft: scale(20), width: "18%", justifyContent: "center", elevation:5}}
                    onPress={() => navigation.goBack("")
                    }
                >
                    <Image style={{ height: moderateScale(22), width: 22, marginLeft: scale(1), tintColor: "black" }} source={image.back} />
                </TouchableOpacity>

            </View>

            <View style={{ height: moderateScale(170), width: "40%", justifyContent: "center", alignItems: "center" }}>

                <ImageBackground style={{ height: moderateScale(160), width: scale(180) }} source={image.Restistion} />
            </View>


        </View>


    );
}


export default Restisationcompoent;
