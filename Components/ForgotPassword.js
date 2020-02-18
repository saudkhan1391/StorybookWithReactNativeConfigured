import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import EntypIcon from 'react-native-vector-icons/Entypo';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
export default function ForgotPassword(props) {
  return (
    <View style={styles.container}>
      <View style={styles.welcomeBackView}>
        <FontAwesome name="long-arrow-left" />
        <Text style={styles.welcomeBackText}>Forgot Password</Text>
        <View />
      </View>
      <View style={styles.signInToContinueView}>
        <Text style={styles.signIntoContinueText}>
          Enter your email and will send you instructions on how to reset it{' '}
        </Text>
      </View>
      <View style={styles.userinputsContainer}>
        <View style={styles.usernameView}>
          <TextInput style={{paddingHorizontal: 4}} value=" Email" />
        </View>
      </View>
      <View style={styles.signButtonView}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#fe5497', '#7f2284']}
          style={styles.LinearGradient}>
          <Text style={styles.signinText}>Sign Up</Text>
        </LinearGradient>
      </View>
    </View>
  );
}
var styles = StyleSheet.create({
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
    width: '90%',
    // alignSelf:"center",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    // marginTop:"5%"
    marginTop: 40,
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
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    textAlign: 'center',

    // color: 'grey',
  },
  signInToContinueView: {
    marginTop: '5%',
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '80%',
    alignSelf: 'center',
  },
  welcomeBackView: {
    // borderWidth: 1,
    borderColor: '#efefef',
    // marginTop: '20%',
    height:"10%",
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal:10,
    borderBottomWidth:1
  },
  welcomeBackText: {
    // borderWidth:1,
    // marginTop: '8%',
    fontSize: 18,
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
