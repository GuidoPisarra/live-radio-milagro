import React, { Component, useState } from "react";
import { View, Text, StyleSheet, Button ,Image, TouchableOpacity, Alert} from "react-native";
import  TextArea from "./textArea";
import SocialLinks from "./socialLinks"
import Footer from "./footer"


class prayerRequest extends Component {
  
  render() {
    const login = () =>{
      Alert.alert('Login', 'Login', [
       {
          text: 'OK', onPress: () => { },  },
     ]);     
   }
    return (   
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title} >PEDIDOS DE ORACIÓN</Text>
          
          <TouchableOpacity delayLongPress="5000" onLongPress={() => login("")} style={styles.imageMicro}>
              <Image   source={require('../images/microphone.png')} style={styles.inImage}/>
          </TouchableOpacity>
        </View>
        <View>
          <TextArea></TextArea>
        </View>
        <SocialLinks/>
        <Footer />
      </View>  
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height:'100%',
    width:'100%',
    backgroundColor: '#96613f',
    paddingTop:'2%',
    flex:10,
  },
  title:{
    paddingBottom:'2%',
    paddingLeft:"15%",
    alignSelf:"center",
    fontSize:25,
    textAlign:"left",
    color:"#d6966d",  
    
  },     
  imageMicro:{
    alignSelf:"flex-end",    
    height:'75%',
    width:'15%',
  }, 
  inImage:{
    
    width: "100%",
    height: "100%",
   }, 
  social:{
    marginTop:"10%",
    marginHorizontal:"20%",
    display:"flex",
    flexDirection:"row",
    flexWrap: "wrap",
    justifyContent:"space-evenly",
    flex:3,
  },
  header:{
    display:"flex",
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"space-evenly",
    flex:2,
  }
  
});
export default prayerRequest;

