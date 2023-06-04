import React from "react";
import {Text ,View , Image , StyleSheet} from 'react-native' ;

const Add = () => {
	return (
		// <View style={Styles.container}>
		<Image
        style ={{width: "100%", height:"80%"}}
        source={{ uri : "https://sciencejmlp.files.wordpress.com/2020/11/blog-3.gif"}}
          />
		// </View>
	);
}

const Styles = StyleSheet.create({
	container :{
		alignContent:'center',
		margin:25
	}
})

export default Add;
