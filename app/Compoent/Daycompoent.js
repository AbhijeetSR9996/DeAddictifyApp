import React, { useEffect, useState } from "react";
import { StyleSheet, Text,ImageBackground, TextInput,Animated, 
    ActivityIndicator, TouchableOpacity, View, Image, Modal } from "react-native";
import { scale, moderateScale } from 'react-native-size-matters';
import AsyncStorage from "@react-native-async-storage/async-storage";
import image from "../assets";
import { useNavigation } from '@react-navigation/native';
//import moment from "moment";

const InputextCompoent = (props,route) => {
  const { dataa } = props;
    const navigation = useNavigation();
    const [Modalshow,setModalshow]=useState(true);
    const [Dayes,setDayes]=useState();
   const [image1,setimage1]=useState();
   const [image2,setimage2]=useState();
   const [showModal, setShowModal] = useState(false);
   const [data, setData] = useState([])
   const [loder,sertloder]=useState(true);
   const [Iddd,setIddd]=useState();
   const [UESID,SETUESID]=useState();
    const [lode,setlode]=useState(true);
    const [Nextloder,setNextloder]=useState(true);

    const [myValue, setValue] = useState(null);
    const [responseDay,setResponseDay] = useState('');
    const [ID,setID] = useState(null);
    
    const [curimageURL, setCurImageURL] = useState(null);
    const [nextimageURL, setNextImageURL] = useState(null);

    // const {data} = route.params;
    // console.log("data from home",data);
    
     useEffect(() => {
        const intervalId = setInterval(() => {
          const newData = [Math.random()];
          setData(newData);
        }, 2000); 
        return () => clearInterval(intervalId);
      }, []); 
   
useEffect(()=>{
    //Achievementday(); 
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
    const value = await AsyncStorage.getItem("IdA",);
     //console.log("UESID>>>>>>>>",UESID)
     console.log('user-id:',value);
     //setID(UESID);
     setID(value);
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
            //user_id:jsonValue,
            user_id:dataa,
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
       let url = `http://demo4.progressiveaidata.in/api/user-day-show/${dataa}`
     var headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json', };
      fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'same-origin',
        headers: headers,
       })
        .then(response => response.json())
        .then(response => {
           console.log("day----->>>",response);
           console.log("days_Show   ----->>>",response.days_show);
           setResponseDay(response.days_show);
           setDayes(response.Dayes);
           setlode(false)
           console.log("Dayes  day----->>>",Dayes);
           })
        .catch(error => {
            console.error('eRRORR >>>>r',error);
        });
  };
     const Achievementday = async () => {
         const jsonValue = await AsyncStorage.getItem("IdA",)
         console.log("CA>GGGGG",jsonValue) 
         //setValue(jsonValue);

           let url = `http://demo4.progressiveaidata.in/api/user-achievement-get/${dataa}`
          // let url = `https://demo4.progressiveaidata.in/api/user-achievement-get/210`

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
                console.log("current_achievement  >",response);
                setimage1(response.last_achievement);
                setIddd(response.last_achievement);
                console.log("id>> achievement id----->>>",Iddd);
                console.log("id>> user id----->>>",jsonValue);
               console.log("image image day----->>>",image1);
            // const imageUrl = response.last_achievement;
            // console.log('imageurl data',imageUrl);
               console.log("current_achievement_data >",response.last_achievement);
               setCurImageURL(data.curimageUrl);
               sertloder(false)
            })
            .catch(error => {
                console.error('eRRORR >>>>r',error);
            });
      };


      const NextDAy = async () => {
        const jsonValue = await AsyncStorage.getItem("IdA",)
         console.log("GGGGG",jsonValue)                 
        let url = `http://demo4.progressiveaidata.in/api/next-achievement-get/${dataa}`          
       // let url = `http://demo4.progressiveaidata.in/api/next-achievement-get/210`       
                 
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
               console.log("last_achievement  >",response);                 
                setimage2(response.last_achievement);       
                setNextImageURL(data.nextimageURL);     
                //console.log("id>> user id----->>>",jsonValue);    
                setNextloder(false)                       
              })                 
            .catch(error => {                 
                console.error('eRRORR >>>>r',error);                 
            });                 
      };


const NoApi = async () => {
    const jsonValue = await AsyncStorage.getItem("IdA",)
     console.log("NoApi>GGGGG",jsonValue)
     let url = `http://demo4.progressiveaidata.in/api/user-reset-status/${dataa}`
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
   console.log("Showalert>GGGGG",jsonValue)
  let url = `http://demo4.progressiveaidata.in/api/user-alert/${dataa}`
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


    return (
        <View style={{flex:1}}>
           <View>
      {/* <Text style={{color:'black'}}>{dataa} in component</Text> */}
    </View>
        <View style={styles.TouchableOpacitystyle}>
            <Animated.View style={[styles.item,  ]} >
                <Animated.View style={[styles.topItem,  ]}>
{       lode ?
(            <Text style={{fontSize:18,color:"white",fontWeight:"500"}}>Day {responseDay}</Text>   ):(  <ActivityIndicator    size={25} color={"black"}/>)}                
                </Animated.View>    
            </Animated.View>
        </View>
        <View style={{height:moderateScale(200),backgroundColor:"white",top:scale(10)}}>
                    <Text style={{ fontSize: scale(16), color: "black", marginLeft: scale(12), fontWeight: "500",top:8, }}>Your Goals</Text>
                    <View style={{ height: moderateScale(40), width: "100%", alignItems: "center", flexDirection: "row", justifyContent: 'space-around' }}>
                        <View style={styles.contare1}>
                            <Text style={{fontSize:scale(15),color:"black",fontWeight:"500"}}>Current Achievement </Text>
                        </View>
                        <View style={styles.contare1}>
                            <Text style={{fontSize:scale(15),color:"black",fontWeight:"500"}}>Next goal</Text>
                        </View>
                    </View>
                         <View style={{ height: moderateScale(110), width: "90%", marginLeft: scale(15), alignItems: "center", flexDirection: "row" }}>
                            <View style={styles.contare1}>
                                <View style={styles.contare1}>
                                  
                                           { 
                                    loder  ?
                                             (<ActivityIndicator  fontWeight={500}    size={30}  color={"black"} />) :
                                      
                                             ( <Image
                                        style={{ width: moderateScale(100), height: moderateScale(100),   }}
                                        source={{ uri:image1}}
                                           />)}
                                </View>
                            </View>
                            <View style={styles.contare1} 
                          
                            >
                          
                                           { 
                                    Nextloder  ?
                                             (<ActivityIndicator  fontWeight={500}    size={30}  color={"black"} />) :
                                             ( <Image
                                        style={{ width: moderateScale(100), height: moderateScale(100),   }}
                                        source={{ uri:image2}}
                                           />)}
                            </View>
                     </View>
                </View>
                 <View style={{height:moderateScale(180),width:'100%', top:scale(15), backgroundColor:"white",}}>
            <View style={{ height: moderateScale(50), width: "90%", marginLeft: scale(12),   }}>
                <Text style={{fontSize:scale(15),color:"black",fontWeight:"500"}}>Daily checking:</Text>
                <Text style={{fontSize:scale(15),color:"black",fontWeight:"500"}}>Were you successfull?</Text>
               </View>
            <View style={{ height: moderateScale(120),  top:scale(5),  width: "100%", justifyContent: "center", alignItems: "center", flexDirection: "row",  }}>
            {            Modalshow ? (         <View style={{ height: moderateScale(80),  backgroundColor: '#005676', flexDirection: 'row', width: '50%', justifyContent: 'space-evenly' }}>
{            Modalshow ? (        <TouchableOpacity    onPress={Showalert}>
                        <ImageBackground style={ {height:moderateScale(60),width:scale(55),  top:scale(8),   }} source={image.maincolur}>
                            <Image style={{ height: scale(33), width: scale(33),marginLeft:scale(11),top:scale(2) }}
                                source={image.success}
                            />
                            <Text style={{ color: "white", fontSize: scale(13),marginLeft:scale(15) }}>Yes</Text>
                        </ImageBackground>
                        </TouchableOpacity>):null}
                        {        Modalshow   ?(   <TouchableOpacity   onPress={()=>{setShowModal(!showModal),NoApi}}>
      <ImageBackground style={ {height:moderateScale(60),width:scale(55),  top:scale(9),  marginLeft:scale(17) }} source={image.maincolur}>
                         <Image style={{ height: scale(33), width: scale(33),marginLeft:scale(11),top:scale(2) }}
                            source={image.close}
                        />
                        <Text style={{ color: "white", fontSize: scale(13),marginLeft:scale(18) }}>No</Text>
                </ImageBackground>
                    </TouchableOpacity>):null}
                 
                </View>):null}
             </View>
    {/* <View>
      {responseDay && <Text>{responseDay}</Text>}  
    </View> */}
    {/* <View>
      {responsee.message && <Text>{responsee.message}</Text>}  
    </View> */}
    {/* <View>{myValue && <Text>{myValue}</Text>}</View> */}
    {/* <View>{<Text style={{color:'grey'}}>{props.data}</Text>}</View> */}
   
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
};
const styles = StyleSheet.create({
    TouchableOpacitystyle: {
        height: moderateScale(300),   width: "100%", flexDirection: "column", justifyContent: "flex-end",  
    },
    contare1: {
        height: moderateScale(120),
        width: "100%", justifyContent: "center",
        flexDirection: "row", alignItems: "center" 

    },
    textstyle: {
        fontSize:scale(16),
        textAlign: "center",
        // color: { color },
        fontWeight: "500",
        color:"black"

    },
    item: {
        position: 'relative',
        width: moderateScale(100),
        height: moderateScale(100), // this is the diameter of circle
        backgroundColor: "blue",
        
        borderWidth: 1,
        borderRadius: 55,
        bottom: scale(20),
        marginLeft: scale(120),

    },
    topItem: {
        width: '100%',
        height: moderateScale(120),
        //  position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#0097CE",
        width: moderateScale(120),
        borderRadius: scale(120),
        top: scale(12)
    },
    text: {
        color: '#fff',
    },
    TouchableOpacitystyle: {
        height: moderateScale(250),
        // backgroundColor:"white",
        top: scale(12), width: "100%", flexDirection: "column", justifyContent: "flex-end",
    },
    contare1: {
        height: moderateScale(120),
        width: "100%", justifyContent: "center",
        flexDirection: "row", alignItems: "center"

    },
    textstyle: {
        fontSize: 24,
        textAlign: "center",
        // color: { color },
        fontWeight: "500"

    },
    TouchableOpacitystyle: {
      height: moderateScale(125),
      backgroundColor: "#FFEBB7",
      top: scale(5),
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
      height: moderateScale(70),
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      flexDirection: "row",


  },
  textstyle: {
      color: "black",
      fontWeight: "500"
  },
  logo: {
      width: 120,
      height: 120,
      resizeMode: 'contain'
  },
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
TouchableOpacitystyle: {
  height: moderateScale(150),
  backgroundColor: "white",
  // shadowColor: "white",
  justifyContent: "center",

},
contare1: {
  height: moderateScale(25), width: "50%", alignItems: "center", justifyContent: "center",
},
textstyle: {
  fontSize: scale(13), color: "black", fontWeight: '400'
},
logo: {
  width: 120,
  height: 120,
  resizeMode: 'contain'
},
});

export default InputextCompoent;



// import React, { Component } from 'react';
// import { View, Text, Animated, StyleSheet, Easing } from 'react-native';
// import { moderateScale, scale } from 'react-native-size-matters';
// import { RadioButton } from 'react-native-paper';
// export default class Circle extends Component {
//     constructor() {
        
//         super();
//         this.animated = new Animated.Value(0);
//         var inputRange = [0, 1];
//         var outputRange = ['0deg', '360deg'];
//         this.rotate = this.animated.interpolate({ inputRange, outputRange });
//         outputRange = ['0deg', '-360deg'];
//         this.rotateOpposit = this.animated.interpolate({ inputRange, outputRange });
//     }

//     componentDidMount() {
//         this.animate();
//     }

//     animate() {
//         Animated.loop(
//             Animated.timing(this.animated, {
//                 toValue: 1,
//                 duration: 4000,
//                 useNativeDriver: true,
//                 easing: Easing.linear,
//             }),
//         ).start();
//     }
//     render() {
//         const transform = [{ rotate: this.rotate }];
//         const transform1 = [{ rotate: this.rotateOpposit }];
//         return (
//             <View style={styles.container}>
//                 <Animated.View style={[styles.item, { transform }]}>
//                     <Animated.View style={[styles.topItem, { transform: transform1 }]}>
//                         <Text style={styles.text}>1 day</Text>
//                     </Animated.View>
//                 </Animated.View>
//                 {/* <View style={styles.TouchableOpacitystyle}> */}
//                 <View style={{ height: moderateScale(80), width: "100%", flexDirection: "row" }}>
//                     <View style={{ height: moderateScale(55), width: "15%", alignItems: "center", justifyContent: "center" }}>

//                         <RadioButton
//                         // value="first"
//                         // status={checked === 'first' ? 'checked' : 'unchecked'}
//                         // onPress={() => setChecked('first')}
//                         />

//                         <Text style={{ fontSize: 12, color: "black" }}> Day 1</Text>
//                     </View>
//                     <View style={{ height: moderateScale(55), width: "15%", alignItems: "center", justifyContent: "center" }}>

//                         <RadioButton
//                         // value="second"
//                         // status={ checked === 'second' ? 'checked' : 'unchecked' }
//                         // onPress={() => setChecked('second')}
//                         />
//                         <Text style={{ fontSize: 12, color: "black" }}> Day 2</Text>

//                     </View>
//                     <View style={{ height: moderateScale(55), width: "15%", alignItems: "center", justifyContent: "center" }}>

//                         <RadioButton
//                         // value="therd"
//                         // status={ checked === 'therd' ? 'checked' : 'unchecked' }
//                         // onPress={() => setChecked('therd')}
//                         />
//                         <Text style={{ fontSize: 12, color: "black" }}> Day 3</Text>

//                     </View>
//                     <View style={{ height: moderateScale(55), width: "15%", alignItems: "center", justifyContent: "center" }}>

//                         <RadioButton
//                         // value="four"
//                         // status={ checked === 'four' ? 'checked' : 'unchecked' }
//                         // onPress={() => setChecked('four')}
//                         />
//                         <Text style={{ fontSize: 12, color: "black" }}> Day 4</Text>

//                     </View>
//                     <View style={{ height: moderateScale(55), width: "15%", alignItems: "center", justifyContent: "center" }}>

//                         <RadioButton
//                         // value="four"
//                         // status={ checked === 'four' ? 'checked' : 'unchecked' }
//                         // onPress={() => setChecked('four')}
//                         />
//                         <Text style={{ fontSize: 12, color: "black" }}> Day 5</Text>
//                     </View>
//                     <View style={{ height: moderateScale(55), width: "15%", alignItems: "center", justifyContent: "center" }}>

//                         <RadioButton
//                         // value="four"
//                         // status={ checked === 'four' ? 'checked' : 'unchecked' }
//                         // onPress={() => setChecked('four')}
//                         />
//                         <Text style={{ fontSize: 12, color: "black" }}> Day 6</Text>

//                     </View>
//                 </View>


//             </View>
//             // </View>
//         );
//     }
// }
// const styles = StyleSheet.create({
//     container: {
//         height: moderateScale(280),
//         top: scale(12), width: "100%", flexDirection: "column", justifyContent: "flex-end",
//     },
//     item: {
//         position: 'relative',
//         width: moderateScale(100),
//         height: moderateScale(100), // this is the diameter of circle
//         backgroundColor: "blue",
//         borderWidth: 1,
//         borderRadius: 55,
//         bottom: scale(65),
//         marginLeft: scale(120),

//     },
//     topItem: {
//         width: '100%',
//         height: moderateScale(120),
//         //  position: 'absolute',
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: "#0097CE",
//         width: moderateScale(120),
//         borderRadius: scale(120),
//         top: scale(12)
//     },
//     text: {
//         color: '#fff',
//     },
//     TouchableOpacitystyle: {
//         height: moderateScale(300),
//         // backgroundColor:"red",
//         top: scale(12), width: "100%", flexDirection: "column", justifyContent: "flex-end",
//     },
//     contare1: {
//         height: moderateScale(120),
//         width: "100%", justifyContent: "center",
//         flexDirection: "row", alignItems: "center"

//     },
//     textstyle: {
//         fontSize: 24,
//         textAlign: "center",
//         // color: { color },
//         fontWeight: "500"

//     },
// });
