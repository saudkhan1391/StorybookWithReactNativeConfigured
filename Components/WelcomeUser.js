import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import EntypIcon from 'react-native-vector-icons/Entypo';
import AntIcon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
export default function WelcomeUser(props) {
  return (
    <View style={styles.container}>
      <View style={styles.welcomeBackView}>
        <Text style={styles.welcomeBackText}>Welcome User</Text>
      </View>
      <View style={styles.signInToContinueView}>
        <Text style={styles.signIntoContinueText}>Sign up to join</Text>
      </View>
      <View style={styles.userinputsContainer}>
        <View style={styles.usernameView}>
          <TextInput style={{paddingHorizontal: 4}} placeholder="Name" />
        </View>
        <View style={styles.usernameView}>
          <TextInput style={{paddingHorizontal: 4}} placeholder="Email" />
        </View>
        <View style={styles.usernameView}>
          <TextInput style={{paddingHorizontal: 4}} placeholder="Password" />
        </View>
        <View style={styles.usernameView}>
          <TextInput style={{paddingHorizontal: 4}} placeholder="Mobile" />
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
      <TouchableOpacity style={styles.donthaveanaccountView}>
        <Text style={{textAlign: 'center', color: '#666666', fontSize: 17}}>
          Have an account?{' '}
          <Text style={{color: '#fe5398', fontWeight: 'bold'}}> Sign In</Text>{' '}
        </Text>
      </TouchableOpacity>
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
    color: 'grey',
  },
  signInToContinueView: {
    marginTop: '5%',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeBackView: {
    // borderWidth: 1,
    borderColor: 'red',
    marginTop: '20%',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeBackText: {
    // borderWidth:1,
    // marginTop: '8%',
    fontSize: 28,
    fontWeight: 'bold',
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
