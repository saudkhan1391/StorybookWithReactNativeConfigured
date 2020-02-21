import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native-gesture-handler';

import LinearGradient from 'react-native-linear-gradient';
// import MarkerSvg from "../assets/svgs/Dog.svg";
import MarkerSvg from '../assets/svgs/icon-marker.svg';
export default function SetLocation(props) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.logoView}>
          <MarkerSvg width={70} height={70} />
        </View>
        <View style={styles.welcomeBackView}>
          <Text style={styles.welcomeBackText}>Hello, nice to meet you</Text>
        </View>
        <View style={styles.signInToContinueView}>
          <Text style={styles.signIntoContinueText}>
            Set your location to start finding services around you
          </Text>
        </View>

        <TouchableOpacity 
        onPress={()=>{
          props.navigation.navigate("HomeScreen")
        }}
        style={styles.signButtonView}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#fe5497', '#7f2284']}
            style={styles.LinearGradient}>
            <Text style={styles.signinText}>Use Current Services</Text>
          </LinearGradient>
        </TouchableOpacity>
        <View style={styles.weonlyuseTextView}>
          <Text style={{color: '#666666'}}>
            We are only using your location while you are using this incredible
            app
          </Text>
        </View>
        <View style={styles.setyourlocationView}>
          <Text style={{color: '#fe5497', fontSize: 18}}>
            Or set your location manually
          </Text>
        </View>
    </ScrollView>
      </View>
  );
}
var styles = StyleSheet.create({
  logoView: {marginLeft: '10%', marginTop: '10%', marginBottom: '10%'},
  setyourlocationView: {
    marginTop: '10%',
    justifyContent: 'center',
    // alignItems:"flex-start",
    width: '80%',
    alignSelf: 'center',
  },
  weonlyuseTextView: {
    marginTop: '5%',
    width: '80%',
    alignSelf: 'center',
  },
  donthaveanaccountView: {
    marginTop: '20%',
    width: '95%',
    alignSelf: 'center',
    // justifyContent: 'space-around',
    // borderWidth: 2,
  },
  iconView: {
    width: 30,
    // borderWidth: 1,
  },
  signinText: {
    color: 'white',
    fontWeight: 'bold',
  },
  signWithFBtext: {
    color: '#fe5398',
    fontWeight: 'bold',
  },
  LinearGradient: {
    height: '100%',
    width: '100%',
    // alignSelf:"center",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    // marginTop:"5%"
    // marginTop: 40,
  },
  singWithFbView: {
    justifyContent: 'center',
    alignItems: 'center',
    // alignContent:"center",
    height: 50,
    borderWidth: 2,
    borderColor: '#fe5398',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 8,
    // marginTop: '10%',
    marginTop: 30,
    flexDirection: 'row',
  },
  signButtonView: {
    height: 50,
    // borderWidth: 3,
    borderColor: 'yellow',
    width: '80%',
    alignSelf: 'center',
    // paddingTop:"5%"
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginTop: '5%',
  },
  remebermeText: {
    color: '#666666',
  },
  forgotPassText: {
    color: '#8a8a8f',
  },
  remembermeView: {
    justifyContent: 'space-between',
    // paddingHorizontal: '3%',
    flexDirection: 'row',
    marginTop: '5%',
    width: '90%',
    alignSelf: 'center',
    // borderWidth:1,
    alignItems: 'center',
  },
  userinputsContainer: {
    marginTop: '8%',
    // borderWidth: 1,
  },
  usernameView: {
    //   borderWidth:10,
    marginTop: '2%',
    // height: '23%',
    height: 50,
    width: '90%',
    alignSelf: 'center',
    // borderWidth:1,
    // backgroundColor:"red"
    backgroundColor: '#efeff4',
    borderRadius: 8,
  },
  signIntoContinueText: {
    fontSize: 18,
    color: '#666666',
    // textAlign: 'center',

    // color: 'grey',
  },
  signInToContinueView: {
    marginTop: '5%',
    marginBottom: '10%',
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '80%',
    // borderWidth:1,
    alignSelf: 'center',
    fontSize: 30,
  },
  welcomeBackView: {
    // borderColor: '#efefef',
    // marginTop: '20%',
    // height:"10%",
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 20,
    // paddingHorizontal:10,
    width: '80%',
    alignSelf: 'center',
    // borderWidth:1
  },
  welcomeBackText: {
    // borderWidth:1,
    // marginTop: '8%',
    fontSize: 34,
    fontWeight: 'bold',
    // alignSelf:"center"
  },
  container: {
    // justifyContent: 'space-between',
    height: '100%',
    backgroundColor: 'white',
  },
  textInputView: {
    // alignSelf: 'stretch',
    borderWidth: 2,
    bottom: 0,
    borderColor: 'red',
  },
  textFiled: {
    height: 40,
    width: '99%',
    borderWidth: 1,
    backgroundColor: 'aqua',
    alignSelf: 'center',
  },
});
