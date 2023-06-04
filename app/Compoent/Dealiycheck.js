import React, { useEffect, useRef, useState } from 'react';
import { View, SafeAreaView, Text, ScrollView, Animated, Easing, Image,
     TouchableOpacity, StyleSheet, ImageBackground, Modal } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import image from '../assets';
import { useNavigation } from '@react-navigation/native';

const Dealiycheck = () => {

    const navigation = useNavigation();
    const [Modalshow,setModalshow]=useState(true);
    const [Dayes,setDayes]=useState();
   const [image1,setimage1]=useState();
   const [image2,setimage2]=useState();

   const [showModal, setShowModal] = useState(false);

   const [loder,sertloder]=useState(true);
   const [Iddd,setIddd]=useState();
   const [UESID,SETUESID]=useState();
    const [lode,setlode]=useState(true);
    const [Nextloder,setNextloder]=useState(true);
    const value = new Animated.Value(0);
    useEffect(() => {
      const interval = setInterval(() => {
          Animated.sequence([
              Animated.timing(value, {
                toValue: 1,
                duration: 800,
                useNativeDriver: false
              }),
              Animated.timing(value, {
                toValue: 0,
                duration: 800,
                useNativeDriver: false
              })
            ]).start()     
          
          }, 1200);
      return () => (interval);
    }, []);
    
    const translateX = value.interpolate({
      inputRange: [0, 1],
      outputRange: [100, 0],
    });
    const opacity = value
   
useEffect(()=>{
    Achievementday(); 
    Dayapi();
    Idimage();
},[Dayes,Iddd]);
useEffect(() => {
    setTimeout(() => {
        Achievementday(); 
        Dayapi();
        Idimage();
        NextDAy();
    }, 1000);
}, []);
const Idimage =async () => {
    const jsonValue = await AsyncStorage.getItem("IdA",);
     console.log(">>>>>>>>",UESID)
     let url = `http://demo4.progressiveaidata.in/api/user-achievement`
    var headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    };
    fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'same-origin',
        body: JSON.stringify({
            user_id:jsonValue,
            achievement_id:Iddd, 
        }),
        headers: headers,
    })
        .then((Response) => Response.json())
        .then((Response) => {
            console.log('  id RESPONSE <<<<<-------------->>>>', Response);
        })
        .catch((error) => {
            console.error("ERROR FOUND" + error);
        })
}
const Dayapi = async () => {
    const jsonValue = await AsyncStorage.getItem("IdA",)
     console.log("GGGGG",jsonValue)
       let url = `http://demo4.progressiveaidata.in/api/user-day-show/${jsonValue}`
     var headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json', };
      fetch(url, {
        method: 'Post',
        credentials: 'same-origin',
        mode: 'same-origin',
        headers: headers,
       })
        .then(response => response.json())
        .then(response => {
            // console.log("day----->>>",response);
        //    console.log("days_Show   ----->>>",response.days_show);
           setDayes(response.days_show);
           setlode(false)

           console.log("Dayes  day----->>>",Dayes);
           })
        .catch(error => {
            console.error('eRRORR >>>>r',error);
        });
  };
     const Achievementday = async () => {
        const jsonValue = await AsyncStorage.getItem("IdA",)
         console.log("GGGGG",jsonValue)// 
        //   let url = `http://demo4.progressiveaidata.in/api/user-achievement-get/${jsonValue}`
        let url = `http://demo4.progressiveaidata.in/api/user-achievement-get/${jsonValue}`

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
                console.log("last_achievement  >",response);
                sertloder(false)
                setimage1(response.last_achievement);
                setIddd(response.last_achievement);
                console.log("id>> image----->>>",Iddd);
               console.log("image image day----->>>",image1);
              })
            .catch(error => {
                console.error('eRRORR >>>>r',error);
            });
      };

      const NextDAy = async () => {
        const jsonValue = await AsyncStorage.getItem("IdA",)
         console.log("GGGGG",jsonValue)// 
        //   let url = `http://demo4.progressiveaidata.in/api/user-achievement-get/${jsonValue}`
        let url = `http://demo4.progressiveaidata.in/api/next-achievement-get/${jsonValue}`

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
                console.log("last_achievement  >",response);
                setNextloder(false)
                setimage2(response.last_achievement);
  
              })
            .catch(error => {
                console.error('eRRORR >>>>r',error);
            });
      };


const NoApi = async () => {
    const jsonValue = await AsyncStorage.getItem("IdA",)
     console.log("GGGGG",jsonValue)
     let url = `http://demo4.progressiveaidata.in/api/user-reset-status/${jsonValue}`
     var headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    };
      fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'same-origin',
        headers: headers,
       })
        .then(response => response.json())
        .then(response => {
          console.log(" No ----->>>",response);
          })
        .catch(error => {
            console.error('eRRORR >>>>r', error);
        });
  };
const Showalert = async () => {
  const jsonValue = await AsyncStorage.getItem("IdA",)
   console.log("GGGGG",jsonValue)
  let url = `http://demo4.progressiveaidata.in/api/user-alert/${jsonValue}`
   var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
  };
  fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      mode: 'same-origin',
      body: JSON.stringify({
         status:'Yes',
         get_status:Modalshow
    }),
      headers: headers,
  })
      .then(response => response.json())
      .then(response => {
        console.log("Show ----->>>",response);
        console.log("Show ----->>>",Modalshow);
        Achievementday();
        Idimage();
        if (response.status_code ==200){
          alert("Successful")
        setModalshow(false)
        // jsonValue
        }
        })
      .catch(error => {
          console.error('catch gdwaasjhgdhgdg error', error);
      });
};

const Notsuccessfull = () => {
    { !setAmount == 0 ? setAmount(0) : '' }
}

    return (
        <View style={styles.TouchableOpacitystyle}>
            <View style={{ height: moderateScale(40), width: "90%", marginLeft: scale(12), top: scale(10) }}>
                <Text style={[styles.textstyle, { fontSize: scale(14), }]}>Daliy checking</Text>
                <Text style={[styles.textstyle, { fontWeight: "400" }]}>Were you successfull yesterday?</Text>
            </View>
            <View style={{ height: moderateScale(75), top: scale(15), width: "100%", justifyContent: "center", alignItems: "center", flexDirection: "row",  }}>
                <View style={{ backgroundColor: '#005676', flexDirection: 'row', width: '50%', justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={Showalert}>
                        <ImageBackground style={[styles.contare1, { marginLeft: scale(2) }]} source={image.maincolur}>
                            <Image style={{ height: scale(38), width: scale(38) }}
                                source={image.success}
                            />
                            <Text style={{ color: "white", fontSize: scale(16) }}>Yes</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{NoApi,setShowModal(!showModal),Notsuccessfull}}>
                    <ImageBackground style={[styles.contare1, { marginRight: scale(2) }]} source={image.maincolur}>
                        <Image style={{ height: scale(38), width: scale(38) }}
                            source={image.close}
                        />
                        <Text style={{ color: "white", fontSize: scale(16) }}>No</Text>
                    </ImageBackground>
                    </TouchableOpacity>
                </View>
            </View>

            {/* -----------No Value MODAL-------------- */}

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

         {/* -----------x-------------- */}

        </View>
    );
}
const styles = StyleSheet.create({
    TouchableOpacitystyle: {
        height: moderateScale(150),
        backgroundColor: "#A5E2FF",
    },
    contare1: {
        height: moderateScale(70),
        justifyContent: "center",
        alignItems: "center",
        width: scale(60),


    },
    textstyle: {
        color: "black",
        fontWeight: "600"
    },
    logo: {
        width: 120,
        height: 120,
        resizeMode: 'contain'
    },
});
export default Dealiycheck;