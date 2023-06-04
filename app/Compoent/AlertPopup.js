import { View, Text, Modal, TouchableOpacity } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import React, { useEffect, useRef, useState } from 'react';
import {SafeAreaView, ScrollView, Animated, Easing, Image, StyleSheet, ImageBackground, } from 'react-native';
import image from '../assets';
import { useNavigation } from '@react-navigation/native';

const AlertPopup = ({ isVisible, onClose, message }) => {
  return (
    // <Modal
    //   animationType="fade"
    //   transparent={true}
    //   visible={isVisible}
    //   onRequestClose={onClose}>
    //   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
    //     <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 5 }}>
    //       <Text>{message}</Text>
    //       <TouchableOpacity onPress={onClose} style={{ marginTop: 20 }}>
    //         <Text style={{ color: 'blue' }}>OK</Text>
    //       </TouchableOpacity>
    //     </View>
    //   </View>
    // </Modal>
<View>
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}>
      <View style={{ height: moderateScale(40), width: "90%", marginLeft: scale(12), top: scale(10) }}>
        <Text style={[styles.textstyle, { fontSize: scale(14), }]}>Daily checking</Text>
        <Text style={[styles.textstyle, { fontWeight: "400" }]}>Were you successfull?</Text>
      </View>
      <View style={{ height: moderateScale(75), top: scale(15), width: "100%", justifyContent: "center", alignItems: "center", flexDirection: "row", }}>
        <View style={{ backgroundColor: '#005676', flexDirection: 'row', width: '50%', justifyContent: 'space-between' }}>
          <TouchableOpacity onPress={Showalert}>
            <ImageBackground style={[styles.contare1, { marginLeft: scale(2) }]} source={image.maincolur}>
              <Image style={{ height: scale(38), width: scale(38) }}
                source={image.success}
              />
              <Text style={{ color: "white", fontSize: scale(16) }}>Yes</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { NoApi, setShowModal(!showModal), Notsuccessfull }}>
            <ImageBackground style={[styles.contare1, { marginRight: scale(2) }]} source={image.maincolur}>
              <Image style={{ height: scale(38), width: scale(38) }}
                source={image.close}
              />
              <Text style={{ color: "white", fontSize: scale(16) }}>No</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
      

       <Modal
       animationType={'slide'}
       transparent={true}
       visible={showModal}
       onRequestClose={() => {
         console.log('No value modal has been closed.');
       }}>
       <View style={{flex: 1,
 alignItems: 'center',
 backgroundColor: '#f0f0f0',
 marginVertical: 290,
 marginHorizontal: 30,
 justifyContent:'center',
 borderRadius:10}}>
      <TouchableOpacity //onPress={() => { setShowModal(!showModal);}}
      onPress={() => navigation.navigate('Reset',setShowModal(!showModal))}>
             <Text style={{fontSize:30,color: 'red',marginBottom: 20, marginTop:-80,marginLeft:scale(250)}}>X</Text>
     </TouchableOpacity>
         <Text style={{color: 'black',fontSize:20,}}>You need to pay 100 USD...</Text>
       </View>
     </Modal>
     </View>
     
  );
};

export default AlertPopup;
