import React,{useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
export default function Home(props) {
  const [typedMessage, setTypedMessage]= useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.buttonText}>Home</Text>
      <View style={styles.textInputView}>
        <TextInput placeholder="  Message" style={styles.textFiled}
        onChangeText={(text)=>{}}
        />
      </View>
    </View>
  );
}
var styles = StyleSheet.create({
  container:{
    justifyContent:"space-between",
    height:"100%"
  },
  textInputView: {
    // alignSelf: 'stretch',
    borderWidth:2,
    bottom:0,
    borderColor:"red"
  },
  textFiled: {
    height: 40,
    width: '99%',
    borderWidth: 1,
    backgroundColor: 'aqua',
    alignSelf: 'center',
  },
});
