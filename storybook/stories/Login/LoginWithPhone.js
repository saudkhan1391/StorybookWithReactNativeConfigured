import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import {Button} from 'react-native-material-ui';
import {TextInput} from 'react-native-gesture-handler';
export default function LoginWithPhone(props) {
  return (
    <ImageBackground
      source={require('../../../assets/images/login-background2.jpg')}
      style={styles.MainContainer}>
      <View style={{height: '5%'}} />
      <View style={styles.LogoContainer}>
        <Image
          style={styles.logoImage}
          source={require('../../../assets/images/logo.png')}
        />
      </View>
      <View style={{height: '5%'}} />
      <View style={styles.piecofMindView}>
        <Text style={styles.emailText}>Enter Phone Number:</Text>
        <TextInput placeholder="+1" style={styles.emailTextInput} />
      </View>
      {/* <View style={styles.loginButonView}>
          <Text>Login</Text>
      </View> */}
      <Button
        style={{
          container: {
            height: '9%',
            width: '70%',
            alignSelf: 'center',
            backgroundColor: '#9E1E61',
          },
        }}
        raised
        primary
        text="send code"
      />
            <View style={{height: '25%'}} />
      <Button
        style={{
          container: {
            height: '9%',
            width: '70%',
            alignSelf: 'center',
            backgroundColor: '#30C5FD',
          },
        }}
        raised
        primary
        text="Login with email"
      />

      {/* // disabled button */}
      {/* <Text>LOGIN WITH PHONE NUMBER</Text> */}
      {/* <View style={[styles.loginButonView, {backgroundColor: 'purple'}]}></View> */}
    </ImageBackground>
  );
}
const ola = {
  second: {
    color: 'red',
    backgroundColor: 'green',
    borderWidth: 1,
    // third:{
    //     color:"blue",
    // }
  },
};
const styles = StyleSheet.create({
  forgetPasText: {
    color: 'white',
    textAlign: 'center',
  },
  forgetPasView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '5%',
    // borderWidth: 1,
  },
  emailTextInput: {
    height: '45%',
    borderRadius: 5,
    backgroundColor: 'white',
    paddingLeft: 15,
  },
  emailText: {color: 'white', height: '25%'},
  logoImage: {resizeMode: 'contain', width: '100%', height: '100%'},
  loginButonView: {
    height: '9%',
    width: '65%',
    backgroundColor: 'aqua',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  pieceofmindtext: {color: 'white', fontSize: 24, textAlign: 'center'},
  piecofMindView: {
    height: '19%',
    width: '85%',
    alignSelf: 'center',
    // backgroundColor: 'black',
    // borderWidth: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  LogoContainer: {
    width: '40%',
    height: '18%',
    // borderWidth: 1,
    alignSelf: 'center',
  },
  MainContainer: {
    height: '100%',
  },
});
